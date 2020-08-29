  
let i = 0;
let txt = 'We Rise By Lifting Others. ';
let speed = 70;
      
const typeWriter = () => {
    if (i < txt.length) {   
        document.getElementById("tag").innerHTML += txt.charAt(i);
        console.log(document.getElementById("tag"));
        document.getElementById("tag").style.zIndex =1;
        document.getElementById("tag").style.position = "relative";
        i++;
        if(i==txt.length-3)
            setTimeout(typeWriter,speed+20);
        else
            setTimeout(typeWriter, speed);

    }
}
window.onload = typeWriter();