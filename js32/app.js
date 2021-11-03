function Random() {
    return Math.floor(Math.random() * 11);
  }
  
  function randomValue() {
    document.getElementById('randNum').value = Random();
  }