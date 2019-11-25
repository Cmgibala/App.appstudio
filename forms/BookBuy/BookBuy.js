itemTitle = ""
itemCondition = ""
itemPrice = ""
itemPublisher = ""
itemAuthor = "" 
itemGenre = ""
itemDescription = ""


BookBuy.onshow=function(){
    var query = "SELECT * FROM books WHERE Title =" + '"' + lookupTitle + '"' 
   // alert(query)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=" + query)
    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results)
        itemTitle = results[0][1]
        itemCondition = results[0][2]
        itemPrice = results[0][5]
        itemPublisher = results[0][8]
        itemAuthor = results[0][6]
        itemGenre = results[0][7]
        itemDescription = results[0][3]
        console.log(itemDescription)

        //Populate Form
        taBuyDescription.value  = itemDescription
        inptBuyCondition.value = itemCondition
        inptBuyAuthor.value = itemAuthor
        inptBuyGenre.value = itemGenre
        inptBuyPublisher.value = itemPublisher
        lblBuyTitle.value = itemTitle
        inptBuyPrice.value = itemPrice
        
        }
}


btnBuyBookBack.onclick=function(){
  ChangeForm(BooksSearch);
}
