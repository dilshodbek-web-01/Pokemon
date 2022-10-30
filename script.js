"use strict";

for (let i = 0; i < pokemons.length; i++) {
    const div=document.createElement('div');
    div.classList.add('card', 'px-5', 'shadow', 'py-3');
    div.innerHTML = `<img src="${pokemons[i].img}" alt="img" width="157"> <hr> <h4> ${pokemons[i].id} ${pokemons[i].name} </h4> <p>${pokemons[i].candy} </p> <h5> ${pokemons[i].height} ${pokemons[i].weight} </h5> `;
    $('.wrapper').appendChild(div)
}