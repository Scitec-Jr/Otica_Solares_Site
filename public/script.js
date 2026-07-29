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