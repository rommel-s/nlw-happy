const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([-3.7741093, -38.5532499], 15);

// create tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// L.marker([-3.7741093, -38.5532499], { icon: icon }).addTo(map);

// create and add marker
L.marker([-3.7741093, -38.5532499], { icon: icon }).addTo(map);

// image gallery

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o conteiner de imagem
  imageContainer.src = image.src;

  // adicionar a classe .active novamente
  button.classList.add("active");
}
