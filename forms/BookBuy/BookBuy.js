
var query = "SELECT * FROM books WHERE Title =" + '"' + lookupTitle + '"'
 // alert(query)
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=" + query)
  if (req1.status == 200) { //transit worked.
      results = JSON.parse(req1.responseText)
      console.log(results)
      }
      

xlet resultsName = ""



BookBuy.onshow=function(){
    inptDescription.value = arrayDescription[chosenIndex]
    imgYelp1.src = arrayImage[chosenIndex]
    inptCondition.value = arrayCondition[chosenIndex]
    inptAuthor.value = arrayAuthor[chosenIndex]
    lblTitle.value = arrayTitle[chosenIndex]
    taAddress.value = arrayAddress[chosenIndex]
}  // closes event

hmbMenu31.onclick=function(s){
 if (s == "Yelp")
     ChangeForm(Yelp)
 else if (s ==  "Yelp with Ratings")
     ChangeForm(YelpRatings)
  
}
