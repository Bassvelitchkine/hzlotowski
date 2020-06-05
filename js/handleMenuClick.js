var gallerie = document.getElementById("gallerie");
var main = document.getElementById("main");
var menu = document.getElementById("menu");
var menuSections = menu.getElementsByTagName("p");

const handleStyleModifications = () => {
  menu.style.width = "20%";
  main.className = "left";
  gallerie.style.display = "flex";
};

const handleSection = (blockIdToDisplay) => {
  return function () {
    if (!didSlide) {
      handleMenuSlide(blockIdToDisplay);
      handleStyleModifications();
    } else {
      handleGallerieDisplay(blockIdToDisplay);
    }
  };
};

for (let i = 0; i < menuSections.length; i++) {
  var section = menuSections[i];
  (function (_section) {
    _section.addEventListener("click", handleSection(_section.id));
  })(section);
}
