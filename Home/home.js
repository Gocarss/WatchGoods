var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter>3){
    counter = 1;
  }
}, 5500);

var number;
function openBrand(number){
  if(number == 1){
    location.replace("../products/casio/casio.html");
  }

  if(number == 2){
    location.replace("../products/seiko/seiko.html");
  }

  if(number == 3){
    location.replace("../products/jeep/jeep.html");
  }

  if(number == 4){
    location.replace("../products/fossil/fossil.html");
  }

  if(number == 5){
    location.replace("../products/gshock/gshock.html");
  }
}