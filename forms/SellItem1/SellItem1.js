types = ["book", "furniture", "technology"]
NewItemDescription = ""
NewItemCondition = ""
NewItemPrice = ""
NewItemHeader = ""
NewItemType = ""

//Populates the dropdown with the item types
SellItem1.onshow=function(){  
  drpTypes.clear()
  for (i = 0; i <= types.length - 1; i++) 
    drpTypes.addItem(types[i])
}

// Changes the values of the dropdown to the user's selection
drpTypes.onclick=function(s){
   if (typeof(s) == "object"){ 
    return                     
  } else {
    drpTypes.value = s   
    NewItemType = drpTypes.value
    }

}

// Sets the condition
rdoCondition.onchange=function(){
    if (rdoCondition.value === 0) {
    NewItemCondition = 1;
    } else if (rdoCondition.value === 1){
      NewItemCondition = 2;
    } else if (rdoCondition.value === 2){
      NewItemCondition = 3;
    } else if (rdoCondition.value === 3){
      NewItemCondition = 4;
    } else if (rdoCondition.value === 4){
      NewItemCondition = 5;
  }
  console.log(NewItemCondition)

}

// Changes to next form and assigns item type, price, header, and description
btnEnter.onclick=function(){
  NewItemType = drpTypes.value
  NewItemPrice = inptPrice.value
  NewItemHeader = inptPostingHeader.value
  NewItemDescription = inptItemDescription.value
  if (NewItemType ==  "book")
    ChangeForm(SellBook);
  else if (NewItemType == "furniture")
    ChangeForm(SellFurniture);
  else if (NewItemType == "technology")
    ChangeForm(SellTechnology);
  
  console.log(NewItemType);
  console.log(NewItemPrice);
  console.log(NewItemHeader);
  console.log(NewItemDescription);
}



btnEnterCopy.onclick=function(){
  ChangeForm(HomePage)
}

//GoHome
Image1Copy.onclick=function(){
  ChangeForm(HomePage)
}
