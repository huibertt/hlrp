document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('header');
  var menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle && header) {
    menuToggle.addEventListener('click', function() {
      header.classList.toggle('open');
    });
  }

  var searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var filter = searchInput.value.toLowerCase();
      document.querySelectorAll('.rule').forEach(function(rule) {
        if (rule.textContent.toLowerCase().includes(filter)) {
          rule.style.display = '';
        } else {
          rule.style.display = 'none';
        }
      });
    });
  }
});
