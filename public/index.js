const iconoBurger = document.querySelector("#icono-burger");
const menuMobile = document.querySelector(".js-menu-mobile");
const links = document.querySelectorAll("#menu-mobile li");

// DESPLIEGA - CIERRA MENÚ
iconoBurger.onclick = () => {
  menuMobile.classList.toggle("menu-desplegado");
};

// CIERRA MENÚ AL IR A LINK
for (let link of links) {
  link.onclick = () => {
    menuMobile.classList.remove("menu-desplegado");
  };
}
