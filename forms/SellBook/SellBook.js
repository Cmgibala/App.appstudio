NewItemGenre = ""
NewItemAuthor = ""
NewItemPublisher = ""
NewItemTitle  = ""


drpGenre.onclick=function(s){
  if (typeof(s) == "object"){ 
    return                     
  } else {
    drpGenre.value = s   
    NewItemGenre = drpGenre.value
    }

}

btnSubmitBook.onclick=function(){
  NewItemAuthor = inptAuthor.value;
  NewItemPublisher = inptPublisher.value;
  NewItemTitle = inptBookTitle.value
  console.log(NewItemAuthor);
  console.log(NewItemPublisher);
  console.log(NewItemGenre);
  console.log(NewItemTitle)



    let custQuery = 'INSERT INTO books (Title, Book_Condition, Posting_header, Description, Price, Author, Genre, Publisher) VALUES ('+ '"' + NewItemTitle + '"' + "," + '"' + NewItemCondition + '"' + "," + '"' + NewItemHeader + '"' + "," + '"' + NewItemDescription+ '"'+ "," + '"' + NewItemPrice + '"' +  "," + '"' + NewItemAuthor+ '"' +  "," + '"' + NewItemGenre + '"' +  "," +  '"' + NewItemPublisher + '"' +" )" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=375groupb5&query=" + custQuery)

    if (req1.status == 200) { //transit worked
        console.log(req1.responseText)
        let results = JSON.parse(req1.responseText)
              
        if (results.length == 0)
          NSB.MsgBox("There are no customers from that state.")
        else {        
          console.log("the parsed JSON is " + results)
          // output the names of all the dogs
          alert("New Item Added");
            }
        } 
}


btnSellBookBack.onclick=function(){
  ChangeForm(SellItem1)
}

//Go Home
Image1CopyCopy.onclick=function(){
  ChangeForm(HomePage)
}
