"use strict";

// * Add Event Listenet on Multiple items

const addEventOnElemnts = function (elements, eventType, callback) {
  elements.forEach((element) => {
    element.addEventListener(eventType, callback);
  });
};

// NavBar Toggle for Mobile

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navlink = document.querySelectorAll(".navbar-link");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

const exitNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElemnts(navTogglers, "click", toggleNavbar);
addEventOnElemnts(navlink, "click", exitNavbar);

// * Header Active
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Skills

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillBox = document.querySelector("[data-skills-box]");

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

addEventOnElemnts(toggleBtns, "click", function () {
  elemToggleFunc(toggleBtnBox);
  toggleBtns.forEach((btn) => elemToggleFunc(btn));
  elemToggleFunc(skillBox);
});

// Slider
// ("use strict");

const sliders = document.querySelectorAll("[data-slider]");

const sliderInit = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  console.log(sliderContainer.childElementCount);
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  const totalSliderVisibleItems = Number(
    getComputedStyle(currentSlider).getPropertyValue("--slider-items")
  );
  // console.log(getComputedStyle(currentSlider).getPropertyValue("--slider-items"))

  const totalSliderItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    currentSlidePos++;

    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    console.log(sliderContainer.children[currentSlidePos].offsetLeft)

    if (currentSlidePos >= totalSliderItems)
      sliderNextBtn.setAttribute("disabled", "");
    sliderPrevBtn.removeAttribute("disabled");
  };

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    currentSlidePos--;

    // console.log(sliderContainer.children)
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;

    if (currentSlidePos <= 0) sliderPrevBtn.setAttribute("disabled", "");
    sliderNextBtn.removeAttribute("disabled");
  };

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSliderItems <= 0;
  if (dontHaveExtraItem) sliderNextBtn.setAttribute("disabled", "");

  sliderPrevBtn.setAttribute("disabled", "");
};

for (let i = 0, len = sliders.length; i < len; i++) {
  sliderInit(sliders[i]);
}
