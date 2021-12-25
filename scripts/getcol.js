document.addEventListener("DOMContentLoaded", function () {
    getCollection();
});

let colec;
let itemCollec;


function getCollection() {
    let target = document.getElementById("table");

    colec = localStorage.getItem("colec");

    if (colec) {
        itemCollec = JSON.parse(colec);
    }

    for (let i=0; i<itemCollec.length; i++) {
        target.innerHTML += "<tbody><tr class='rarity-quantity'><td><div class='rareza" + itemCollec[i].rareza + "'></div></td><td class='cantidad'>" + itemCollec[i].cantidad + "</td></tr><tr class='img-name'><td><img class='table-image' src='" + itemCollec[i].image + "'></img></td><td class='item-nom'>" + itemCollec[i].nombre + "</td><tr><td class='item-desc'>" + itemCollec[i].descripcion + "</td></tr></tr></tbody>";
    }
}