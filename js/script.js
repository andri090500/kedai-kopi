// event saat menu hamburger icon di klik

const navbar = document.querySelector(".navbar-nav");
const menu_icon = document.getElementById("menu");

menu_icon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// event klik selain nav dan sidebar untuk remove class active
document.addEventListener("click", (e) => {
  console.log(e.target);
  if (!menu_icon.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// contains untuk cek element
// const  = document.getElementById("myDIV").contains(span); untuk cek apakah di myDiv ada element span

// contains untuk cek classList
{
  /* <div class="secondary info">Item</div>
mengecek apakah di div ada class secondary
const div = document.querySelector('div');
div.classList.contains('secondary'); // true */
}
