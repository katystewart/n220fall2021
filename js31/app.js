//Create an application that with an input and a button. 
//When the user clicks on the button, update a div on the page to tell 
//the user if what the user typed into the input is divisible by 7 or not. 
//Use a separate function from the onclick function to discern if it is divisible. 
//This function should return either true if it is divisible  or false if it is not.



/*function myFunction() {
    let number = divide();
    dvanswer.innerHTML = number;
    
}
*/

//function that takes a numerical arguement//
//returns true or false if that number is divisible by 7//


 function divide() {
    let x = document.getElementById("divisibleBy").value;

    if (x % 7==0) {
    document.getElementById("dvanswer").innerHTML="True"
    } 
    
    else {
    document.getElementById("dvanswer").innerHTML="False"
    }
    console.log(x);
} 
