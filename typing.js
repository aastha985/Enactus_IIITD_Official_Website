  
let i = 0;
let txt = 'We Rise By Lifting Others. ';
let speed = 70;
let currentText="";
const typeWriter = () => {
    if (i < txt.length) {   
        currentText+= txt.charAt(i);
        document.getElementById("tag").innerHTML = currentText+"|"
        console.log(document.getElementById("tag"));
        document.getElementById("tag").style.zIndex =1;
        document.getElementById("tag").style.position = "relative";
        i++;
        setTimeout(typeWriter, speed);
        if(i==txt.length) {
            document.getElementById("tag").innerHTML = txt;
        }

    }
}
window.onload = typeWriter();