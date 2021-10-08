<template>
  <h1>De pagina Second.vue werkt!</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('Second.vue: Dit wordt in de console getoond!');
  },
});
</script>
