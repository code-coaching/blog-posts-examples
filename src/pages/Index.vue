<template>
  <q-page class="flex flex-center">
    <q-btn-dropdown
      color="primary"
      v-if="selectedTheme"
      :label="selectedTheme.name"
    >
      <q-list>
        <q-item
          v-for="(theme, index) in themes"
          :key="index"
          clickable
          v-close-popup
          @click="applyTheme(theme)"
        >
          <q-item-section>
            <q-item-label>{{ theme.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar, setCssVar } from "quasar";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const $q = useQuasar();

    const themes = [
      {
        isDark: false,
        name: "Quasar",

        primary: "#1976d2",
        secondary: "#26a69a",
        accent: "#9c27b0",

        positive: "#21ba45",
        negative: "#c10015",
        info: "#31ccec",
        warning: "#f2c037",

        background: "#fff",
      },
      {
        isDark: true,
        name: "Quasar Dark",

        primary: "#6d6d6d",
        secondary: "#5d5d5d",
        accent: "#4d4d4d",

        positive: "#20615b",
        negative: "#a21232",
        info: "#3e35a8",
        warning: "#c1a54d",

        background: "#2c2c2c",
      },
      {
        isDark: true,
        name: "Synthwave",

        primary: "#ff7edb",
        secondary: "#b893ce8f",
        accent: "#9c27b0",

        positive: "#20615b",
        negative: "#a21232",
        info: "#3e35a8",
        warning: "#c1a54d",

        background: "#262335",
      },
    ];

    const selectedTheme = ref();

    const applyTheme = (theme) => {
      $q.dark.set(theme.isDark);

      Object.keys(theme).forEach((key) => setCssVar(key, theme[key]));

      setCssVar("dark", theme["background"]);
      setCssVar("dark-page", theme["background"]);

      selectedTheme.value = theme;
    };

    applyTheme(themes[0]);

    return {
      themes,
      selectedTheme,
      applyTheme,
    };
  },
});
</script>
