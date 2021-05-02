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

// MENU DE PROYECTOS
const buttonProjects = document.querySelectorAll(".js-button-project");
const projects = document.querySelectorAll(".projects");
const buttonAll = document.querySelector("#button-all");

for (let button of buttonProjects) {
  button.onclick = () => {
    buttonAll.classList.remove("active");
    for (let project of projects) {
      const boton = button.dataset.name;
      const projectSelect = project.dataset.name;
      if (boton === projectSelect) {
        project.classList.remove("hidden");
      } else if (boton === "all") {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    }
  };
}
