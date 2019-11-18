
Books.onshow=function(){
   let check = inptTitle.value
    let query = "SELECT title FROM books"  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=" + query)
    
    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results) 
        
    if (results.length == 0)     
        NSB.MsgBox("There are no books of that type.")
    else {        
        console.log("the parsed JSON is " + results)
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtBooks.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}

btnSubmit.onclick=function(){

    let check = inptTitle.value
    let query = "SELECT title FROM books WHERE title = " + '"' + check + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=" + query)
    
    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results) 
        
    if (results.length == 0)     
        NSB.MsgBox("There are no books of that type.")
    else {        
        console.log("the parsed JSON is " + results)
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtBooks.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}



