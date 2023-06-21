let species = ["Dugas", "Vārti", "Margas",];

let slct1 = document.getElementById("slct1");

species.forEach(function addSpecies(item) {
    let option  = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});
