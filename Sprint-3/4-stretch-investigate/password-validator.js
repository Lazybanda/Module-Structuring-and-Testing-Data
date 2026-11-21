const regexCondition = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%.*&]).+$/;

const passwordValidator = (password) =>
  password.length >= 5 && regexCondition.test(password);

module.exports = passwordValidator;

// Hello, for disclosure i did use AI for the Regex
