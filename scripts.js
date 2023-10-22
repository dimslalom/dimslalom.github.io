const form = document.getElementById('login');
const nextButton = document.getElementById('next-button');

form.addEventListener('submit', function(e) {
    e.preventDefault();

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username === '' || password === '') {
    e.preventDefault();
    alert('Please enter both username and password');
  } else {
    nextButton.removeAttribute('disabled');
  }
});
