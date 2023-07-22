let Lampas = ["Ar", "Bez"];
let Duga = ["Duga ar lampām", "Duga ar lampām + led lampām", "Duga ar led lampām"];
let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

// Lampas number ar or bez select option
Lampas.forEach(function addLampas(item) {
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct1.appendChild(option);
});

slct1.onchange = function() {
  slct2.style.display = "none";
  slct2.innerHTML = "<option>Duga</option>";

  if (this.value == "Ar") {
    addToSlct2(Duga);
    slct2.style.display = "inline-block";
  } else if (this.value == "Bez") {
    // Clear slct2 options
    slct2.innerHTML = "";
  }
};

// Duga select option
function addToSlct2(arr) {
  arr.forEach(function(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
  });
}

let species3= ["MAN", "Scania", "Renault", "Mercedes", "Iveco", "Volvo",];

let slct3 = document.getElementById("slct3");

species3.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct3.appendChild(option);
});

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
