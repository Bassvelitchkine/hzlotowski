var paragraphs = document.getElementsByTagName("section");
var titles = document.getElementsByTagName("h1");
var body = document.body;

const handleMenuSlide = () => {
  for (let i = 0; i < titles.length; i++) {
    titles[i].className = "left";
  }

  setTimeout(() => {
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].className = "left";
    }
  }, 200);

  body.setAttribute("overflow", "visible");
};
