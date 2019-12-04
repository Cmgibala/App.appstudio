lookupTitle = ""

    var query = "SELECT Title, Posting_header, Book_Condition, Price FROM books"
   // alert(query)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=" + query)
    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results)
        
  // an array of arrays. One array for each row.
   var data1 = results
   
var dataJson = JSON.stringify(data1)    // put data in another format - use later

var columns1 = [               // column headings
            {title: "Title"},
            {title: "Posting Header"},
            {title: "Condition"}, 
            {title: "Price"}
        ]
        
function Main() {     // use this as runs first but waits until everything is loaded
  updateTable();
  //loadTable();
}

function updateTable() {    // re-display table
  DataTable2.settings.columns = columns1
  DataTable2.settings.data = data1
  DataTable2.build()
}

function loadTable() {    // reload table when changed entire table
  var table = $("#DataTable2").DataTable()
  table.rows.add(DataTable2.settings.data).draw()
}
}


  DataTable2.onclick=function(){
     if (typeof(event.target._DT_CellIndex) != "object") {
          return;
        }
        var row, col;
        row = event.target._DT_CellIndex.row;
        col = event.target._DT_CellIndex.column;
        lookupTitle = data1[row][0]
        console.log(lookupTitle)
        ChangeForm(BookBuy)
        
  }





btnBookSearchBack.onclick=function(){
  ChangeForm(HomePage)
}


function refreshTable(){
    $("#DataTable2").DataTable().ajax.reload()
}


