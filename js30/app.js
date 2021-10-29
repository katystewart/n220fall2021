//create function//
function myFunction() {

//retrieve input from HTML for both inputs//
let userName=document.getElementById("txtuserName").value;
let passWord=document.getElementById("txtpassWord").value;

//if statement that when first input is Username and second is Password,//
//appears on dvanswer//
if (userName=="Username" && passWord=="Password")
  {
//retrieving dvanswer and outputting answer if right//
document.getElementById("dvanswer").innerHTML="Success";
  }
else
  {
//retrieving dvanswer and outputting answer if wrong//
document.getElementById("dvanswer").innerHTML="Wrong information";
  }
}