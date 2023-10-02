let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}

function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

function recoverDefaultMenuStyle() {
  menu.style.left = "0"; // Set the menu to its default style
  open.style.display = "block"; // Display the open button
  close.style.display = "none"; // Hide the close button
}

// Function to add event listeners to navigation links and close the menu
function addNavigationListeners() {
  const links = document.querySelectorAll("#nav a");
  links.forEach(function(link) {
    link.addEventListener("click", function() {
      closemenu();
    });
  });
}

// Call the function to add navigation event listeners
addNavigationListeners();

// Add an event listener to detect viewport width changes
window.addEventListener("resize", function() {
  const viewportWidth = window.innerWidth;
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
});


// nav bg color change

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

/* Opening hours */
document.addEventListener('DOMContentLoaded', function() {
  var today = new Date();
  var todaysHours = document.querySelector('.opening-days tr:nth-child(' + ( today.getDay() == 0 ? 7 : today.getDay() ) + ')');
  todaysHours.classList.add('bold')
});

/* CV text */
document.addEventListener("DOMContentLoaded", function () {
    const modalBtn1 = document.getElementById("modal-btn");
    const modal1 = document.querySelector("#modal-btn + .modal");

    const modalBtn2 = document.getElementById("modal-btn2");
    const modal2 = document.querySelector("#modal-btn2 + .modal");

    modalBtn1.addEventListener("click", function () {
        modal1.classList.toggle("modal-show");
    });

    modalBtn2.addEventListener("click", function () {
        modal2.classList.toggle("modal-show");
    });
});


window.addEventListener("scroll", change);