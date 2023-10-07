let buttons=document.querySelectorAll('button');
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        handleClick(this.innerHTML);
        highlighter(this.innerHTML);
    });
}
// for(var i=0;i<buttons.length;i++){
//     buttons[i].addEventListener('keydown',handleKey);
// }
document.addEventListener("keydown",function(event){
    handleClick(event.key);
    highlighter(event.key);
});
function highlighter(alphabet){
    var element=document.querySelector("."+alphabet);
    element.classList.add("highlight");
    setTimeout(function(){
        element.classList.remove("highlight");
    },100);
}
function handleClick(key){
    switch(key){
        case 'q':var audio=new Audio("sounds/B2.mp3");
            break;
        case 'w':var audio=new Audio("sounds/C3.mp3");
            break;
        case 'e':var audio=new Audio("sounds/F3.mp3");
            break;
        case 'r':var audio=new Audio("sounds/E3.mp3");
            break;
        case 't':var audio=new Audio("sounds/B2.mp3");
            break;
        case 'y':var audio=new Audio("sounds/C3.mp3");
            break;
        case 'u':var audio=new Audio("sounds/E3.mp3");
            break;
        case 'i':var audio=new Audio("sounds/D3.mp3");
            break;
        case 'o':var audio=new Audio("sounds/B2.mp3");
            break;
        case 'p':var audio=new Audio("sounds/C3.mp3");
            break;
        case 'a':var audio=new Audio("sounds/F3.mp3");
            break;
        case 's':var audio=new Audio("sounds/E3.mp3");
            break;
        case 'd':var audio=new Audio("sounds/B4.mp3");
            break;
        case 'f':var audio=new Audio("sounds/C5.mp3");
            break;
        case 'g':var audio=new Audio("sounds/F5.mp3");
            break;
        case 'h':var audio=new Audio("sounds/E5.mp3");
            break;
        case 'j':var audio=new Audio("sounds/B4.mp3");
            break;
        case 'k':var audio=new Audio("sounds/C5.mp3");
            break;
        case 'l':var audio=new Audio("sounds/E5.mp3");
            break;
        case 'z':var audio=new Audio("sounds/D5.mp3");
            break;
        case 'x':var audio=new Audio("sounds/crash.mp3");
            break;
        case 'c':var audio=new Audio("sounds/kick-bass.mp3");
            break;
        case 'v':var audio=new Audio("sounds/snare.mp3");
            break;
        case 'b':var audio=new Audio("sounds/tom-1.mp3");
            break;
        case 'n':var audio=new Audio("sounds/tom-2.mp3");
            break;
        case 'm':var audio=new Audio("sounds/tom-3.mp3");
            break;
        default:var audio=new Audio("sounds/crash.mp3");
    }
    audio.play();
}

// Notes - B2 C3 F3 E3 
//         B2 C3 E3 D3
//         B2 C3 F3 E3 
//         B4 C5 F5 E5 
//         B4 C5 E5 D5
//         B4 C5 F5 E5 D5 E5