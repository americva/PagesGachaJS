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
        target.innerHTML += "<tr class='table-tr'><td><div class='rareza" + itemCollec[i].rareza + "'></div></td><td><img class='table-image' src='" + itemCollec[i].image + "'></img></td><td><div>" + itemCollec[i].nombre + "</td><td>" + itemCollec[i].descripcion + "</td><td class='cantidad'>" + itemCollec[i].cantidad + "</td></tr>";
    }
}