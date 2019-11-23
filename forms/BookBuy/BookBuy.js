BookBuy.onshow=function(){
    var query = "SELECT * FROM books WHERE Title =" + '"' + lookupTitle + '"' 
   // alert(query)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=" + query)
    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results)
        }
}
