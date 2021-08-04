const UserService = require('../services/user-service');

const registrationValidationSchema = {
  email: {
    in: ['body'],
    exists: { errorMessage: 'email is required field', bail: true },
    notEmpty: { errorMessage: 'email is required field', bail: true },
    isEmail: { errorMessage: 'Invalid email value' },
  },
  password: {
    in: ['body'],
    exists: { errorMessage: 'password is required field', bail: true },
    notEmpty: { errorMessage: 'password is required field', bail: true },
    isLength: {
      errorMessage: 'password length must be from 6 to 32 symbols',
      options: { min: 6, max: 32 },
    },
  },
  nickname: {
    in: ['body'],
    exists: { errorMessage: 'nickname is required field', bail: true },
    notEmpty: { errorMessage: 'nickname is required field', bail: true },
    custom: {
      errorMessage: 'Nickname already exists',
      options: async nicknameValue =>
        (await UserService.checkIsNicknameUnique(nicknameValue))
          ? Promise.resolve()
          : Promise.reject(),
    },
  },
};

module.exports = registrationValidationSchema;
