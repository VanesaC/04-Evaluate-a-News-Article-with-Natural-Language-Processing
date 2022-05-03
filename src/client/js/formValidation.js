// export function checkForName(inputText) {
//   console.log('::: Running checkForName :::', inputText);
//   let names = ['Picard', 'Janeway', 'Kirk', 'Archer', 'Georgiou'];

//   if (names.includes(inputText)) {
//     alert('Welcome, Captain!');
//   }
// }

export function validateForm() {
  let x = document.forms['myForm']['input'].value;
  if (x == '') {
    alert('Name box must be filled out');
    return false;
  }
}

// module.exports = validateForm;
