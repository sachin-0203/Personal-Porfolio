
// Add the Dark Mode
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
  localStorage.setItem("theme", isLightTheme ? "dark" : "light");
});

// add the drop-down button
let btn = document.querySelector('.toggle-btn');
let btnIcon = document.querySelector('.toggle-btn i');
let dropDownBar = document.querySelector('.dropdown-nav');

// It display the button when scrolling down

window.onscroll = function(){
  const backToTop = document.querySelector("#backToTop");
  if(document.body.scrollTop>100 || document.documentElement.scrollTop >100){
    backToTop.style.display= "block";
  }
  else{
    backToTop.style.display= "none";
  }
}

function scrollToTop(){
  window.scrollTo({
    top:0,
    behavior : "smooth",
  });
};

const boxes = document.querySelectorAll(".container-items");

// about section boxes
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    togglepara(index);
    toggleTitle(index);
  });
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

function toggleTitle(index){
  const titles= document.querySelectorAll('.each-tabs');
  titles.forEach((title,i) =>{
    if(i==index){
      title.classList.toggle('hide');
    }
    else{
      title.classList.remove('hide');
    }
  });
}
