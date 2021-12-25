let colec;
let itemCollec;



document.addEventListener("DOMContentLoaded", function () {
    getCollection();
});

function getCollection() {
    let target = document.getElementById("table");

    colec = localStorage.getItem("colec");

    if (colec != undefined) {
        itemCollec = JSON.parse(colec);

        for (let i = 0; i < itemCollec.length; i++) {
            target.innerHTML += "<tbody><tr class='rarity-quantity'><td><div class='rareza" + itemCollec[i].rareza + "'></div></td><td class='cantidad'>" + itemCollec[i].cantidad + "</td></tr><tr class='img-name'><td><img class='table-image' src='" + itemCollec[i].image + "'></img></td><td class='item-nom'>" + itemCollec[i].nombre + "</td><tr><td class='item-desc'>" + itemCollec[i].descripcion + "</td></tr></tr></tbody>";
        }
    } else {
        document.getElementById('btn-delete').style.display = 'none';
    }
}

document.getElementById('btn-delete').addEventListener("click", function () {
    Swal.fire({
        title: '¿De verdad quieres?',
        text: "Perderás todo lo que tienes!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, bórralo todo'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¿De verdad DE LA BUENA?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Que sí!'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('colec');
                    Swal.fire(
                        'Lula está triste',
                        'Se han pulverizado todos los objetos encontrados',
                        'success'
                    ).then(function() {
                        window.location = "coleccion.html";
                    });
                }
            })
        }
    })
});