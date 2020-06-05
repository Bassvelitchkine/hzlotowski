var gallerieSections = document
  .getElementById("gallerie")
  .getElementsByTagName("section");

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
