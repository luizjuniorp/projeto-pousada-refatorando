document.addEventListener("DOMContentLoaded", function () {
  function showFormFeedback(form, type, message) {
    const feedback = form.querySelector(".form-feedback");

    if (!feedback) {
      return;
    }

    feedback.textContent = message;
    feedback.classList.remove("success", "error");
    feedback.classList.add(type);
  }

  const heroForm = document.getElementById("hero-reservation-form");
  if (heroForm) {
    heroForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = heroForm.querySelector('input[name="name"]').value.trim();
      const email = heroForm.querySelector('input[name="email"]').value.trim();
      const phone = heroForm.querySelector('input[name="phone"]').value.trim();
      const suite = heroForm.querySelector("#suite-select").value;

      if (!name || !email || !phone || !suite) {
        showFormFeedback(
          heroForm,
          "error",
          "Preencha todos os campos para reservar sua vaga."
        );
        return;
      }

      showFormFeedback(
        heroForm,
        "success",
        "Reserva enviada com sucesso! Nossa equipe entrará em contato em breve."
      );

      heroForm.reset();
    });
  }

  const suiteData = {
    "suite-simples": {
      nome: "Suíte Simples",
      descricao:
        "Ambiente acolhedor, funcional e pensado para quem busca conforto sem abrir mão da tranquilidade da Serra.",
      preco: "R$ 150,00 por noite",
      disponibilidade: "Disponível",
      comodidades: [
        "Wi-Fi gratuito",
        "TV a cabo",
        "Ar-condicionado",
        "Café da manhã incluso"
      ],
      imagem: "./img/suite-simples.jpg",
      galeria: [
        "./img/suite-simples.jpg",
        "./img/detail-1.jpg",
        "./img/detail-2.jpg"
      ],
      descricaoDetalhada:
        "A Suíte Simples foi criada para quem deseja uma estadia tranquila, funcional e bem localizada. Com conforto essencial e ambiente acolhedor, ela oferece o equilíbrio ideal entre praticidade e descanso.",
      caracteristicas: [
        { icon: "fa-wifi", texto: "Wi-Fi de alta velocidade" },
        { icon: "fa-tv", texto: "TV com canais locais" },
        { icon: "fa-snowflake", texto: "Ar-condicionado" },
        { icon: "fa-mug-saucer", texto: "Café da manhã incluso" },
        { icon: "fa-bath", texto: "Banheiro moderno" },
        { icon: "fa-bed", texto: "Cama confortável" }
      ],
      avaliacoes: [
        { nome: "Ana Souza", nota: 5, texto: "Quarto simples, mas muito aconchegante e bem cuidado." },
        { nome: "Rafael T.", nota: 4, texto: "Ótima opção para uma estadia curta e confortável." },
        { nome: "Marina M.", nota: 5, texto: "Ambiente tranquilo, atendimento excelente e localização ótima." }
      ],
      sugestoes: [
        { id: "suite-luxo", nome: "Suíte Luxo", imagem: "./img/suite-luxo.jpg" },
        { id: "suite-presidencial", nome: "Suíte Presidencial", imagem: "./img/suite-presidencial.avif" }
      ]
    },
    "suite-luxo": {
      nome: "Suíte Luxo",
      descricao:
        "Vista privilegiada, espaço amplo e detalhes sofisticados para uma estadia memorável e relaxante.",
      preco: "R$ 250,00 por noite",
      disponibilidade: "Últimos quartos disponíveis!",
      comodidades: [
        "Wi-Fi gratuito",
        "TV a cabo",
        "Ar-condicionado",
        "Banheira",
        "Vista para a montanha"
      ],
      imagem: "./img/suite-luxo.jpg",
      galeria: [
        "./img/suite-luxo.jpg",
        "./img/detail-2.jpg",
        "./img/detail-3.jpg"
      ],
      descricaoDetalhada:
        "A Suíte Luxo oferece um ambiente sofisticado com foco em bem-estar e conforto. Com espaço generoso, vista panorâmica e detalhes premium, é ideal para casais e viajantes que buscam uma experiência mais refinada.",
      caracteristicas: [
        { icon: "fa-wifi", texto: "Wi-Fi premium" },
        { icon: "fa-tv", texto: "TV smart" },
        { icon: "fa-snowflake", texto: "Ar-condicionado" },
        { icon: "fa-bath", texto: "Banheira de hidromassagem" },
        { icon: "fa-mountain-sun", texto: "Vista para a montanha" },
        { icon: "fa-spa", texto: "Detalhes de spa" }
      ],
      avaliacoes: [
        { nome: "Carlos Oliveira", nota: 5, texto: "A vista é incrível e a suíte é muito elegante." },
        { nome: "Patrícia A.", nota: 5, texto: "Experiência premium, com conforto e atenção impecáveis." },
        { nome: "Guilherme L.", nota: 4, texto: "Perfeita para um fim de semana especial." }
      ],
      sugestoes: [
        { id: "suite-simples", nome: "Suíte Simples", imagem: "./img/suite-simples.jpg" },
        { id: "suite-presidencial", nome: "Suíte Presidencial", imagem: "./img/suite-presidencial.avif" }
      ]
    },
    "suite-presidencial": {
      nome: "Suíte Presidencial",
      descricao:
        "Experiência exclusiva com alto padrão, conforto premium e ambiente que combina elegância e privacidade.",
      preco: "R$ 400,00 por noite",
      disponibilidade: "Apenas 1 suíte restante!",
      comodidades: [
        "Wi-Fi gratuito",
        "TV a cabo",
        "Ar-condicionado",
        "Hidromassagem",
        "Serviço de quarto premium"
      ],
      imagem: "./img/suite-presidencial.avif",
      galeria: [
        "./img/suite-presidencial.avif",
        "./img/detail-1.jpg",
        "./img/detail-3.jpg"
      ],
      descricaoDetalhada:
        "A Suíte Presidencial reúne exclusividade, conforto refinado e atendimento acima da média. Pensada para hóspedes que exigem o melhor, ela entrega uma experiência inesquecível em meio à natureza da Serra.",
      caracteristicas: [
        { icon: "fa-wifi", texto: "Internet de alta velocidade" },
        { icon: "fa-tv", texto: "TV com streaming" },
        { icon: "fa-snowflake", texto: "Climatização inteligente" },
        { icon: "fa-hot-tub-person", texto: "Hidromassagem exclusiva" },
        { icon: "fa-bell-concierge", texto: "Atendimento concierge" },
        { icon: "fa-crown", texto: "Experiência premium" }
      ],
      avaliacoes: [
        { nome: "Mariana Lima", nota: 5, texto: "Uma suíte luxuosa, com atenção impecável e ambiente incrível." },
        { nome: "Thiago C.", nota: 5, texto: "Ótima para uma viagem inesquecível com muito conforto." },
        { nome: "Sofia R.", nota: 5, texto: "Luxo e tranquilidade em um só lugar. Recomendo demais." }
      ],
      sugestoes: [
        { id: "suite-luxo", nome: "Suíte Luxo", imagem: "./img/suite-luxo.jpg" },
        { id: "suite-simples", nome: "Suíte Simples", imagem: "./img/suite-simples.jpg" }
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const suiteId = params.get("id");
  const detailContainer = document.getElementById("suite-detail-container");

  function renderSuiteDetail() {
    if (!detailContainer || !suiteId || !suiteData[suiteId]) {
      return;
    }

    const suite = suiteData[suiteId];

    detailContainer.innerHTML = `
      <article class="suite-detail-card">
        <div class="suite-detail-layout">
          <div class="suite-detail-image">
            <img src="${suite.imagem}" alt="${suite.nome}" />
          </div>
          <div class="suite-detail-content">
            <h1>${suite.nome}</h1>
            <p>${suite.descricao}</p>
            <p><strong>Preço:</strong> ${suite.preco}</p>
            <p><strong>Disponibilidade:</strong> ${suite.disponibilidade}</p>
            <div class="detail-meta">
              ${suite.comodidades
                .map(
                  (item) => `<span><i class="fa-solid fa-check"></i> ${item}</span>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </article>

      <div class="detail-grid">
        <div class="gallery-container">
          <div class="owl-carousel owl-theme" id="suite-gallery">
            ${suite.galeria
              .map(
                (img) => `
                  <div class="item">
                    <img src="${img}" alt="${suite.nome}" />
                  </div>
                `
              )
              .join("")}
          </div>
        </div>

        <aside class="booking-panel">
          <h3>Reserve sua estadia</h3>
          <form id="reserva-form" class="reserva-form">
            <label>
              Entrada
              <input type="date" id="data-entrada" required />
            </label>
            <label>
              Saída
              <input type="date" id="data-saida" required />
            </label>
            <label>
              Hóspedes
              <select id="hospedes" required>
                <option value="">Selecione</option>
                <option value="1">1 hóspede</option>
                <option value="2">2 hóspedes</option>
                <option value="3">3 hóspedes</option>
                <option value="4">4 hóspedes</option>
              </select>
            </label>
            <button type="submit">Reservar agora</button>
            <button type="button" id="salvar-acomodacao" class="btn-secondary">Salvar acomodação</button>
          </form>
        </aside>
      </div>

      <section class="characteristics-box section-spacing">
        <h3>Detalhes da acomodação</h3>
        <p>${suite.descricaoDetalhada}</p>
        <ul class="characteristics-list">
          ${suite.caracteristicas
            .map(
              (item) => `
                <li>
                  <i class="fa-solid ${item.icon}"></i>
                  <span>${item.texto}</span>
                </li>
              `
            )
            .join("")}
        </ul>
      </section>

      <section class="suggestions-box section-spacing">
        <h3>Outras suítes que você pode gostar</h3>
        <div class="suggestions-list">
          ${suite.sugestoes
            .map(
              (sugestao) => `
                <a href="detalhes.html?id=${sugestao.id}" class="suggestion-card">
                  <img src="${sugestao.imagem}" alt="${sugestao.nome}" />
                  <div>
                    <strong>${sugestao.nome}</strong>
                    <span>Ver detalhes</span>
                  </div>
                </a>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="reviews-box section-spacing">
        <h3>Avaliações dos hóspedes</h3>
        <div class="reviews-list">
          ${suite.avaliacoes
            .map(
              (avaliacao) => `
                <div class="review-card">
                  <strong>${avaliacao.nome}</strong>
                  <div class="review-stars">${"★".repeat(avaliacao.nota)}${"☆".repeat(5 - avaliacao.nota)}</div>
                  <p>${avaliacao.texto}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    `;

    if (window.jQuery && $.fn.owlCarousel) {
      $("#suite-gallery").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
    }

    const reservaForm = document.getElementById("reserva-form");
    if (reservaForm) {
      reservaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const dataEntrada = document.getElementById("data-entrada").value;
        const dataSaida = document.getElementById("data-saida").value;
        const hospedes = Number(document.getElementById("hospedes").value);

        if (!dataEntrada || !dataSaida) {
          alert("Informe as datas de entrada e saída.");
          return;
        }

        if (!hospedes || hospedes < 1) {
          alert("Selecione a quantidade de hóspedes antes de continuar.");
          return;
        }

        localStorage.setItem(
          "ultimaReserva",
          JSON.stringify({
            suite: suite.nome,
            entrada: dataEntrada,
            saida: dataSaida,
            hospedes: hospedes
          })
        );

        window.location.href = "sucesso.html";
      });
    }

    const salvarBtn = document.getElementById("salvar-acomodacao");
    if (salvarBtn) {
      salvarBtn.addEventListener("click", function () {
        localStorage.setItem("suiteFavorita", suiteId);
        alert("Acomodação salva com sucesso!");
      });
    }
  }

  renderSuiteDetail();

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

    suite.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        return;
      }

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