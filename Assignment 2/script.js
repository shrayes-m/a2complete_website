//<!--Author name : Shrayes Mudvari-->
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menuLinks = document.getElementById('menu-links');

  hamburger.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointmentForm');

  form.addEventListener('submit', function (e) {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'date', 'service'];
    const missingFields = [];

    requiredFields.forEach(id => {
      const field = document.getElementById(id);
      if (!field.value.trim()) {
        missingFields.push(id);
      }
    });

    if (missingFields.length > 0) {
      e.preventDefault();
      alert('Please fill all the required fields.');
    } else {
      alert('Submitted , Thank you for your time!');
      // Optionally: let the form submit to server, or:
      // e.preventDefault(); // uncomment this if you’re not submitting to a server
    }
  });
});

