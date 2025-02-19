'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
//////////////////   MODAL   ///////////////////////////////////////////////

        // Function to open the modal

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalHeader = document.getElementById('modalHeader' + modalId.charAt(modalId.length - 1));
  modal.style.display = "block";
  setTimeout(() => {
      modal.classList.add("show");
  }, 0);
  
  // Track scroll direction for hiding header
  let lastScrollTop = 0;
  const content = modal.querySelector('.content-pf');

  content.addEventListener('scroll', function() {
      let scrollTop = content.scrollTop;
      if (scrollTop > lastScrollTop) {
          modalHeader.classList.add('hidden'); // Hide the header instantly
      } else {
          modalHeader.classList.remove('hidden'); // Show the header
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// Function to close the modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(() => {
      modal.style.display = "none";
  }, 300);
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
  const modal1 = document.getElementById('modal1');
  const modal2 = document.getElementById('modal2');
  const modal3 = document.getElementById('modal3');
  const modal4 = document.getElementById('modal4');
  const modal5 = document.getElementById('modal5');
  const modal6 = document.getElementById('modal6');
  const modal7 = document.getElementById('modal7');
  const modal8 = document.getElementById('modal8');
  const modal9 = document.getElementById('modal9');
  const modal10 = document.getElementById('modal10');



  if (event.target == modal1) {
      closeModal('modal1');
  } else if (event.target == modal2) {
      closeModal('modal2');
  } else if (event.target == modal3) {
      closeModal('modal3');
  } else if (event.target == modal4) {
      closeModal('modal4');
}else if (event.target == modal5) {
  closeModal('modal5');
}else if (event.target == modal6) {
  closeModal('modal6');
}else if (event.target == modal7) {
  closeModal('modal7');
}else if (event.target == modal8) {
  closeModal('modal8');
}else if (event.target == modal9) {
  closeModal('modal9');
}else if (event.target == modal10) {
  closeModal('modal10');
}
}
//////////////////////Typing js//////////////////////////////////

// var options = {
//   strings: ["a front-end developer.", "a flutter developer.", "a designer.", "an engineer."],
//   typeSpeed: 30,
//   backSpeed: 10,
//   backDelay: 1500,
//   loop: true
// };

// var typed = new Typed("#typed", options);


var options = {
  strings: ["a front-end developer.", "a flutter developer.", "a designer.", "an engineer."],
  typeSpeed: 30,
  backSpeed: 10,
  backDelay: 1500,
  loop: true
};

var typed = new Typed("#typed", options);

// Dynamically adjust font size based on window width
function adjustFontSize() {
  var typedElement = document.getElementById("typed");
  if (window.innerWidth < 400) {
    typedElement.style.fontSize = "14px"; // Smaller size for screens less than 600px
  } 
  else if (window.innerWidth < 600) {
    typedElement.style.fontSize = "17px"; // Size for screens less than 800px
  }else if (window.innerWidth < 800) {
    typedElement.style.fontSize = "20px"; // Size for screens less than 800px
  } else {
    typedElement.style.fontSize = "24px"; // Default size
  }
}

// Call the function on load and on resize
adjustFontSize();
window.onresize = adjustFontSize;
//////////////////////////
function updateGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
      greeting = "Good Morning,";
  } else if (hours < 18) {
      greeting = "Good Afternoon,";
  } else {
      greeting = "Good Evening,";
  }

  document.getElementById("greeting").innerText = greeting;
}

updateGreeting();



////////////////contact//////////////////

(function(){
  emailjs.init("pHtPJboMK8Qf63_jU"); // Replace with your EmailJS User ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this);

  emailjs.sendForm('service_e1o781z', 'template_neiq6yj', this)
  .then(function() {
      alert('Message sent successfully!');
  }, function(error) {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
  });
});

/////////////////////////
const knowMeButton = document.querySelector("[data-target='about']");
knowMeButton.addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
        if ('about' === pages[i].dataset.page) {
            pages[i].classList.add("active");
            window.scrollTo(0, pages[i].offsetTop);
            
            // Update active state for navigation
            navigationLinks.forEach(link => link.classList.remove("active"));
            navigationLinks[i].classList.add("active");
        } else {
            pages[i].classList.remove("active");
        }
    }
});

const contactButton = document.querySelector("[data-target='contact']");
contactButton.addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
        if ('contact' === pages[i].dataset.page) {
            pages[i].classList.add("active");
            window.scrollTo(0, pages[i].offsetTop);
            
            // Update active state for navigation
            navigationLinks.forEach(link => link.classList.remove("active"));
            navigationLinks[i].classList.add("active");
        } else {
            pages[i].classList.remove("active");
        }
    }
});