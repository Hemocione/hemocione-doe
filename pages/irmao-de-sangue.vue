<template>
  <div class="my-page">
    <header class="checkout-header">
      <NuxtLink to="/" class="back-link" aria-label="Voltar">
        <ElIcon class="icon">
          <ElIconArrowLeftBold />
        </ElIcon>
      </NuxtLink>
      <NuxtImg
        src="/images/logos/logo-horizontal-branca.svg"
        class="logo-hemo"
        alt="Hemocione"
      />
      <span class="header-spacer" />
    </header>

    <main class="content">
      <div class="drop-icon">💧</div>
      <h1>Você está doando R$ {{ displayValue }}<span>/mês</span></h1>
      <p class="lead">
        Você será redirecionado para o <strong>Doare</strong>, nosso parceiro
        de pagamentos, num ambiente seguro e certificado. Depois de confirmar,
        você volta a fazer parte da nossa rede de irmãos de sangue.
      </p>

      <a :href="doareUrl" class="continue-button" @click="markManualClick">
        Continuar para o pagamento seguro
        <span aria-hidden="true">→</span>
      </a>

      <p class="auto-redirect" v-if="!manualClick">
        Redirecionando automaticamente em {{ countdown }}s…
      </p>

      <p class="trust-line">🔒 Pagamento processado pela Doare • PIX, cartão e boleto</p>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const query = route.query;
const { subscribe, value } = query;
const subscribeParam = subscribe ?? 1;
const rawValue = Array.isArray(value) ? value[0] : value ?? "9.90";

const displayValue = computed(() =>
  Number(rawValue).toFixed(2).replace(".", ",")
);

const doareUrl = `https://paybox.doare.org/paybox?lang=br&currency=BRL&orgId=0cbc0564-91b2-45e1-9859-a3b52bdaa683&values=9.90,29.90,49.90,99.90,500,1000&amount=${rawValue}&subscribe=${subscribeParam}&newsletter=0&subscriptionAmount=30&showSubscription=${subscribeParam}`;

const countdown = ref(4);
const manualClick = ref(false);
let timer: ReturnType<typeof setInterval> | undefined;

function markManualClick() {
  manualClick.value = true;
}

onMounted(() => {
  timer = setInterval(() => {
    countdown.value -= 1;
    if (countdown.value <= 0) {
      clearInterval(timer);
      window.location.href = doareUrl;
    }
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.icon {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.checkout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--hemo-color-primary);
  width: 100%;
  box-sizing: border-box;
  height: 56px;
  padding: 0 1rem;
  flex-shrink: 0;
}

.back-link {
  display: flex;
  align-items: center;
}

.header-spacer {
  width: 1.5rem;
}

.logo-hemo {
  height: 24px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 2rem 1.5rem;
  max-width: 34rem;
  margin: 0 auto;
}

.drop-icon {
  font-size: 3rem;
  line-height: 1;
}

h1 {
  font-size: 1.9rem;
  margin: 0;
  color: var(--hemo-color-primary);
}

h1 span {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--hemo-color-text-secondary);
}

.lead {
  font-size: 1.05rem;
  color: var(--hemo-color-text-secondary);
  margin: 0;
}

.continue-button {
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  min-height: 44px;
  border-radius: 999px;
  background: var(--hemo-color-primary);
  color: white;
  font-weight: 700;
  font-size: 1.05rem;
  box-shadow: 0 8px 24px rgba(187, 10, 8, 0.35);
  transition: transform 0.2s ease, background 0.2s ease;
}

.continue-button:hover {
  background: var(--hemo-color-primary-dark);
  transform: translateY(-2px);
}

.auto-redirect {
  font-size: 0.85rem;
  color: var(--hemo-color-text-secondary-opaque);
  margin: 0;
}

.trust-line {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: var(--hemo-color-text-secondary);
}

.my-page {
  margin: 0;
  width: 100%;
  min-height: 100svh;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
