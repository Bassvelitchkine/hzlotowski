var gallerie = document.getElementById("gallerie");
var main = document.getElementById("main");
var flyoutMenu = document.getElementById("flyoutMenu");
var flyoutMenuSections = flyoutMenu.getElementsByTagName("p");

const handleMobileStyleModifications = () => {
  gallerie.style.display = "flex";
};

const handleMobileSection = (blockIdToDisplay) => {
  return function () {
    slideFlyoutMenu();
    console.log(blockIdToDisplay);
    handleGallerieDisplay(blockIdToDisplay);
  };
};

// On ajoute les event listeners de manières itératives sur chaque section du menu.
// Voir "closures js" pour comprendre ce qu'il se passe ici
for (let i = 0; i < menuSections.length; i++) {
  var section = flyoutMenuSections[i];
  (function (_section) {
    _section.addEventListener("click", handleMobileSection(_section.className));
  })(section);
}
