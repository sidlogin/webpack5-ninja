function add(a, b) {
    return a + b;
}


function addWihMultiply(a, b, c) {
  return (a + b) * c;
}

/* Exporting single funtion 'add' as per ES6 Format */
export default  add;

/* Exporting multiple functions as per CommonJS Format. You have option to rename function while exporting. */

// module.exports = {
//   add: add,
//   addMultiply: addWihMultiply
// }

/* Exporting multiple functions using shortcut way if your want to keep similar name as per actual function names using CommonJS Format */
// module.exports = {
//   add,
//   addWihMultiply
// }