const btMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

function btMobile() {
  this.classList.toggle("active");
  menu.classList.toggle("mobile-active");
  const expanded = btMenu.getAttribute("aria-expanded") === "true";
  btMenu.setAttribute("aria-expanded", !expanded);
}

btMenu.addEventListener("click", btMobile);
