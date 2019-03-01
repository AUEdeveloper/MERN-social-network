const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  //validator can work only with string type, thus it's neccessary to create an empty string if data.name is empty
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!validator.isLength(data.text, { min: 1, max: 300 })) {
    errors.text = "Post must between 1 and 300 characters";
  }

  if (validator.isEmpty(data.text)) {
    errors.text = "text is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
