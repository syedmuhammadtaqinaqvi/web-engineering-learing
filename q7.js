let seconds = 0;
let intervalId = null;
const timerDiv = document.getElementById('timer');

function formatTime(s){
  const hh = String(Math.floor(s/3600)).padStart(2,'0');
  const mm = String(Math.floor((s%3600)/60)).padStart(2,'0');
  const ss = String(s%60).padStart(2,'0');
  return `${hh}:${mm}:${ss}`;
}

document.getElementById('startBtn').addEventListener('click', function(){
  if (intervalId) return; // already running
  intervalId = setInterval(() => {
    seconds++;
    timerDiv.textContent = formatTime(seconds);
  }, 1000);
});

document.getElementById('stopBtn').addEventListener('click', function(){
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
