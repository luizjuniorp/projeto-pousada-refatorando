# Pousada Encanto da Serra

Uma landing page moderna para uma pousada em ambiente natural, com foco em reservas de suítes, apresentação de acomodações e experiência visual atrativa para clientes em busca de descanso e tranquilidade.

## Sobre o projeto

Este projeto simula um site institucional e de reservas de uma pousada localizada em meio à natureza. A experiência foi construída com HTML, CSS e JavaScript puro, com destaque para:

- apresentação visual da pousada;
- formulário de reserva na página inicial;
- catálogo de suítes com informações e preços;
- página de detalhes por suíte;
- carregamento dinâmico de conteúdo via JavaScript;
- feedback visual de formulário e confirmação de reserva;
- salvamento temporário de dados no `localStorage`.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome
- Google Fonts

## Funcionalidades

### Página inicial
A página principal apresenta:

- banner de destaque com chamada para reserva;
- formulário de contato/solicitação de vaga;
- lista de suítes disponíveis;
- depoimentos de hóspedes;
- seções de apresentação da pousada e localização;
- botão de chamada para ação (CTA).

### Página de detalhes da suíte
Ao clicar em "Ver detalhes" em uma suíte, o usuário é levado para `detalhes.html?id=...`, onde são exibidos:

- imagem principal da acomodação;
- descrição completa;
- preço e disponibilidade;
- comodidades;
- galeria de fotos;
- formulário de reserva com entrada, saída e quantidade de hóspedes;
- outras suítes sugeridas;
- avaliações dos hóspedes.

### Fluxo de reserva
O processo de reserva funciona em etapas:

1. o cliente preenche o formulário inicial na home;
2. o sistema valida os dados e mostra feedback visual;
3. na página de detalhes, o usuário escolhe datas e número de hóspedes;
4. ao confirmar, a reserva é armazenada no `localStorage`;
5. a página `sucesso.html` exibe um resumo da reserva confirmada.

### Interatividade
O JavaScript também inclui:

- validação de campos em formulários;
- navegação dinâmica por suítes;
- modal com informações rápidas ao clicar em uma acomodação;
- carrossel de imagens na página de detalhes;
- atualização automática dos depoimentos em sequência.

## Estrutura do projeto

```text
projeto-pousada-refatorando/
├── css/
│   └── styles.css
├── img/
│   ├── banner1.jpg
│   ├── banner2.jpg
│   ├── banner3.jpg
│   ├── detail-1.jpg
│   ├── detail-2.jpg
│   ├── detail-3.jpg
│   ├── hospede1.jpg
│   ├── hospede2.jpg
│   ├── hospede3.jpg
│   ├── suite-simples.jpg
│   ├── suite-luxo.jpg
│   └── suite-presidencial.avif
├── js/
│   └── script.js
├── detalhes.html
├── index.html
├── sucesso.html
├── README.md
└── .vscode/
    └── settings.json
```

## Como executar

Como o projeto é estático, você pode abrir o arquivo `index.html` diretamente no navegador.


## Observações

- Este é um front-end estático, sem backend real de banco de dados.
- As reservas são simuladas e gravadas no navegador via `localStorage`.
- O projeto foi pensado para demonstrar layout, frontend e interação sem dependências de build complexas.

## Objetivo do projeto

O objetivo principal é apresentar uma pousada de forma elegante e funcional, inspirada em uma experiência de turismo e relaxamento em ambiente serrano, demonstrando uso de design responsivo, conteúdo dinâmico e UX de reserva moderna.

## Autor

Projeto desenvolvido como estudo de front-end para apresentação visual e interativa de uma pousada.
