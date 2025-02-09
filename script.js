
  
const slider = document.getElementById("myRange");
const text = document.getElementById("text");

function changeFontSize(){
  text.style.fontSize = size + "px"; 
}

slider.addEventListener("input", changeFontSize());
