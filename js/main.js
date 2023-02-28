'use strict';

const imgs=['../img/01.webp','../img/02.webp','../img/03.webp','../img/04.webp','../img/05.webp'];
const slider = document.querySelector('.slider');
let active =0;


let itemsContent='';
// Ciclo for per la lunghezza dell'array imgs
for (let i=0; i< imgs.length; i++){
    console.log(imgs[i]);

itemsContent += `<div class='item'><img src='img/${imgs[i]}' alt=''></img></div>`
}
slider.innerHTML = slider.innerHTML + itemsContent;

// Selezioniamo i bottoni e il div creato in precedenza
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const items = document.querySelectorAll('.item');
///Selezioniamo i bottoni e il div creato in precedenza

// Inseriamo la classe show per farla mostrare
items[active].classList.add('show');
// /Classe Show


// Evento click prev
prev.addEventListener('click', function(){
    if(active > 0){
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    }
});
// /Evento click prev

//Evento click next
next.addEventListener('click', function(){
    if(active < items.length - 1){
        console.log('incremento active');
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    }
});



