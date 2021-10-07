<template>
  <div id="page404">
    <div id="content-wrapper">
      <h1>404</h1>
      <div id="sub-text">Pagina niet gevonden!</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error404',
});
</script>

<style lang="scss" scoped>
#page404 {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: deeppink;
  color: white;
}

#content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#sub-text {
  font-size: 3em;
}
</style>
