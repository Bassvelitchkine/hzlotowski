var canap = document.getElementById("canap");
canap.addEventListener("click", function () {
  console.log("fdp");
});
// var furtif = document.getElementById("furtif");
// var medium = document.getElementById("medium");
// var trenteCinqMilli = document.getElementById("trenteCinqMilli");

function handleSection(section) {
  return function () {
    console.log(section);
    handleMenuSlide();
  };
}

var gallerieSections = document
  .getElementById("gallerie")
  .getElementsByTagName("section");

// for (let i = 0; i < gallerieSections.length; i++) {
//   //   gallerieSections[i].addEventListener(
//   //     "click",
//   //     handleSection(gallerieSections[i])
//   //   );
//   gallerieSections[i].addEventListener("click", function () {
//     console.log("fdp");
//   });
// }

console.log(gallerieSections[0]);

gallerieSections[0].addEventListener(
  "click",
  function () {
    alert("fdp");
  },
  false
);
