// 'use strict';

// window.addEventListener("DOMContentLoaded", function () {

//   // element toggle function
//   const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

//   // sidebar variables
//   const sidebar = document.querySelector("[data-sidebar]");
//   const sidebarBtn = document.querySelector("[data-sidebar-btn]");
//   if (sidebar && sidebarBtn) {
//     sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
//   }

//   // testimonials variables
//   const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
//   const modalContainer = document.querySelector("[data-modal-container]");
//   const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
//   const overlay = document.querySelector("[data-overlay]");

//   const modalImg = document.querySelector("[data-modal-img]");
//   const modalTitle = document.querySelector("[data-modal-title]");
//   const modalText = document.querySelector("[data-modal-text]");

//   const testimonialsModalFunc = function () {
//     modalContainer.classList.toggle("active");
//     overlay.classList.toggle("active");
//   }

//   for (let i = 0; i < testimonialsItem.length; i++) {
//     testimonialsItem[i].addEventListener("click", function () {
//       modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//       modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//       modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//       modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
//       testimonialsModalFunc();
//     });
//   }

//   modalCloseBtn?.addEventListener("click", testimonialsModalFunc);
//   overlay?.addEventListener("click", testimonialsModalFunc);

//   // custom select variables
//   const select = document.querySelector("[data-select]");
//   const selectItems = document.querySelectorAll("[data-select-item]");
//   const selectValue = document.querySelector("[data-selecct-value]");
//   const filterBtn = document.querySelectorAll("[data-filter-btn]");

//   if (select) {
//     select.addEventListener("click", function () { elementToggleFunc(this); });
//   }

//   for (let i = 0; i < selectItems.length; i++) {
//     selectItems[i].addEventListener("click", function () {
//       let selectedValue = this.innerText.toLowerCase();
//       selectValue.innerText = this.innerText;
//       elementToggleFunc(select);
//       filterFunc(selectedValue);
//     });
//   }

//   const filterItems = document.querySelectorAll("[data-filter-item]");
//   const filterFunc = function (selectedValue) {
//     for (let i = 0; i < filterItems.length; i++) {
//       if (selectedValue === "all") {
//         filterItems[i].classList.add("active");
//       } else if (selectedValue === filterItems[i].dataset.category.toLowerCase()) {
//         filterItems[i].classList.add("active");
//       } else {
//         filterItems[i].classList.remove("active");
//       }
//     }
//   }

//   let lastClickedBtn = filterBtn[0];
//   for (let i = 0; i < filterBtn.length; i++) {
//     filterBtn[i].addEventListener("click", function () {
//       let selectedValue = this.innerText.toLowerCase();
//       selectValue.innerText = this.innerText;
//       filterFunc(selectedValue);

//       lastClickedBtn.classList.remove("active");
//       this.classList.add("active");
//       lastClickedBtn = this;
//     });
//   }

//   // contact form variables
//   const form = document.querySelector("[data-form]");
//   const formInputs = document.querySelectorAll("[data-form-input]");
//   const formBtn = document.querySelector("[data-form-btn]");

//   for (let i = 0; i < formInputs.length; i++) {
//     formInputs[i].addEventListener("input", function () {
//       if (form.checkValidity()) {
//         formBtn.removeAttribute("disabled");
//       } else {
//         formBtn.setAttribute("disabled", "");
//       }
//     });
//   }

//   // page navigation variables
//   const navigationLinks = document.querySelectorAll("[data-nav-link]");
//   const pages = document.querySelectorAll("[data-page]");

//   for (let i = 0; i < navigationLinks.length; i++) {
//     navigationLinks[i].addEventListener("click", function () {
//       for (let j = 0; j < pages.length; j++) {
//         if (this.textContent.trim().toLowerCase() === pages[j].dataset.page) {
//           pages[j].classList.add("active");
//         } else {
//           pages[j].classList.remove("active");
//         }
//         navigationLinks[j].classList.remove("active");
//       }

//       this.classList.add("active");
//       window.scrollTo(0, 0);
//     });
//   }

// });



'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
});

if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// ✅ FILTER DROPDOWN SECTION (Updated)
const select = document.querySelector("#category-select");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const itemCategory = item.dataset.category.toLowerCase();
    if (selectedValue === "all" || selectedValue === itemCategory) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

if (select) {
  select.addEventListener("change", function () {
    const selectedValue = this.value.toLowerCase();
    filterFunc(selectedValue);
  });
}

// contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    pages.forEach((page, i) => {
      if (this.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    });
  });
});
