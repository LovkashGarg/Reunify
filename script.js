document.getElementById("Transformation").addEventListener("click",myfunction);
// let ele1=document.getElementsByClassName("form-container1");
// let ele2=(document.getElementsByClassName("form-container2"));
function myfunction(){
    // ele1.classList.add("form-container2");
    // ele1.classList.remove("form-container1");
    // ele2.classList.add("form-container1");
    // ele2.classList.remove("form-container2");
if(    document.getElementsByClassName("change")[0].innerHTML=="SIGN UP"){
    document.getElementsByClassName("change")[0].innerHTML="SIGN UP";
    document.getElementsByClassName("change")[1].innerHTML="SIGN UP";
    document.getElementsByClassName("change")[2].innerHTML="Already Have a Account ?.";
    document.getElementById("Transformation").innerHTML="Login";
}
else{
    document.getElementsByClassName("change")[0].innerHTML="SIGN IN";
    document.getElementsByClassName("change")[1].innerHTML="SIGN IN";
    document.getElementsByClassName("change")[2].innerHTML="Don't Have a Account ?";
    document.getElementById("Transformation").innerHTML="Create Account"; 
}
}