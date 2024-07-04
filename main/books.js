// JavaScript code for scrolling header and showing/hiding scroll-to-top button

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var currentScrollPos = window.pageYOffset;
  var header = document.querySelector(".header");
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (prevScrollpos > currentScrollPos) {
    // Scrolling up
    header.style.top = "0";
  } else {
    // Scrolling down
    header.style.top = "-80px";
    scrollToTopBtn.style.display = "none"; // Hide the button when scrolling down
  }
  prevScrollpos = currentScrollPos;
}

// Function to scroll to the top
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
