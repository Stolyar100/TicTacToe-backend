const bcrypt = require('bcrypt');
const UserModel = require('../models/user-model');
const MailService = require('./mail-service');
const TokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`User with email - ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const user = await UserModel.create({ email, password: hashPassword });
    await MailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${hashPassword}`
    );

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
