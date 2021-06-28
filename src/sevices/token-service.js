const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model');
const TokenModel = require('../models/token-model');

class TokenService {
  constructor() {
    this.accessTokenSecret = process.env.JWT_ACCESS_SECRET;
    this.refreshTokenSecret = process.env.JWT_REFRESH_SECRET;
  }

  generateTokens(payload) {
    const accessToken = jwt.sign(payload, this.accessTokenSecret, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, this.accessTokenSecret, {
      expiresIn: '30d',
    });
    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await TokenModel.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
