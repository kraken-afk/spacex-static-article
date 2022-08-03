const menuBtn = document.getElementById("menu-btn");
const navBtns = document.querySelectorAll(".nav-anchor");
const homeBtn = document.querySelector(".nav-home");
const navBar = document.querySelector(".nav");
const navGap = document.querySelector(".nav-gap");

/* toggle for the navigation bar in mobile width */
menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("close")) return menuBtn.classList.remove("close");
  return menuBtn.classList.add("close");
});

/**
 * Giving click event for each navigation button
 * so whenever the button is get clicked, the nav bar is
 * automaticly get closed
 */
navBtns.forEach((navBtn) => {
  navBtn.addEventListener("click", (element) => {
    const btn = element.target.parentElement.previousElementSibling;

    if (btn.classList.contains("close"))
      return btn.classList.remove("close");
  })
})

/* scroling to top when spacex logo got clicked */
homeBtn.addEventListener("click", () => window.scrollTo({ top: 0 }));

/**
 * Because position sticky is unable to working if
 * the parent element has overflow hidden. so im using simple
 * script to mimic the behavior
 * NOTE: its maybe causing perfomance issue
 */
window.onscroll = () => {
  const headerPos = document.querySelector(".header").getBoundingClientRect().bottom;
  const topElement = navBar.getBoundingClientRect().top;

  if (headerPos > 0) {
    navGap.style.height = 0;
    navBar.classList.remove("fixedToTop");
  }

  if (topElement < 0) {
    navGap.style.height = `${navBar.clientHeight}px`;
    navBar.classList.add("fixedToTop");
  }

}