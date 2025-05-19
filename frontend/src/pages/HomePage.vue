<template>
  <div class="home">
    <h1>Mapa Interativo do Campus</h1>
    <p>Bem-vindo! Navegue pelo campus com acessibilidade e praticidade.</p>
    <button @click="irParaMapa">Entrar no Mapa</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const irParaMapa = () => {
  console.log('Botão clicado!')
  router.push('/mapa')
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
  text-align: center;
}

button {
  margin-top: 2rem;
}
</style>
