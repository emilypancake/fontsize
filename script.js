
  
const slider = document.getElementById("myRange");
const text = document.getElementById("text");
const fontSizeText = document.getElementById("fontSize");

function changeFontSize(){
  text.style.fontSize = slider.value + "px"; 
  fontSizeText.innerText = slider.value;
}


slider.addEventListener("input", function(){
  changeFontSize();
});
