
var query = "SELECT Item_Condition, Item_type, Price FROM furniture"
 // alert(query)
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=" + query)
  if (req1.status == 200) { //transit worked.
      results = JSON.parse(req1.responseText)
      console.log(results)
      
// an array of arrays. One array for each row.
 var data3 = results

var dataJson = JSON.stringify(data3)    // put data in another format - use later

var columns3 = [               // column headings
            {title: "Item Condition"},
            {title: "Item Type"},
            {title: "Price"}
        ]
        
function Main() {     // use this as runs first but waits until everything is loaded
  updateTable()
}

function updateTable() {    // re-display table
  DataTable3.settings.columns = columns3
  DataTable3.settings.data = data3
  DataTable3.build()
}

function loadTable() {    // reload table when changed entire table
  var table = $("#DataTable3").DataTable()
  table.rows.add(DataTable3.settings.data).draw()
}}

btnFurnitureSearchBack.onclick=function(){
  ChangeForm(Home)
}
