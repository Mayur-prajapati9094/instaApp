let input = document.querySelector("input");
let imageArr = [];
getData();
displayImages();

let uname = JSON.parse(localStorage.getItem("uname"));
input.addEventListener("change", (event) => {
  const files = event.target.files;
  for (var i = 0, f; (f = files[i]); i++) {
    let convertMB = (files[i].size / (1024 * 1024)).toFixed(2);
    var reader = new FileReader();

    reader.onload = function (e) {
      var testObj = { uname: uname[0].uname, imageUrl: e.target.result };

      if (convertMB <= 2) {
        imageArr.push(testObj);

        displayImages();
        setData();
      }
    };
    reader.readAsDataURL(f);
  }
});

function displayImages() {
  let images = "";
  let likeCount = 0;

  imageArr.forEach((image, index) => {
    // console.log(userData[0].uname)
    images += `<div class="container">
        <span>${image.uname}</span>
        <img class="image" src="${image.imageUrl}">
        <span class="delete" onclick="deleteImages(${index})">&times;</span>
        <button class=emoji>&#x1F44D;</button> 
        <span>${likeCount}</span>
        </div>`;
  });
  document.getElementById("list").innerHTML = images;
}
function setData() {
  localStorage.setItem("images", JSON.stringify(imageArr));
}
function getData() {
  let Data = localStorage.getItem("images");
  if (Data) {
    imageArr = JSON.parse(Data);
  } else {
    setData();
  }
}
function deleteImages(index) {
  imageArr.splice(index, 1);
  setData();
  displayImages();
}
