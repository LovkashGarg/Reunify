let signin = document.getElementById('signinbtn')
let signup = document.getElementById('signupbtn')

signin.addEventListener("click", signinbutton);
signup.addEventListener("click", signupbutton);

function myfunction1(){
    // ele1.classList.add("form-container2");
    // ele1.classList.remove("form-container1");
    // ele2.classList.add("form-container1");
    // ele2.classList.remove("form-container2");
    document.getElementsByClassName("change")[0].innerHTML="SIGN IN";
    document.getElementsByClassName("change")[1].innerHTML="SIGN IN";

}
function signinbutton() {
    location.href=("index.html");
    myfunction1();
}
function myfunction2(){
    // ele1.classList.add("form-container2");
    // ele1.classList.remove("form-container1");
    // ele2.classList.add("form-container1");
    // ele2.classList.remove("form-container2");
    document.getElementsByClassName("change")[0].innerHTML="SIGN UP";
    document.getElementsByClassName("change")[1].innerHTML="SIGN UP";
}
function signupbutton() {
    location.assign("index.html"); 
    
}
// myfunction2(); 
 