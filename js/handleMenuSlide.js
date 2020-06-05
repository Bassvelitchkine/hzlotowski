var menu = document.getElementById("menu");
var paragraphs = menu.getElementsByTagName("section");
var titles = document.getElementsByTagName("h2");
var body = document.body;
var didSlide = false;

const handleMenuSlide = (blockIdToDisplay) => {
  for (let i = 0; i < titles.length; i++) {
    titles[i].className = "left";
  }

  setTimeout(() => {
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].className = "left";
    }
  }, 200);
  setTimeout(() => handleGallerieDisplay(blockIdToDisplay), 400);

  body.style.overflowY = "visible";
  didSlide = true;
};
