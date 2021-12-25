//array items
import { itemNormal } from './mock-items.js';
import { itemBuena } from './mock-items.js';
import { itemMuyBuena } from './mock-items.js';
import { itemMuuuyBuena } from './mock-items.js';
import { itemGenial } from './mock-items.js';
import { itemPerfecta } from './mock-items.js';

let randPerc = 0;
let itemCollec;

document.addEventListener("DOMContentLoaded", function () {
    getItem();
});

function getItem() {

    fetchColeccion();

    randPerc = Math.floor(Math.random() * 100) + 1;
    if (randPerc < 40 && randPerc > 0) {
        document.querySelector('.sparks').style.background = `linear-gradient(216deg, rgba(227,227,227,1) 0%, rgba(161,161,161,1) 100%)`;
        document.querySelector('.sparks').style.boxShadow = `0px 0px 30px 5px rgba(41,41,39,0.29)`;
        let num = Math.floor(Math.random() * itemNormal.length);
        agregarCollec(itemNormal[num]);
    } else if (randPerc < 70 && randPerc > 40) {
        let num = Math.floor(Math.random() * itemBuena.length);
        agregarCollec(itemBuena[num]);
    } else if (randPerc < 80 && randPerc > 70) {
        document.querySelector('.sparks').style.background = `linear-gradient(127deg, #8df2f4, rgb(107 156 255))`;
        document.querySelector('.sparks').style.boxShadow = `0px 0px 30px 5px rgb(51 144 249 / 44%)`;
        let num = Math.floor(Math.random() * itemMuyBuena.length);
        agregarCollec(itemMuyBuena[num]);
    } else if (randPerc < 90 && randPerc > 80) {
        document.querySelector('.sparks').style.background = `linear-gradient(127deg, #fed2fe, rgb(222 101 241))`;
        document.querySelector('.sparks').style.boxShadow = `0px 0px 30px 5px rgb(232 51 249 / 44%)`;
        let num = Math.floor(Math.random() * itemMuuuyBuena.length);
        agregarCollec(itemMuuuyBuena[num]);
    } else if (randPerc < 97 && randPerc > 90) {
        document.querySelector('.sparks').style.background = `linear-gradient(127deg, #ffe1e1, rgb(245 100 100))`;
        document.querySelector('.sparks').style.boxShadow = `0px 0px 30px 5px rgb(237 160 160 / 59%)`;
        let num = Math.floor(Math.random() * itemGenial.length);
        agregarCollec(itemGenial[num]);
    } else if (randPerc < 100 && randPerc > 97) {
        document.querySelector('.sparks').style.background = `linear-gradient(127deg, #fff1c3, rgb(255 135 0))`;
        document.querySelector('.sparks').style.boxShadow = `0px 0px 30px 5px rgb(249 184 24 / 82%)`;
        let num = Math.floor(Math.random() * itemPerfecta.length);
        agregarCollec(itemPerfecta[num]);
    } else {
        agregarCollec(itemNormal[0]);
    }
}

function agregarCollec(item) {
    document.getElementById("nombre").innerHTML = item.nombre;
    document.getElementById("foto").setAttribute('src', item.image);

    let flag = false;
    if (itemCollec.length === 0) {
        itemCollec.push(item);
    } else {
        for (let i in itemCollec) {
            if (itemCollec[i].nombre == item.nombre) {
                flag = true;
                itemCollec[i].cantidad += 1;
            }
        }

        if (flag == false) {
            itemCollec.push(item);
        }
    }
    localStorage.setItem("colec", JSON.stringify(itemCollec));
}

function fetchColeccion() {
    let colec = localStorage.getItem("colec");

    if (colec) {
        itemCollec = JSON.parse(colec);
    } else {
        itemCollec = [];
    }
}

document.querySelector(".sparks").addEventListener("animationend", function (e) {
    party.sparkles(this);
});
