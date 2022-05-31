window.onload = timer;

const data = prompt('Enter time', '00:00:00');

const div = document.querySelector('.timer');

let hour = parseInt(data.slice(0, 2));
let min = parseInt(data.slice(3, 5));
let sec = parseInt(data.slice(6, 8));

function timer() {
  if (sec > 0) {
    sec--;
  } else if (min > 0) {
    min--;
    sec = 59;
  } else if (hour > 0) {
    hour--;
    min = 59;
    sec = 59;
  }else{
    alert(`TIme is up!`);
    clearInterval(timerId);
  }
  let elHour = hour;
  let elMin = min;
  let elSec = sec;
  if(hour<10) elHour = '0' + hour;
  if(min<10) elMin = '0' + min;
  if(sec<10) elSec = '0' + sec;
  div.textContent = `${elHour}:${elMin}:${elSec}`;
}

function stopTimer(){
  clearInterval(timerId);
  div.textContent = `Stopped`;
}
function pauseTimer(){
  timerId = setInterval(timer, 1000);
}

let timerId = setInterval(timer, 1000);
