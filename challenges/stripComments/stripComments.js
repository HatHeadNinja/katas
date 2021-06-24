const strippedComments = (input, markers) => {

  const slice = (a, m) => a.split(/\n/).reduce((a,v) => v.includes(m) ? a += '\n' + v.slice(0, v.indexOf(m)).trim() : a += '\n' + v, '')
  return markers.reduce((a, m) => a = slice(a, m), input).trim();

}

const strippedCommentsV2 = (input, markers) => input.replace( new RegExp(" [" + markers.join(',') + "].+", "gi"), '' );

module.exports = strippedComments;

// refactor examples:
// const solution = (input, markers) => input.replace( new RegExp(" [" + markers.join(',') + "].+", "gi"), '' );

// function solution(input, markers) {
//   return input.replace(/(\s\W\w+).*|(\s\W\s?\w+\s?\w+)/g, "");
// };
