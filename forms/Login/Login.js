
user = ""

btnLogIn.onclick=function(){
    req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptUsername.value + "&j_password=" + inptPassword.value);
  //req1 = Ajax("https://otis.creighton.edu/authLDAP_3.php", "POST", "j_username=" + TextBox1.value + "&j_password=" + PasswordInput1.value);
    if (req1.status == 200) { //everything worked.
      if(req1.responseText == 1){
          NSB.MsgBox("Login Successful");
          user = inptUsername.value
          ChangeForm(HomePage);
      }else {
          NSB.MsgBox("Login Failed")
          }
        
    } else {
        //Handle that. 
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }

}



console.log(user)

Button1.onclick=function(){
  ChangeForm(HomePage)
}

