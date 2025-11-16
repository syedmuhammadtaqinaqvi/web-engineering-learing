const c = document.getElementById('celsius');
const f = document.getElementById('fahrenheit');
document.getElementById('convertBtn').addEventListener('click', ()=> {
  const cVal = c.value.trim();
  const fVal = f.value.trim();

  if (cVal !== '') {
    // Celsius -> Fahrenheit
    const cNum = parseFloat(cVal);
    f.value = (cNum * 9/5 + 32).toFixed(2);
  } else if (fVal !== '') {
    // Fahrenheit -> Celsius
    const fNum = parseFloat(fVal);
    c.value = ((fNum - 32) * 5/9).toFixed(2);
  } else {
    alert('Enter a value in Celsius or Fahrenheit');
  }
});
