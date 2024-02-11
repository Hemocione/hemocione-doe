<template>
  <div class="my-page">
    <div class="top-bar-hider">
      <ElIcon class="icon" @click="goBack">
        <ElIconArrowLeftBold />
      </ElIcon>
      <NuxtImg src="/images/logos/logo-horizontal-branca.svg" class="logo" />
    </div>
    <iframe class="doare" :src="doareUrl" fullscreen frameborder="0" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const goBack = () => {
  router.back();
};

const query = route.query;
const value = query.value;

const doareUrl = `https://paybox.doare.org/paybox?lang=br&currency=BRL&orgId=0cbc0564-91b2-45e1-9859-a3b52bdaa683&values=9.90,29.90,49.90,99.90,500,1000&amount=${
  value ?? "9.90"
}&subscribe=1&newsletter=0&subscriptionAmount=30&showSubscription=1`;
</script>

<style scoped>
.icon {
  color: var(--hemo-color-secondary);
  font-size: 2rem;

  cursor: pointer;
}
.top-bar-hider {
  position: absolute;
  top: 0;
  left: 0;
  height: 90px;
  width: 100%;
  background-color: var(--hemo-color-primary);
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
}
.doare {
  width: 100%;
  height: 100svh;
  border: none;
  overflow-x: hidden;
}

.logo {
  height: 80%;
  max-width: 80%;
}

.my-page {
  margin: 0;
  width: 100%;
  height: 100svh;
  position: relative;
  overflow: hidden;
}
</style>
