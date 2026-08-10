<template>
  <div class="checkout-page">
    <header class="checkout-header">
      <NuxtLink to="/" class="back-link" aria-label="Voltar">
        <svg class="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </NuxtLink>
      <NuxtImg
        src="/images/logos/logo-horizontal-branca.svg"
        class="logo-hemo"
        alt="Hemocione"
      />
      <span class="header-spacer" />
    </header>

    <main class="checkout-content">
      <div class="donation-icon">
        <DropIcon class="drop-icon" />
      </div>

      <h1 class="donation-heading">
        Você está doando <strong>R$ {{ displayValue }}</strong><span class="per-month">/mês</span>
      </h1>

      <p class="donation-description">
        Você será redirecionado para o <strong>Doare</strong>, nosso parceiro
        de pagamentos, num ambiente seguro e certificado.
      </p>

      <div class="security-badges">
        <span class="badge">
          <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Pagamento seguro
        </span>
        <span class="badge">
          <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          Dados criptografados
        </span>
      </div>

      <a :href="doareUrl" class="continue-button" @click="markManualClick">
        Continuar para o pagamento seguro
        <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>

      <p class="auto-redirect" v-if="!manualClick">
        Redirecionando automaticamente em {{ countdown }}s...
      </p>

      <p class="payment-methods">PIX • Cartão de crédito • Boleto</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import DropIcon from "~/components/DropIcon.vue";

const route = useRoute();

const { subscribe, value } = route.query;
const subscribeParam = subscribe ?? 1;
const rawValue = Array.isArray(value) ? value[0] : value ?? "9.90";

const displayValue = computed(() =>
  Number(rawValue).toFixed(2).replace(".", ",")
);

const doareUrl = `https://paybox.doare.org/paybox?lang=br&currency=BRL&orgId=0cbc0564-91b2-45e1-9859-a3b52bdaa683&values=9.90,29.90,49.90,99.90,500,1000&amount=${rawValue}&subscribe=${subscribeParam}&newsletter=0&redirectUrl=${encodeURIComponent('https://apoie.hemocione.com.br/obrigado')}&subscriptionAmount=30&showSubscription=${subscribeParam}`;

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
      window.location.assign(doareUrl);
    }
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.checkout-page {
  margin: 0;
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: #fff;
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
  padding: 0.25rem;
  margin: -0.25rem;
  border-radius: 0.5rem;
  transition: background 0.15s ease;
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.15);
}

.back-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.header-spacer {
  width: 1.5rem;
}

.logo-hemo {
  height: 24px;
}

.checkout-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 2.5rem 1.5rem;
  max-width: 30rem;
  margin: 0 auto;
}

.donation-icon {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff6262, var(--hemo-color-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 28px rgba(187, 10, 8, 0.3);
  animation: icon-pop 0.5s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes icon-pop {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}

.drop-icon {
  width: 1.5rem;
  height: 2.3rem;
  color: white;
}

.donation-heading {
  font-size: 1.65rem;
  font-weight: 400;
  margin: 0;
  color: #1a1a1a;
  line-height: 1.3;
  animation: fade-up 0.5s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.donation-heading strong {
  font-family: var(--hemo-font-display);
  font-weight: 900;
  color: var(--hemo-color-primary);
}

@keyframes fade-up {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.per-month {
  font-size: 1rem;
  font-weight: 400;
  color: #999;
}

.donation-description {
  font-size: 1rem;
  color: #666;
  margin: 0;
  max-width: 26rem;
  line-height: 1.5;
  animation: fade-up 0.5s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.security-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: fade-up 0.5s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: #888;
  font-weight: 500;
}

.badge-icon {
  width: 1rem;
  height: 1rem;
}

.continue-button {
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  min-height: 48px;
  border-radius: 999px;
  background: var(--hemo-color-primary);
  color: white;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 8px 28px rgba(187, 10, 8, 0.35);
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.2s ease,
    box-shadow 0.25s ease;
  animation: fade-up 0.5s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.continue-button:hover {
  background: var(--hemo-color-primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(187, 10, 8, 0.45);
}

.continue-button:active {
  transform: scale(0.96);
  transition: transform 0.1s ease;
}

.btn-arrow {
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.2s ease;
}

.continue-button:hover .btn-arrow {
  transform: translateX(3px);
}

.auto-redirect {
  font-size: 0.85rem;
  color: #bbb;
  margin: 0;
  animation: fade-up 0.5s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.payment-methods {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #bbb;
  letter-spacing: 0.06em;
  font-weight: 500;
  animation: fade-up 0.5s 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}
</style>
