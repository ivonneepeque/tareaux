//Ivonne
function fontUp(){

  var descrip = document.getElementById('descrip');
  var fontUp = document.getElementById('font-up');
  var fontDown = document.getElementById('font-down');
  //aumentar tamaño letra
  descrip.style.setProperty('font-size', '25px');
  //iconos A+ A-
  fontUp.style.setProperty('visibility', 'hidden');
  fontDown.style.setProperty('visibility', 'visible');


}

function fontDown(){
  var descrip = document.getElementById('descrip');
  var fontUp = document.getElementById('font-up');
  var fontDown = document.getElementById('font-down');
  //aumentar tamaño letra
  descrip.style.setProperty('font-size', '16px')

  //iconos A+ A-
  fontDown.style.setProperty('visibility', 'hidden');
  fontUp.style.setProperty('visibility', 'visible');
}



