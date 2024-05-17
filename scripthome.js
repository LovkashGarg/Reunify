let lost=document.getElementById('lostbtn');
let found=document.getElementById('foundbtn');

lost.addEventListener("click",lostbutton);
found.addEventListener("click",foundbutton);
function lostbutton(){
    location.href="/formlost.html";
}
function foundbutton(){
    location.href="/formfound.html";
}