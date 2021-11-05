function Random() {
    //selects a random whole number between 0 and 10//
    return Math.floor(Math.random() * 11);
  }
  
  function randomValue() {
      //outputs in the input field the random number//
    document.getElementById('randNum').value = Random();
  }