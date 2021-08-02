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
};

module.exports = registrationValidationSchema;
