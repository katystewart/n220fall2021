let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   //prints out the data in three div lines//
   function makeObjects() {
   for(var i = 0; i < objects.length; i++) {
       let newE1 = document.createElement("div");
       newE1.innerHTML = objects[i].color + ", " + objects[i].height + ", " + objects[i].width;
       dvFound.appendChild(newE1);
   }
}