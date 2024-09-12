<template>
  <div class="my-page">
    <div class="top-bar-hider">
      <div class="navigation" to="/">
        <NuxtLink to="/">
          <ElIcon class="icon">
            <ElIconArrowLeftBold />
          </ElIcon>
        </NuxtLink>
        <NuxtImg
          src="/images/logos/logo-horizontal-branca.svg"
          class="logo-hemo"
        />
        <NuxtImg
          src="/images/logos/blood-brothers.png"
          class="logo-blood-brothers"
        />
      </div>
      <div class="opacity-gradient"></div>
    </div>
    <iframe class="doare" :src="doareUrl" fullscreen frameborder="0" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const query = route.query;
const { subscribe, value } = query;
const subscribeParam = subscribe ?? 1;

const doareUrl = `https://paybox.doare.org/paybox?lang=br&currency=BRL&orgId=0cbc0564-91b2-45e1-9859-a3b52bdaa683&values=9.90,29.90,49.90,99.90,500,1000&amount=${
  value ?? "9.90"
}&subscribe=${subscribeParam}&newsletter=0&subscriptionAmount=30&showSubscription=${subscribeParam}`;
</script>

<style scoped>
.icon {
  color: var(--hemo-color-secondary);
  font-size: 2rem;

  cursor: pointer;
}
.top-bar-hider {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 90px;
  width: 100%;
  z-index: 99999;
}

.navigation {
  background-color: var(--hemo-color-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  box-sizing: border-box;
  height: 80px;
  padding: 0 1rem;
}

.opacity-gradient {
  width: 100%;
  height: 10px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.doare {
  width: 100%;
  height: 100svh;
  border: none;
  overflow-x: hidden;
  z-index: 0;
}

.logo-hemo {
  height: 20%;
}

.logo-blood-brothers {
  height: 70%;
}

.my-page {
  margin: 0;
  width: 100%;
  height: 100svh;
  position: relative;
  overflow: hidden;
}
</style>
