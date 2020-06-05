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
