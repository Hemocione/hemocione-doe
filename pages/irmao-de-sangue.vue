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
    <p class="reassurance">🔒 Pagamento seguro processado por Doare</p>
    <iframe
      class="doare"
      :src="doareUrl"
      fullscreen
      frameborder="0"
      title="Formulário de doação Doare"
    />
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

// Best-effort: a Doare pode ou não emitir postMessage no sucesso do pagamento.
// Isso não foi verificado (não é seguro simular um pagamento real pra testar).
// Se a Doare emitir algo reconhecível como sucesso, redirecionamos pro /obrigado.
// Se nunca disparar, o comportamento atual (usuário fica na tela da Doare
// até fechar/voltar manualmente) é preservado — nenhuma regressão.
function handleDoareMessage(event: MessageEvent) {
  if (event.origin !== "https://paybox.doare.org") return;
  const payload = event.data;
  const text =
    typeof payload === "string" ? payload : JSON.stringify(payload ?? "");
  if (/success|sucesso|paid|pago|completed/i.test(text)) {
    router.push("/obrigado");
  }
}

onMounted(() => window.addEventListener("message", handleDoareMessage));
onUnmounted(() => window.removeEventListener("message", handleDoareMessage));
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

.reassurance {
  margin: 0;
  text-align: center;
  font-size: 0.8rem;
  color: var(--hemo-color-text-secondary);
  background: var(--hemo-color-secondary);
  padding: 0.4rem 0;
  flex-shrink: 0;
}

.doare {
  width: 100%;
  flex: 1;
  border: none;
  overflow-x: hidden;
}

.my-page {
  margin: 0;
  width: 100%;
  height: 100svh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
