Form1.onshow=function(){
    let custQuery = "SELECT * FROM books;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmg58665&pass=Klg28398&database=375groupb5&query=" + custQuery)

    if (req1.status == 200) { //transit worked
        console.log(req1.responseText)
        let results = JSON.parse(req1.responseText)
              
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        for (i=0; i<= results.length - 1; i++){
           Dropdown1.addItem(results[i])
          }
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox(`Error code: ${req1.status}`)  
}
