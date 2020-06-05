var menu = document.getElementById("menu");
var paragraphs = menu.getElementsByTagName("section");
var titles = document.getElementsByTagName("h2");
var body = document.body;
var didSlide = false;

const handleMenuSlide = (blockIdToDisplay) => {
  // On fait d'abord glisser les titres de section
  for (let i = 0; i < titles.length; i++) {
    titles[i].className = "left";
  }
  // On fait glisser les sections sur la gauche 0,2s plus tard
  setTimeout(() => {
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].className = "left";
    }
  }, 200);
  setTimeout(() => handleGallerieDisplay(blockIdToDisplay), 400);

  // Il faut alors réafficher la scrollbar verticale et indiquer qu'on a fait slider le menu,
  // pour ne pas tenter de le faire slider à nouveau
  body.style.overflowY = "visible";
  didSlide = true;
};
