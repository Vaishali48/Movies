const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

// search
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("searchIcon");
  const searchBar = document.getElementById("searchBar");
  const movies = document.querySelectorAll(".movie-list-item");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("hidden");  // Show/hide search bar
    searchBar.focus();  // Auto-focus input
  });

  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    
    movies.forEach(movie => {
      const movieName = movie.getAttribute("data-name").toLowerCase();
      
      if (movieName.includes(searchTerm)) {
        movie.style.display = "block";  // Show matching movie
      } else {
        movie.style.display = "none";  // Hide non-matching movie
      }
    });
  });
  document.addEventListener("click", (event) => {
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
      searchBar.classList.add("hidden");
      
    }
  });
}); 

// Sidebar Login Form Toggle
const sidebarLoginBtn = document.getElementById("sidebar-login");
const loginForm = document.getElementById("login-form");

sidebarLoginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginForm.style.display = "block";
});

// Hide login form when clicking outside
window.addEventListener("click", function (e) {
  if (
    loginForm.style.display === "block" &&
    !loginForm.contains(e.target) &&
    !sidebarLoginBtn.contains(e.target)
  ) {
    loginForm.style.display = "none";
  }
});

// Hide login form when clicking the login button inside the form
loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission for demo
  loginForm.style.display = "none";
});



