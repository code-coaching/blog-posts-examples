<template>
  <h1>De pagina First.vue werkt!</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('First.vue: Dit wordt in de console getoond!');
  },
});
</script>
