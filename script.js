document.addEventListener("DOMContentLoaded", function(){
  const fontSlider = document.getElementById("fontSlider");
  const imageSlider = document.getElementById("imageSlider");
  const text = document.getElementById("text");
  const image = document.getElementById("image");
  const fontSizeText = document.getElementById("fontSize");
  const imageSizeText = document.getElementById("imageSize");
  
  function changeFontSize(){
    text.style.fontSize = fontSlider.value + "px"; 
    fontSizeText.innerText = fontSlider.value;
  }
  function changeImageSize(){
    image.style.width = imageSlider.value + "px";
    imageSizeText.innerText = imageSlider.value;
  }
  
  fontSlider.addEventListener("input", function(){
    changeFontSize();
  });
  imageSlider.addEventListener("input", function(){
    changeImageSize();
  });
  
  
});

