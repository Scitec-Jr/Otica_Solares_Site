
// ===== CARREGAR MAIS PRODUTOS =====

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


// ===== FORMULÁRIO DE CONTATO =====

const form = document.getElementById("form-contato");
const msg = document.getElementById("mensagem");

if (form && msg) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        msg.classList.add("show");

        setTimeout(() => {
            msg.classList.remove("show");
        }, 3000);
    });
}


// ===== CARROSSEL DE UNIDADES =====

const track = document.querySelector(".slider-track");
const direita = document.querySelector(".unidades .seta.direita");
const esquerda = document.querySelector(".unidades .seta.esquerda");
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



// ===== CARROSSEL DE DEPOIMENTOS =====

const depoimentos = [
    {
        nome: "Mariana Oliveira",
        cidade: "Belém, Pará",
        texto: "Excelente atendimento e produtos de ótima qualidade! Sempre encontro o que preciso e sou muito bem recebida. Recomendo de olhos fechados!"
    },
    {
        nome: "Carlos Henrique",
        cidade: "Tomé-Açu, Pará",
        texto: "Já sou cliente há bastante tempo e sempre tive ótimas experiências. A variedade de produtos e a atenção da equipe fazem toda a diferença!"
    },
    {
        nome: "Ana Beatriz",
        cidade: "Mocajuba, Pará",
        texto: "Uma loja de confiança, com produtos de qualidade e atendimento excelente. Sempre que preciso, sei onde encontrar o que procuro!"
    }
];

let depoimentoAtual = 0;

// Elementos HTML

const nomeDepoimento = document.getElementById("depoimento-nome");
const cidadeDepoimento = document.getElementById("depoimento-cidade");
const textoDepoimento = document.getElementById("depoimento-texto");

const botaoAnterior = document.getElementById("depoimento-anterior");
const botaoProximo = document.getElementById("depoimento-proximo");

const cardDepoimento = document.querySelector(".depoimento-card");

// Atualizar depoimento e animação

function atualizarDepoimento(direcao) {

    const depoimento = depoimentos[depoimentoAtual];

    nomeDepoimento.textContent = depoimento.nome;
    cidadeDepoimento.textContent = depoimento.cidade;
    textoDepoimento.textContent = depoimento.texto;

    if (direcao) {

        cardDepoimento.classList.remove(
            "entrar-direita",
            "entrar-esquerda"
        );

        // Reinicia a animação

        void cardDepoimento.offsetWidth;

        cardDepoimento.classList.add(
            direcao === "direita"
                ? "entrar-direita"
                : "entrar-esquerda"
        );
    }
}

// Verificar elementos e inicializar

if (nomeDepoimento && cidadeDepoimento && textoDepoimento &&
    botaoAnterior && botaoProximo && cardDepoimento) {

    atualizarDepoimento();

    // Próximo depoimento

    botaoProximo.addEventListener("click", function() {

        depoimentoAtual++;

        if (depoimentoAtual >= depoimentos.length) {
            depoimentoAtual = 0;
        }

        atualizarDepoimento("direita");
    });

    // Depoimento anterior

    botaoAnterior.addEventListener("click", function() {

        depoimentoAtual--;

        if (depoimentoAtual < 0) {
            depoimentoAtual = depoimentos.length - 1;
        }

        atualizarDepoimento("esquerda");
    });
}
