var gallerieSections = document
  .getElementById("gallerie")
  .getElementsByTagName("section");

var didSlide = false;

// On clique sur le bloc dont l'id est blockIdToDisplay. Il faut qu'on l'affiche et
// qu'on fasse disparaitre les autres
const handleGallerieDisplay = (blockIdToDisplay) => {
  for (let i = 0; i < gallerieSections.length; i++) {
    var section = gallerieSections[i];
    if (section.id === `gallerie-${blockIdToDisplay}`) {
      section.style.display = "flex";
    } else {
      section.style.display = "none";
    }
  }
};
