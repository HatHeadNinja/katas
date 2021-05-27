function validateV1(password) {
  let regexp = /[a-z](![.!?\\-])/;
  return password.length < 7
         ? regexp.test(password)
         : false
  //return password.match(regexp);
}

function validate(password) {
  
  if (/[a-z]{6,}/) return false;

  if (!/[a-z]/.test(password)) {
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    return false;
  }

  if (!/[0-9]/.test(password)) {
    return false;
  }

  if (/[.!?\\-]/.test(password)) {
    return false;
  }

  return true;
}

// alphanumeric only: \w{1,6}
// one upper case: [A-Z]
// one lower case: [a-z]
// one number: [0-9]
// no special characters: 
// <=6 length: {1.6}
// How to concatenate/combine regex parameters?


validate('a1.b2c') //?
validate('!aB123') //?
validate('ab123!') //?
validate('!@#$%^') //?
validate('abcdefg') //?
validate('abcdefg1B') //?
validate('123456') //?
validate('abc123') //?
validate('abcdef') //?
validate('123') //?
validate('abc') //?
validate('AbC1') //?
validate('abC123') //?
validate('123aBC') //?


module.exports = validate;