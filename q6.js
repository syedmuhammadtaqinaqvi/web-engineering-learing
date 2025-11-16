document.getElementById('checkBtn').addEventListener('click', function() {
  const s = document.getElementById('palInput').value;
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const rev = cleaned.split('').reverse().join('');
  const result = cleaned && cleaned === rev ? 'Is a palindrome' : 'Not a palindrome';
  document.getElementById('palResult').textContent = result;
});
