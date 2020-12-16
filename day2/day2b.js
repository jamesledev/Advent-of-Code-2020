const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const result = event.target.files[0];
  const promise = result.text();
  promise.then((data) => {
    const theData = data.split('\n');
    console.log(theData);
    let succesfulPasswords = 0;
    for (i = 0; i < theData.length; i++) {
      const testCode = theData[i];
      const ogString = testCode.split(':');
      const password = ogString[1];
      const arrayofPassword = password.split('');
      // console.log(arrayofPassword)
      const firstHalf = ogString[0].split(' ');
      const checkedLetter = firstHalf[1];
      const conditions = firstHalf[0];
      const splitCondition = conditions.split('-');
      const firstCondition = splitCondition[0];
      const secondCondition = splitCondition[1];
      var re = new RegExp(checkedLetter, 'g');
      const firstIndex = arrayofPassword[firstCondition].match(re);
      const secondIndex = arrayofPassword[secondCondition].match(re);
      const firstIndexCheck = firstIndex ? firstIndex.length : 0;
      const secondIndexCheck = secondIndex ? secondIndex.length : 0;
      if (firstIndexCheck == 1 && secondIndexCheck != 1) {
        succesfulPasswords++;
        console.log(succesfulPasswords);
      } else if (firstIndexCheck != 1 && secondIndexCheck == 1) {
        succesfulPasswords++;
        console.log(succesfulPasswords);
      } else {
        console.log('poop');
      }
    }
  });
});

// let succesfulPasswords = 0
// const testCode = '1-3 l: llljn'
// const ogString = testCode.split(":")
// const password = ogString[1]
// const arrayofPassword = password.split("")
// console.log(arrayofPassword)
// const firstHalf = ogString[0].split(" ")
// const checkedLetter = firstHalf[1]
// const conditions = firstHalf[0]
// const splitCondition = conditions.split("-")
// const firstCondition = splitCondition[0]
// const secondCondition = splitCondition[1]
// var re = new RegExp(checkedLetter, 'g')
// const firstIndex = arrayofPassword[firstCondition].match(re)
// const secondIndex = arrayofPassword[secondCondition].match(re)
// const firstIndexCheck = firstIndex ? firstIndex.length : 0;
// const secondIndexCheck = secondIndex ? secondIndex.length : 0;
// if(firstIndexCheck == 1 && secondIndexCheck == 1) {
//   succesfulPasswords ++
//   console.log(succesfulPasswords)
// } else {
//   console.log('poop')
// }
