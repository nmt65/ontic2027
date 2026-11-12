import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

document.querySelectorAll<HTMLElement>('[data-ontic-map]').forEach((container) => {
  if (container.dataset.mapReady) return;
  container.dataset.mapReady = 'true';
  const lat = Number(container.dataset.lat) || 47.646;
  const lon = Number(container.dataset.lon) || 26.261;
  const map = L.map(container, { scrollWheelZoom: false, keyboard: true }).setView([lat, lon], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);
  const markerIcon = L.divIcon({ className: 'ontic-map-pin', html: '<span aria-hidden="true"></span>', iconSize: [24, 24], iconAnchor: [12, 12] });
  L.marker([lat, lon], { icon: markerIcon }).addTo(map).bindPopup('Colegiul Național „Ștefan cel Mare” Suceava · poziție orientativă');
});
