// create map
const map = L.map("mapid").setView([-3.7741093, -38.5532499], 15);

// create tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanages.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg /> </a>'
);

// L.marker([-3.7741093, -38.5532499], { icon: icon }).addTo(map);

// create and add marker
L.marker([-3.7741093, -38.5532499], { icon: icon }).addTo(map).bindPopup(popup);
