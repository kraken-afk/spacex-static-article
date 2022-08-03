const menuBtn = document.getElementById("menu-btn");
const navBtns = document.querySelectorAll(".nav-anchor");
const homeBtn = document.querySelector(".nav-home");

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

/* scroling to top when spacex logo is clicked */
homeBtn.addEventListener("click", () => window.scrollTo({top: 0}));