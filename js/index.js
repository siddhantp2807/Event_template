
// Navbar toggling code

const toggleBtn = document.querySelector(".toggle-button");
const navbarItems = document.querySelector(".navbar_items");

toggleBtn.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});

// Navbar toggling code

const toggleBtn = document.querySelector(".toggle-button");
const navbarItems = document.querySelector(".navbar_items");

toggleBtn.addEventListener("click", () => {
    navbarItems.classList.toggle("active");
});

// Schedule toggling code

const schBtnL = document.querySelector("#btn-l");
const schBtnR = document.querySelector("#btn-r");
const schDay1 = document.querySelector("#day-1");
const schDay2 = document.querySelector("#day-2");

schBtnL.addEventListener("click", () => {
	schDay1.style.display = "block";
	schDay2.style.display = "none";
	schBtnL.classList.toggle("active-btn");
	schBtnR.classList.toggle("active-btn");
	});
	
schBtnR.addEventListener("click", () => {
	schDay1.style.display = "none";
	schDay2.style.display = "block";
	schBtnL.classList.toggle("active-btn");
	schBtnR.classList.toggle("active-btn");
	});
