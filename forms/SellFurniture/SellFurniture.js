rooms = ["Kitchen", "Living Room",  "Bathroom", "Bedroom"]
furnitureTypes = ["Toaster Oven", "Futon", "TV Stand", "Microwave", "Desk", "Lamp", "Couch", "Mattress", "Bed Frame", "Cookware", "Other" ]
furnitureTypes.sort();

NewFurnitureType = ""
NewItemRoom = ""
NewFurnitureAddress = ""
NewFurniturePhone = ""


//Populates the dropdown with the item types
 SellFurniture.onshow=function(){
    drpRoom.clear()
  for (i = 0; i <= rooms.length - 1; i++) 
    drpRoom.addItem(rooms[i])
    drpItemType.clear()
  for (i = 0; i <= furnitureTypes.length - 1; i++) 
    drpItemType.addItem(furnitureTypes[i])
    
}

//Dropdown Option
drpRoom.onclick=function(s){
   if (typeof(s) == "object"){ 
      return                     
  } else {
      drpRoom.value = s;
      NewItemRoom = drpRoom.value;
      }
}

//Dropdown Option
drpItemType.onclick=function(s){
   if (typeof(s) == "object"){ 
      return                     
  } else {
      drpItemType.value = s;
      NewFurnitureType = drpItemType.value;
      }
  
}


//Go Home
sellfurniturelogo.onclick=function(){
  ChangeForm(HomePage)
}

btnSellFurnitureEnter.onclick=function(){
  NewItemRoom = drpRoom.value
  NewFurnitureAddress = inptFurnitureAddress.value
  NewFurniturePhone = inptFurniturePhone.value
  
  console.log(NewFurnitureType);
  console.log(NewItemRoom);
  console.log(NewFurnitureAddress);
  console.log(NewFurniturePhone);
  
}



btnSellFurnitureBack.onclick=function(){
  ChangeForm(SellItem1);
}
