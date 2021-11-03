function removeChar() {
    //let x be the input the user types in//
    let x = document.getElementById("txtNumber").value;
    
    //replace any "#" with a blank//
    x = x.replace(/#| /g, '');

    //display the div result from html as the changed x//
    document.getElementById("result").innerHTML = x;
  }