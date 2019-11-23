rooms = ["Kitchen", "Living Room",  "Bathroom", "Bedroom"]
furnitureTypes = ["Toaster Oven", "Futon", "TV Stand", "Microwave", "Desk", ]
NewFurnitureType = ""
NewItemRoom = ""


//Populates the dropdown with the item types
 SellFurniture.onshow=function(){
    drpRoom.clear()
  for (i = 0; i <= rooms.length - 1; i++) 
    drpRoom.addItem(rooms[i])
}

drpRoom.onclick=function(s){
   if (typeof(s) == "object"){ 
      return                     
  } else {
      drpRoom.value = s;
      NewItemRoom = drpRoom.value;
      }
}


//Go Home
sellfurniturelogo.onclick=function(){
  ChangeForm(HomePage)
}
