let myDate =new Date();
let myDay = myDate.getDay();
let myH1 = document.getElementById("y/n");
let myIcon = document.getElementById("icon");
let myTitle = document.getElementsByTagName("title");
// console.log(myDay)
window.onfocus=function(){
    document.title="Is It Thursday ?";
    if (myDay===4){
        myH1.innerText="YES";
        myIcon.href="smiling-face.png";
    }
    else{
        myH1.innerText="NO"
        myIcon.href="sad.png";
    }
}
window.onblur = function(){
    document.title = "Don't come again, bitch";
    myIcon.href="angry.png";
}