window.onload = function(){
  var seconds = 00;
  var tens = 00;
  // var hundreds = 00;
  // var appendHundreds = document.getElementById('hundreds');
  var appendTens = document.getElementById('tens');
  var appendSeconds = document.getElementById('ones');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');
  var interval;
  start.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTimer,10);
  }
  stop.onclick = function(){
    clearInterval(interval);
  }
  reset.onclick = function(){
    clearInterval(interval);
    // hundreds = '00';
    tens = '00';
    seconds = '00';
    // appendHundreds.innerHTML = hundreds;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }
  function startTimer() {
    seconds++;
    if(seconds <= 9){
      appendSeconds.innerHTML = '0' + seconds;
    }
    if(seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if(seconds > 99){
      console.log("seconds");
      tens++;
      appendTens.innerHTML = '0' + tens;
      seconds = 0;
      appendSeconds.innerHTML = '0' + 0;
    }
    if(tens > 9){
      appendTens.innerHTML = tens;
    }
  }
}
