<template>
  <header>Code Coaching</header>

  <router-view />

  <footer>
    <a href="mailto:info@code-coaching.dev">info@code-coaching.dev</a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('PrimaryLayout setup wordt uitgevoerd!');
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color: $primary;
  position: sticky;
  top: 0;
  padding: 1em;
  font-size: 1.5em;
  color: white;
}

footer {
  background-color: $secondary;
  position: fixed;
  bottom: 0;
  padding: 1em;
  width: 100%;
}

footer a {
  text-decoration: none;
  color: white;
}
</style>
