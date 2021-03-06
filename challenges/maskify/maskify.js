function maskify(string) {
  return '#'.repeat(string.slice(0, -4).length) + string.slice(-4);
}
// This solution is half the amount of code of my first iteration

module.exports = maskify;

// First iteration
// ===============
function maskifyV1(string) {
  const chars = string.split('');
  for (let i = 0; i < (chars.length - 4); i++) {
    chars[i] = '#';   
  }
  return chars.join('');
}
// Redo as repeat
// ===============
// Similar to duplicateCount, this soluton uses a string instead of an array,
// which reduces the amount computation required.
//
// Sometimes using an array for what appears to be a very rudimentary problem
// feels like using a hammer for something that's not a nail
//
// Also like the chaining, where I might have created several intermediate
// variables (for something which appears to be very rudimentary)
//
// to check out: repeat
//
// function maskify(cc) {
  //   return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
  // }
  
  