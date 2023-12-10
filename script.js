/* Navbar */
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});


/* Masukan */
document.getElementById('akmal_feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    setTimeout(function() {
      document.getElementById('akmal_feedback-form').reset();
      document.getElementById('akmal_feedback-form').style.display = 'none';
      document.getElementById('akmal_success-message').classList.remove('akmal_hidden');
    }, 1000);
  });
  