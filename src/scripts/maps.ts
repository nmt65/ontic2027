import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const landmarks = [
  { position: [47.646, 26.261] as L.LatLngExpression, label: 'CNSCM Suceava · gazda ONTI 2027' },
  { position: [47.640699, 26.27243] as L.LatLngExpression, label: 'Cetatea de Scaun a Sucevei' },
];

document.querySelectorAll<HTMLElement>('[data-ontic-map]').forEach((container) => {
  if (container.dataset.mapReady) return;
  container.dataset.mapReady = 'true';
  const cityMap = container.dataset.onticMap === 'city';
  const map = L.map(container, { scrollWheelZoom: false, keyboard: true }).setView(cityMap ? [47.644, 26.267] : [47.646, 26.261], cityMap ? 14 : 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);
  const markerIcon = L.divIcon({ className: 'ontic-map-pin', html: '<span aria-hidden="true"></span>', iconSize: [24, 24], iconAnchor: [12, 12] });
  (cityMap ? landmarks : landmarks.slice(0, 1)).forEach((landmark) => L.marker(landmark.position, { icon: markerIcon }).addTo(map).bindPopup(landmark.label));
});
