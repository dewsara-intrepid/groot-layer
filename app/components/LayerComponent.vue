<template>
  <!-- <ClientOnly > -->
  <div style="border:4px solid rgba(230, 223, 37); border-radius: 20px;background-color: rgba(230, 223, 37,0.2); padding : 20px; margin-bottom: 10px;">
    <div>Layer App {{ '<LayerComponent />'}} :- Get Post Comments</div>
    <p>{{ dataStore.data?.[0] }}</p>
    <img src="@layer-one/public/img/image.png" alt="Discover Nuxt 3" width="60px" height="60px"/>
  </div>
  <!-- </ClientOnly> -->
</template>

<script setup lang="ts">
import { useDummyDataStore } from '~/stores/useDummyDataStore';

const dataStore = useDummyDataStore();

onMounted(async () => {
  //<!-- !This is to call the 3rd Party API through Apps server
  //dataStore.fetchData();

  //<!-- !This is to directly call the 3rd Party API
 await dataStore.fetchDataDirectly();
});

// console.log('data', data);
</script>
