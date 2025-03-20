document.addEventListener("DOMContentLoaded", function () {
  const suites = document.querySelectorAll(".suite");

  suites.forEach((suite) => {
    const img = suite.querySelector("img");

    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
      img.style.transition = "transform 0.3s ease-in-out";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });

    suite.addEventListener("click", () => {
      const suiteName = suite.querySelector("h3").innerText;
      const suiteDesc = suite.querySelector("p").innerText;
      const suiteImg = suite.querySelector("img").src;

      const suitePrice =
        suite.getAttribute("data-price") || "Preço não informado";
      const suiteAmenities =
        suite.getAttribute("data-amenities") || "Comodidades não informadas";
      const suiteAvailability =
        suite.getAttribute("data-availability") ||
        "Disponibilidade não informada";

      showModal(
        suiteName,
        suiteDesc,
        suiteImg,
        suitePrice,
        suiteAmenities,
        suiteAvailability
      );
    });
  });

  function showModal(
    title,
    description,
    imageSrc,
    price,
    amenities,
    availability
  ) {

    const existingModal = document.querySelector(".modal-overlay");
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement("div");
    modal.classList.add("modal-overlay");
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${title}</h2>
                <img src="${imageSrc}" alt="${title}">
                <p><strong>Descrição:</strong> ${description}</p>
                <p><strong>Preço:</strong> ${price}</p>
                <p><strong>Comodidades:</strong> ${amenities}</p>
                <p><strong>Disponibilidade:</strong> ${availability}</p>
            </div>
        `;

    document.body.appendChild(modal);

    modal.querySelector(".close-modal").addEventListener("click", () => {
      modal.remove();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
});

const depoimentos = [
  {
    img: "./img/hospede1.jpg",
    texto: `"Lugar incrível! Voltarei com certeza!"`,
    nome: "- Ana Souza",
  },
  {
    img: "./img/hospede2.jpg",
    texto: `"Atendimento impecável, quartos confortáveis e café da manhã delicioso!"`,
    nome: "- Carlos Oliveira",
  },
  {
    img: "./img/hospede3.jpg",
    texto: `"Foi uma experiência maravilhosa! Recomendo a todos!"`,
    nome: "- Mariana Lima",
  },
];

const cards = document.querySelectorAll(".depoimento-card");
let indexAtual = 1;

function atualizarDepoimentos() {
  
  const anterior = (indexAtual - 1 + depoimentos.length) % depoimentos.length;
  const atual = indexAtual;
  const proximo = (indexAtual + 1) % depoimentos.length;

  
  cards[0].querySelector(".depoimento-img").src = depoimentos[anterior].img;
  cards[0].querySelector(".depoimento-texto").innerHTML =
    depoimentos[anterior].texto;
  cards[0].querySelector(".depoimento-nome").innerHTML =
    depoimentos[anterior].nome;

  cards[1].querySelector(".depoimento-img").src = depoimentos[atual].img;
  cards[1].querySelector(".depoimento-texto").innerHTML =
    depoimentos[atual].texto;
  cards[1].querySelector(".depoimento-nome").innerHTML =
    depoimentos[atual].nome;

  cards[2].querySelector(".depoimento-img").src = depoimentos[proximo].img;
  cards[2].querySelector(".depoimento-texto").innerHTML =
    depoimentos[proximo].texto;
  cards[2].querySelector(".depoimento-nome").innerHTML =
    depoimentos[proximo].nome;

  indexAtual = (indexAtual + 1) % depoimentos.length;
}

setInterval(atualizarDepoimentos, 5000);