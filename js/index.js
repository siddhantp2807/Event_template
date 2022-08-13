
// Navbar toggling code

const toggleBtn = document.querySelector(".toggle-button");
const navbarItems = document.querySelector(".navbar_items");

toggleBtn.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});

// Accordion code

document.querySelectorAll(".accordion__heading").forEach(elmt => {
  elmt.addEventListener("click", () => {
    const accordionContent = elmt.nextElementSibling;
    elmt.classList.toggle(".accordion__heading--active");
    elmt.querySelector("ion-icon").style.transform = "rotate(180deg)";

    if (elmt.classList.contains(".accordion__heading--active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      // elmt.querySelector("ion-icon").style.transform = "rotate(180deg)";
    } else {
      accordionContent.style.maxHeight = 0;
      elmt.querySelector("ion-icon").style.transform = "rotate(0deg)";
    }

  })
})