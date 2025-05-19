<template>
  <div id="map" style="height: 100vh;"></div>
</template>

<script setup>
import L from 'leaflet'
import axios from 'axios'
import { onMounted } from 'vue'

onMounted(async () => {
  const map = L.map('map').setView([-22.3941, -47.5572], 17)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  const { data } = await axios.get('http://localhost:3000/locais')

  data.forEach(local => {
    const marker = L.marker([local.latitude, local.longitude])
      .addTo(map)
      .bindPopup(`<b>${local.nome}</b><br/>${local.categoria}`)
  })
})
</script>
