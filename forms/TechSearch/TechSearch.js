/*
var query = "SELECT Type, Brand_Model, Item_Condition, Price FROM technology"
 // alert(query)
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=" + query)
  if (req1.status == 200) { //transit worked.
      results = JSON.parse(req1.responseText)
      console.log(results)
      
// an array of arrays. One array for each row.
 var data2 = results

var dataJson = JSON.stringify(data2)    // put data in another format - use later

var columns2 = [               // column headings
            {title: "Type"},
            {title: "Brand & Model"},
            {title: "Item Condition"},
            {title: "Price"}
        ]
        
function Main() {     // use this as runs first but waits until everything is loaded
  updateTable()
}

function updateTable() {    // re-display table
  DataTable1.settings.columns = columns2
  DataTable1.settings.data = data2
  DataTable1.build()
}

function loadTable() {    // reload table when changed entire table
  var table = $("#DataTable1").DataTable()
  table.rows.add(DataTable1.settings.data).draw()
}}
*/