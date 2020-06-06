var flyoutMenu = document.getElementById("flyoutMenu");
var flyoutMenuButton = document.getElementById("flyoutMenuButton");

const slideFlyoutMenu = () => {
  if (flyoutMenu.className === "") {
    flyoutMenu.className = "show";
  } else {
    flyoutMenu.className = "";
    document.body.style.overflowY = "visible";
  }
};

flyoutMenuButton.addEventListener("click", slideFlyoutMenu);

// Pour que le menu volant s'affiche lorsqu'on arrive sur la page
if (window.innerWidth <= 950) {
  slideFlyoutMenu();
}
