// Carregar mais produtos
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

// Mensagem de sucesso ao enviar o formulário (COM PROTEÇÃO)
const form = document.getElementById("form-contato");
const msg = document.getElementById("mensagem");

if (form && msg) {
  form.addEventListener("submit", function(event){
      event.preventDefault();
      msg.classList.add("show");
      setTimeout(() => {
          msg.classList.remove("show");
      }, 3000);
  });
}

// Carrossel dos cards das unidades
const track = document.querySelector(".slider-track");
const direita = document.querySelector(".direita");
const esquerda = document.querySelector(".esquerda");
const cards = document.querySelectorAll(".card-unidade");

if (track && direita && esquerda && cards.length > 0) {
  const total = cards.length;
  let index = 0;

  
  function atualizarCarrossel() {
    const cardWidth = cards[0].offsetWidth; 
    const gap = 30; 
    const deslocamento = index * (cardWidth + gap);
    
    track.style.transform = `translateX(-${deslocamento}px)`;
  }

  direita.addEventListener("click", () => {
    index++;
    if (index >= total) {
      index = 0;
    }
    atualizarCarrossel();
  });

  esquerda.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = total - 1;
    }
    atualizarCarrossel();
  });
}