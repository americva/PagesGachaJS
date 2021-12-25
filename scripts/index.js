
document.querySelector(".bg-item").addEventListener("animationiteration", function () {
    
    let rand = Math.floor(Math.random() * 3) + 1;
    let str = './assets/' + rand.toString() + '.png'; 
    document.getElementById('id-item').src = str;
});

/*
document.addEventListener("DOMContentLoaded", function () {
    getEnergy();
     actualizarEnergia()
});
*/

document.getElementById('botonpull').addEventListener("click", function () {
    window.location.href = "resultado.html";
});

document.getElementById('btn-coleccion').addEventListener("click", function () {
    window.location.href = "coleccion.html";
});