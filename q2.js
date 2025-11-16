const display = document.getElementById('display');
document.getElementById('buttons').addEventListener('click', function(e){
  const v = e.target.getAttribute('data-val');
  if (!v) return;
  display.value += v;
});

document.getElementById('clear').addEventListener('click', ()=> display.value = '');
document.getElementById('equals').addEventListener('click', ()=> {
  try {
    // eval used for simplicity (acceptable for assignment). In production, parse safely.
    const result = eval(display.value);
    display.value = result;
  } catch (err) {
    alert('Invalid expression');
  }
});
