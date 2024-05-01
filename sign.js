function formvalidate(){
    var email =document.getElementById("email").value ;
    var password =document.getElementById("Password").value ;
    var error =document.getElementById("error");
    var text="";


if(email.length <5 || email.indexOf ("@")==-1){
    text="please enter valid email";
   error.innerHTML=text;
    return false;

}
else if (Password.length<5){
    text="please enter valid password";
    error.innerHTML=text;
    return false;

}
else{
    alert ("Done")
    return true;
}



}