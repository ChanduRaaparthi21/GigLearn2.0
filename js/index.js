// back to top button functionality
let backbtn = document.querySelector(".back-to-top");
const scrollBtnDisplay = function () {
  window.scrollY > 100
    ? backbtn.classList.add("show")
    : backbtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

const scrollWindow = function () {  
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 50);
      scrollWindow();
    }, 10);
  }
};
backbtn.addEventListener("click", scrollWindow);





document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const contactLink = document.getElementById('contact-link');
    const booksLink = document.getElementById('books-link');
    const closeModal = document.getElementsByClassName('close')[0];

    function showModal() {
        modal.style.display = 'flex';
    }

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal();
    });

    booksLink.addEventListener('click', (e) => {
        e.preventDefault();
        showModal();
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementsByClassName("close")[0];
    const authLink = document.getElementById("auth-link");
    const logoutLink = document.getElementById("logout-link");

    // Check if user is logged in
    function isLoggedIn() {
        return localStorage.getItem("isLoggedIn") === "true";
    }

    // Toggle login/logout buttons based on login status
    function toggleAuthButtons() {
        if (isLoggedIn()) {
            document.body.classList.add("logged-in");
        } else {
            document.body.classList.remove("logged-in");
        }
    }

    // Show modal
    function showModal() {
        modal.style.display = "block";
    }

    // Hide modal
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal if clicked outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Prevent default action and show modal if not logged in
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            if (!isLoggedIn() && this.getAttribute('href') !== 'login.html') {
                event.preventDefault();
                showModal();
            }
        });
    });

    // Login function (for demo purposes, using default credentials)
    function login() {
        localStorage.setItem("isLoggedIn", "true");
        toggleAuthButtons();
    }

    // Logout function
    function logout() {
        localStorage.removeItem("isLoggedIn");
        toggleAuthButtons();
    }

    // Event listeners for login/logout (this can be replaced with actual authentication logic)
    authLink.addEventListener('click', function() {
        login();
    });

    logoutLink.addEventListener('click', function() {
        logout();
    });

    // Initial setup
    toggleAuthButtons();
});
