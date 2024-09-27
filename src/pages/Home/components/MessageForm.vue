<template>
  <div
    class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <div v-html="iconWhatsapp"></div>
        Programa tu Mensaje de Recordatorio
      </h1>
      <form class="space-y-4 md:space-y-6" action="#">
        <div>
          <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de
            telefono</label>
          <input type="text" name="phoneNumber" id="phoneNumber"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="300..." required="true" />
        </div>
        <div>
          <label for="dateToSend" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
          <input type="date" name="dateToSend" id="dateToSend"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required="true" />
        </div>
        <div>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
          <textarea id="message" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Recuerdame que mañana tengo cita medica"></textarea>
        </div>
        <button type="submit"
          class="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Create an account
        </button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?
          <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
        </p>
      </form>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'
// import { loadIcon } from '../../../icons/index';
import { loadIcon } from '@/icons/index';

const iconWhatsapp: Ref = ref('')

onMounted(async () => {
  try {
    const loadedIcon = await loadIcon('whatsapp')
    iconWhatsapp.value = loadedIcon
  } catch (error) {
    console.error('error Loading Icons: ', error)

  }
})
</script>

<style scoped></style>