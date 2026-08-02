const btnCarregar = document.querySelector('.btn-carregar-mais');

if (btnCarregar) {
  btnCarregar.addEventListener('click', () => {
    const cardsOcultos = document.querySelectorAll('.card-produto.oculto');
    
    for (let i = 0; i < 3 && i < cardsOcultos.length; i++) {
      cardsOcultos[i].classList.remove('oculto');
    }

    if (document.querySelectorAll('.card-produto.oculto').length === 0) {
      btnCarregar.style.display = 'none';
    }
  });
}

const form = document.getElementById("form-contato");
const msg = document.getElementById("mensagem");

form.addEventListener("submit", function(event){

    // Impede o envio apenas para testar
    event.preventDefault();

    msg.classList.add("show");

    setTimeout(() => {
        msg.classList.remove("show");
    }, 3000);

});