let btn = document.querySelector('.toggle-btn');
let btnIcon = document.querySelector('.toggle-btn i');
let dropDownBar = document.querySelector('.dropdown-nav');

btn.addEventListener('click', () => {
  dropDownBar.classList.toggle('open');
  let isOpen = dropDownBar.classList.contains('open');
  btnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
})



const boxes = document.querySelectorAll(".container-items");

boxes.forEach((box, index) => {
  box.addEventListener("click", () => togglepara(index));
});

function togglepara(index) {
  const contents = document.querySelectorAll('.tab-content');

  contents.forEach((currContent, i) => {
    if (i === index) {
      currContent.classList.toggle('show')
    }
    else {
      currContent.classList.remove('show');
    }
  });
}


const body = document.body;
const themeBtn = document.querySelector(".theme-btn");
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// apply saved theme on page reload
const savedTheme = localStorage.getItem("theme") || "light";
body.classList.add(`${savedTheme}-theme`);
sunIcon.classList.toggle("mode", savedTheme === "light");
moonIcon.classList.toggle("mode", savedTheme === "dark");

// Toggle theme and save 
themeBtn.addEventListener("click", () => {
  const isLightTheme = body.classList.contains("light-theme");
  body.classList.toggle("light-theme", !isLightTheme);
  body.classList.toggle("dark-theme", isLightTheme);
  sunIcon.classList.toggle("mode", !isLightTheme);
  moonIcon.classList.toggle("mode", isLightTheme);
  localStorage.setItem("theme", isLightTheme? "dark": "light");
});