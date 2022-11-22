

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const information = document.querySelector(".INFORMATION")

information.addEventListener('click',  () => {
  information.style.display = 'none';
})

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === 'true' ? 'false' : 'true';
  // if(before_body.display === 'none') {
  // 	before_body.display = 'block';
  // }

  // console.log(before_body.display)
  // before_body.setProperty("--blokc", 'block')
  body.classList.toggle('mobile-active-open');
}