{
  "fullScreen": "true", 
  "cached_js": "/*\nvar query = \"SELECT Item_Condition, Item_type, Price FROM furniture\"\n // alert(query)\nreq1 = Ajax(\"https://ormond.creighton.edu/courses/375/ajax-connection.php\", \"POST\", \"host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=\" + query)\n  if (req1.status == 200) { //transit worked.\n      results = JSON.parse(req1.responseText)\n      console.log(results)\n      \n// an array of arrays. One array for each row.\n var data3 = results\n\nvar dataJson = JSON.stringify(data3)    // put data in another format - use later\n\nvar columns3 = [               // column headings\n            {title: \"Item Condition\"},\n            {title: \"Item Type\"},\n            {title: \"Price\"}\n        ]\n        \nfunction Main() {     // use this as runs first but waits until everything is loaded\n  updateTable()\n}\n\nfunction updateTable() {    // re-display table\n  DataTable3.settings.columns = columns3\n  DataTable3.settings.data = data3\n  DataTable3.build()\n}\n\nfunction loadTable() {    // reload table when changed entire table\n  var table = $(\"#DataTable3\").DataTable()\n  table.rows.add(DataTable3.settings.data).draw()\n}}\n*/", 
  "height": 460, 
  "scroll_options": "mouseWheel:true, bounce:true, zoom:false", 
  "id": "FurnitureSearch", 
  "borderColor": "", 
  "style": "", 
  "cached_js_script_hash": "3306d86bc355f9fbb67a8191a35c5cf6", 
  "script": "\nvar query = \"SELECT Item_Condition, Item_type, Price FROM furniture\"\n // alert(query)\nreq1 = Ajax(\"https://ormond.creighton.edu/courses/375/ajax-connection.php\", \"POST\", \"host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=375groupb5&query=\" + query)\n  if (req1.status == 200) { //transit worked.\n      results = JSON.parse(req1.responseText)\n      console.log(results)\n      \n// an array of arrays. One array for each row.\n var data3 = results\n\nvar dataJson = JSON.stringify(data3)    // put data in another format - use later\n\nvar columns3 = [               // column headings\n            {title: \"Item Condition\"},\n            {title: \"Item Type\"},\n            {title: \"Price\"}\n        ]\n        \nfunction Main() {     // use this as runs first but waits until everything is loaded\n  updateTable()\n}\n\nfunction updateTable() {    // re-display table\n  DataTable3.settings.columns = columns3\n  DataTable3.settings.data = data3\n  DataTable3.build()\n}\n\nfunction loadTable() {    // reload table when changed entire table\n  var table = $(\"#DataTable3\").DataTable()\n  table.rows.add(DataTable3.settings.data).draw()\n}}\n\nbtnFurnitureSearchBack.onclick=function(){\n  ChangeForm(Home)\n}\n", 
  "top": "0", 
  "!type": "Form", 
  "designWidth": 0, 
  "onresize": "", 
  "width": 320, 
  "theme": "", 
  "HTML": "", 
  "onkeypress": "", 
  "class": "", 
  "_uuid": "e7e2d4ac203847fda5106a30582b2646", 
  "backgroundimage": "", 
  "onhide": "", 
  "background": "", 
  "attributes": "", 
  "scrolling": "false", 
  "setFocusID": "", 
  "openMode": "none", 
  "locked": false, 
  "language": "JavaScript", 
  "onshow": "", 
  "parentForm": "", 
  "children": [
    {
      "scrollCollapse": "true", 
      "right": "0", 
      "cached_js": "", 
      "ButtonsPDFMake": "false", 
      "searching": "true", 
      "height": "5", 
      "Buttons": "false", 
      "fontFamily": "", 
      "FixedHeader": "false", 
      "onresize": "", 
      "children": [], 
      "initComplete": "", 
      "style": "", 
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "ButtonsJSZip": "false", 
      "ordering": "true", 
      "ButtonsHTML5": "false", 
      "top": "100", 
      "!type": "DataTable_bs4", 
      "id": "DataTable3", 
      "width": "10", 
      "onmousemove": "", 
      "onmouseup": "", 
      "lengthChange": "true", 
      "fontSize": "", 
      "hidden": "", 
      "onclick": "", 
      "onmouseout": "", 
      "_uuid": "de4117ef012c4dce8ea80adc4009062c", 
      "fontWeight": "", 
      "onmousedown": "", 
      "class": "table table-striped table-bordered", 
      "info": "true", 
      "ontouchend": "", 
      "script": "", 
      "fontStyle": "", 
      "Scroller": "false", 
      "ontouchmove": "", 
      "bottom": "auto", 
      "expanded_pmp": true, 
      "scrollY": "", 
      "paging": "true", 
      "ButtonsPrint": "false", 
      "Responsive": "false", 
      "attributes": "", 
      "lengthMenu": "[5, 10, 25]", 
      "ontouchstart": "", 
      "display": "", 
      "left": "0"
    }, 
    {
      "color": "", 
      "blockLevel": "", 
      "height": "auto", 
      "disabled": "", 
      "popBody": "Body", 
      "groupStyle": "", 
      "children": [], 
      "size": " btn-md", 
      "borderColor": "", 
      "style": "", 
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "script": "", 
      "top": 20, 
      "popTitle": "Title", 
      "pLeft": "", 
      "width": "auto", 
      "onmousemove": "", 
      "onmouseup": "", 
      "hidden": "", 
      "borderStyle": "", 
      "onclick": "btnFurnitureSearchBack.onclick()", 
      "onmouseout": "", 
      "badgeAppearance": " badge-info", 
      "mAll": "", 
      "mLeft": "", 
      "ontouchend": "", 
      "appearance": " btn-secondary", 
      "value": "Back", 
      "pAll": "", 
      "pBottom": "", 
      "toggleControl": "", 
      "display": "", 
      "grouping": "", 
      "right": "auto", 
      "cached_js": "", 
      "onmousedown": "", 
      "fontFamily": "", 
      "iconTitle": "", 
      "popClose": "hover", 
      "id": "btnFurnitureSearchBack", 
      "pTop": "", 
      "bottom": "auto", 
      "!type": "Button_bs4", 
      "onresize": "", 
      "ChangeForm": "", 
      "fontSize": "", 
      "backgroundColor": "Blue", 
      "badge": "", 
      "borderWidth": "", 
      "mTop": "", 
      "_uuid": "aa9240e8334b4743ba8ea33caff4c021", 
      "mBottom": "", 
      "fontWeight": "", 
      "class": "", 
      "icon": "", 
      "popStyle": "popover", 
      "fontStyle": "", 
      "outline": "", 
      "popPosition": "", 
      "ontouchmove": "", 
      "mRight": "", 
      "expanded_pmp": true, 
      "pRight": "", 
      "ontouchstart": "", 
      "left": 241
    }
  ], 
  "expanded_pmp": true, 
  "_functions": [
    {
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "cached_js": "", 
      "script": "", 
      "_uuid": "a31a3277275a4af7a308c94b4a51ad19", 
      "!type": "Form", 
      "expanded_pmp": true, 
      "id": "Main", 
      "location": [
        19, 
        20
      ], 
      "signature": "function Main() {     // use this as runs first but waits until everything is loaded", 
      "children": []
    }, 
    {
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "cached_js": "", 
      "script": "", 
      "_uuid": "75aea96cb7c6466b8769d5f37ad41ab3", 
      "!type": "Form", 
      "expanded_pmp": true, 
      "id": "updateTable", 
      "location": [
        23, 
        24
      ], 
      "signature": "function updateTable() {    // re-display table", 
      "children": []
    }, 
    {
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "cached_js": "", 
      "script": "", 
      "_uuid": "ebc34c3cb57f43c881de58eab2d7f916", 
      "!type": "Form", 
      "expanded_pmp": true, 
      "id": "loadTable", 
      "location": [
        29, 
        30
      ], 
      "signature": "function loadTable() {    // reload table when changed entire table", 
      "children": []
    }, 
    {
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "cached_js": "", 
      "script": "", 
      "_uuid": "fb503b7c25e04d62bd4bae5ed8f07e83", 
      "!type": "Form", 
      "expanded_pmp": true, 
      "id": "btnFurnitureSearchBack.onclick", 
      "location": [
        34, 
        35
      ], 
      "signature": "btnFurnitureSearchBack.onclick()", 
      "children": []
    }
  ], 
  "designHeight": 0, 
  "borderWidth": "", 
  "modal": "false", 
  "position": "absolute", 
  "borderStyle": "", 
  "left": "0"
}