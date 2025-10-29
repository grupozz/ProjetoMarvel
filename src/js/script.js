// --- LISTA DE FANTASIAS ---
const bannerItems = [
  {
    imagem: "./src/assets/fantasiaIron.png",
    titulo: "Fantasia do Homem de Ferro",
  },
  {
    imagem: "./src/assets/fantasiaMarvel.png",
    titulo: "Fantasia da Capitã Marvel",
  },
  {
    imagem: "./src/assets/fantasiaSpider.png",
    titulo: "Fantasia do Homem Aranha",
  }
];

// --- ELEMENTOS DOM ---
const tempo = 5000; // tempo de troca em milissegundos
const elementoBanner = document.querySelector("#banner");
const elementoTitulo = document.querySelector("#banner-titulo");
let i = 0;

// --- SLIDESHOW AUTOMÁTICO ---
function slideShow() {
  const item = bannerItems[i];
  elementoBanner.style.backgroundImage = `url(${item.imagem})`;
  elementoTitulo.textContent = item.titulo;
  i++;
  if (i >= bannerItems.length) i = 0;
  setTimeout(slideShow, tempo);
}
slideShow();