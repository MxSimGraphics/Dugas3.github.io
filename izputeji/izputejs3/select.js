let species1 = ["MAN", "Scania", "Renault", "Mercedes", "Iveco", "Volvo",];

let slct1 = document.getElementById("slct1");

species1.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});
