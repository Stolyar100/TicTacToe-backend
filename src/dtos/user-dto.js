module.exports = class UserDto {
  constructor({ _id, nickname }) {
    this.id = _id;
    this.nickname = nickname;
  }
};
