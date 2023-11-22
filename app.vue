<template>
  <div class="app-do-pai">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Hemocione | Irmãos de Sangue",
});

useServerSeoMeta({
  title: "Hemocione | Irmãos de Sangue",
  description: "Seja um irmão de sangue e ajude a salvar vidas",
  ogDescription: "Seja um irmão de sangue e ajude a salvar vidas",
  ogTitle: "Hemocione | Irmãos de Sangue",
  ogImage: "https://apoie.hemocione.com.br/images/logos/blood-brothers.png",
  twitterTitle: "Hemocione | Irmãos de Sangue",
  twitterDescription: "Seja um irmão de sangue e ajude a salvar vidas",
  twitterCard: "summary_large_image",
  twitterSite: "@hemocione",
  twitterCreator: "@hemocione",
  twitterUrl: "https://apoie.hemocione.com.br",
  twitterImage:
    "https://apoie.hemocione.com.br/images/logos/blood-brothers.png",
  ogUrl: "https://apoie.hemocione.com.br",
  ogType: "website",
  ogSiteName: "Hemocione | Irmãos de Sangue",
  image: "https://apoie.hemocione.com.br/images/logos/blood-brothers.png",
  url: "https://apoie.hemocione.com.br",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
});
</script>

<style scoped>
.app-do-pai {
  background-color: var(--hemo-color-secondary);
  min-height: 100dvh;
  width: 100%;
}
</style>
