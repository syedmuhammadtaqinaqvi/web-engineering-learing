document.getElementById('randBtn').addEventListener('click', function(){
  const n = Math.floor(Math.random() * 100) + 1;
  document.getElementById('out').textContent = 'Random: ' + n;
});
