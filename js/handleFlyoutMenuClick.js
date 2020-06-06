var gallerie = document.getElementById("gallerie");
var main = document.getElementById("main");
var flyoutMenu = document.getElementById("flyoutMenu");
var flyoutMenuSections = flyoutMenu.getElementsByTagName("p");

var menu = document.getElementById("menu");
var paragraphs = menu.getElementsByTagName("section");
var titles = document.getElementsByTagName("h2");

const handleMobileStyleModifications = () => {
  gallerie.style.display = "flex";
  // On fait d'abord glisser les titres de section
  for (let i = 0; i < titles.length; i++) {
    titles[i].className = "left";
  }
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].className = "left";
  }
};

const handleMobileSection = (blockIdToDisplay) => {
  return function () {
    if (!didSlide) {
      handleMobileStyleModifications();
      didSlide = true;
    }
    slideFlyoutMenu();
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
