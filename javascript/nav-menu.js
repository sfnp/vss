// window.onload = function () {
// 	window.addEventListener('scroll', function (e) {
// 		if (window.pageYOffset > 150) {
// 			document.querySelector("header").classList.add('is-scrolling');
// 		} else {
// 			document.querySelector("header").classList.remove('is-scrolling');
// 		}
// 	});

// 	const menu_btn = document.querySelector('.MENU');
//     // const body = document.querySelector('body');
// 	const mobile_menu = document.querySelector('.mobile-nav');

// 	menu_btn.addEventListener('click', function () {
// 		menu_btn.classList.toggle('is-active');
//         body.classList.toggle('.is-active')
// 		mobile_menu.classList.toggle('is-active');
// 	});
// }

// let body = document.querySelectorAll('.mobile-suitable');
// const before_body = window.getComputedStyle(body, '::before')

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
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