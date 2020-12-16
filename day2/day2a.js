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
      const firstHalf = ogString[0].split(' ');
      const checkedLetter = firstHalf[1];
      const conditions = firstHalf[0];
      const splitCondition = conditions.split('-');
      const firstCondition = splitCondition[0];
      const secondCondition = splitCondition[1];
      var re = new RegExp(checkedLetter, 'gi');
      const passwordMatch = password.match(re);
      const theTest = passwordMatch ? passwordMatch.length : 0;
      if (theTest >= firstCondition && theTest <= secondCondition) {
        succesfulPasswords++;
        console.log(succesfulPasswords);
      }
    }
  });
});

// let succesfulPasswords = 0
// const testCode = "1-3 d: dddd"
// const ogString = testCode.split(":")
// const password = ogString[1]
// const firstHalf = ogString[0].split(" ")
// const checkedLetter = firstHalf[1]
// const conditions = firstHalf[0]
// const splitCondition = conditions.split("-")
// const firstCondition = splitCondition[0]
// const secondCondition = splitCondition[1]
// var re = new RegExp(checkedLetter, 'gi')
// const theTest = password.match(re).length
// if(theTest >= firstCondition && theTest <= secondCondition){
//   succesfulPasswords ++
//   console.log(succesfulPasswords)
// }
