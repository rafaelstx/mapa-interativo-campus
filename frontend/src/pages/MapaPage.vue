<template>
  <div class="mapa-container">
    <div id="mapa"></div>
  </div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'MapaPage',
  mounted() {
    const map = L.map('mapa').setView([-22.3959, -47.5565], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([-22.3959, -47.5565])
      .addTo(map)
      .bindPopup('Você está aqui!')
      .openPopup();
  },
};
</script>

<style scoped>
.mapa-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  z-index: 0;
}

#mapa {
  width: 100%;
  height: 100%;
}
</style>
