let Izvēle = ["Dugas", "Balkoni", "Izpūtēji", "Sliekšņi", "Žogi", "Vārti", "Priekšējie un aizmugurējie aizsargstieņi", "Džipam", "Margas"];
let Dugas = ["Jumta duga", "Priekšējā bampera aizsargstienis", "Priekšējais aizsargstienis", "Sāna duga"];
let Margas = ["Trepju marga", "Pandus", "Marga"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");
let slct3 = document.getElementById("slct3");

// Izvēle select option
Izvēle.forEach(function addIzvēle(item) {
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct1.appendChild(option);
});

slct1.onchange = function() {
  slct2.style.display = "none";
  slct2.innerHTML = "<option>Dugas</option>";

  slct3.style.display = "none";
  slct3.innerHTML = "<option>Margas</option>";

  if (this.value == "Dugas") {
    addToSlct2(Dugas);
    slct2.style.display = "inline-block";
  } else if (this.value == "Margas") {
    addToSlct3(Margas);
    slct3.style.display = "inline-block";
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

// Margas select option
function addToSlct3(arr) {
  arr.forEach(function(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct3.appendChild(option);
  });
}
