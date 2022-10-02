let faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fas fa-plus") {
      icon.className = "fas fa-minus";
    } else {
      icon.className = "fas fa-plus";
    }
  });
});      

// NavBar

const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".right_links");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});


// Toggle tools
const linkDesign = document.querySelector("#one");
const linkWeb = document.querySelector("#two");
const web = document.querySelector("#web");
const design = document.querySelector("#design");

linkDesign.addEventListener("click", function () {
  design.style.transform = "translate(0)";
  web.style.transform = "translate(200%)";
  design.style.transitionDelay = "0.4s";
  web.style.transitionDelay = "0s";
});

linkWeb.addEventListener("click", function () {
  web.style.transform = "translate(0)";
  design.style.transform = "translate(200%)";
  web.style.transitionDelay = "0.4s";
  design.style.transitionDelay = "0s";
});

const trigger = document.querySelectorAll(".btn");
trigger.forEach((menu) => menu.addEventListener("click", toggle));

function toggle() {
  trigger.forEach((item) =>
    item != this ? item.classList.remove("is-active") : null
  );

  if (this.classList != "is-active") {
    this.classList.toggle("is-active");
  }
}

