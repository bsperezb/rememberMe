<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <navbar/>  
    </header>
    <main :style="{marginTop: heightNavbar}" class="flex-grow flex flex-col items-center">
      <!-- <home/> -->
      <router-view></router-view> 
    </main>
    <footer-component/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { initFlowbite } from 'flowbite'
// Modules
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'
// import Home from './pages/Home/components/HomeBanner.vue'

const heightNavbar:Ref = ref('69px')
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style scoped>
</style>
