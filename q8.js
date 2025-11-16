document.getElementById('showBtn').addEventListener('click', () => {
  const sel = document.getElementById('mySelect');
  const val = sel.value;
  const text = val ? sel.options[sel.selectedIndex].text : 'No option selected';
  document.getElementById('selectedOut').textContent = 'Selected: ' + text;
});
