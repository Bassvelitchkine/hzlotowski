var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("button");

const slideMenu = () => {
  if (menu.className === "") {
    menu.className = "show";
  } else {
    menu.className = "";
  }
};

menuButton.addEventListener("click", slideMenu);
