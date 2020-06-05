var flyoutMenu = document.getElementById("flyoutMenu");
var flyoutMenuButton = document.getElementById("flyoutMenuButton");

const slideflyoutMenu = () => {
  if (flyoutMenu.className === "") {
    flyoutMenu.className = "show";
  } else {
    flyoutMenu.className = "";
  }
};

flyoutMenuButton.addEventListener("click", slideflyoutMenu);
