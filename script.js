document.querySelector('.submit').addEventListener('click', function() {
  const logo = document.querySelector('.login-success');
  if (logo) {
    logo.style.display = 'block';
  }
});