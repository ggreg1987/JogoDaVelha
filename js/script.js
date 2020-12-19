let x = document.querySelector(".x");
let o = document.querySelector(".o");
let blocos = document.querySelectorAll(".box");


let jogador1 = 0;
let jogador2 = 0;

for(let i = 0; i < blocos.length; i++) {

    blocos[i].addEventListener("click",  function() {

        let elemento;

        if(jogador1 == jogador2) {
            elemento = x;
        } else {
            elemento = o;
        }

        let cloneElemento = elemento.cloneNode(true);

        this.appendChild(cloneElemento);

        if(jogador1 == jogador2) {
            jogador1++;
        } else {
            jogador2++;
        }

    });

}