

function myColor() {
      
    var color1 = document.getElementById('colorPicker1').value;
    var color2 = document.getElementById('colorPicker2').value;
    
    document.getElementById('box1').value = color1;
    document.getElementById('box2').value = color2;

    document.querySelector("body").style.background = "linear-gradient(to right, " 
+ color1
+ ", " 
+ color2
+ ")";
}

document.getElementById('colorPicker1')
    .addEventListener('input', myColor);
    document.getElementById('colorPicker2')
    .addEventListener('input', myColor);


