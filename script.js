document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!email || !message) {
      alert('Please fill in all fields.');
    } else {
      alert('Thanks for your message, ' + email + '!');
      document.getElementById('contactForm').reset();
    }
  });