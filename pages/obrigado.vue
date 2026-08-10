<template>
  <div class="page obrigado-page">
    <header class="checkout-header">
      <NuxtLink to="/" class="back-link" aria-label="Voltar pro início">
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
      <NuxtImg
        src="/images/logos/blood-brothers.png"
        class="mascot"
        alt="Selo Irmãos de Sangue"
      />
      <h1>Muito obrigado! 💛</h1>
      <p class="lead">
        Seu apoio ajuda o Hemocione a continuar fomentando a doação de sangue
        no Brasil. Você agora faz parte da nossa rede de irmãos de sangue.
      </p>

      <section class="app-cta">
        <h2>Baixe o app Hemocione</h2>
        <p>
          Acompanhe campanhas, encontre hemocentros perto de você e doe
          sangue com facilidade.
        </p>
        <div class="store-buttons">
          <a
            href="https://apps.apple.com/br/app/hemocione/id6502384360"
            target="_blank"
            rel="noopener"
          >
            <NuxtImg
              src="/images/stores/app-store-badge.svg"
              alt="Baixar na App Store"
              class="store-badge"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=br.com.hemocione.app"
            target="_blank"
            rel="noopener"
          >
            <NuxtImg
              src="/images/stores/google-play-badge.png"
              alt="Disponível no Google Play"
              class="store-badge"
            />
          </a>
        </div>
      </section>

      <button class="share-button" @click="share">
        Compartilhar com amigos
      </button>
      <p v-if="shareFeedback" class="share-feedback">{{ shareFeedback }}</p>

      <NuxtLink to="/" class="back-home">
        Voltar para apoie.hemocione.com.br
      </NuxtLink>
    </main>
  </div>
</template>

<script setup lang="ts">
const shareFeedback = ref("");

async function share() {
  const shareData = {
    title: "Hemocione",
    text: "Acabei de ajudar o Hemocione a salvar mais vidas. Você também pode ser um irmão de sangue!",
    url: "https://apoie.hemocione.com.br",
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      // usuário cancelou o share nativo — não é um erro a reportar
    }
    return;
  }
  await navigator.clipboard.writeText(shareData.url);
  shareFeedback.value = "Link copiado!";
}
</script>

<style scoped>
.checkout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--hemo-color-primary);
  width: 100%;
  box-sizing: border-box;
  height: 56px;
  padding: 0 1rem;
}

.icon {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.header-spacer {
  width: 1.5rem;
}

.logo-hemo {
  height: 24px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 2.5rem 1.5rem 3rem;
  max-width: 40rem;
  margin: 0 auto;
}

.mascot {
  height: 140px;
}

h1 {
  font-family: var(--hemo-font-display);
  font-size: 2rem;
  margin: 0;
  color: var(--hemo-color-primary);
}

.lead {
  font-size: 1.05rem;
  color: var(--hemo-color-text-secondary);
  margin: 0;
}

.app-cta {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
}

.app-cta h2 {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  color: var(--hemo-color-primary);
}

.app-cta p {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  color: var(--hemo-color-text-secondary);
}

.store-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.store-badge {
  height: 44px;
}

.share-button {
  margin-top: 0.5rem;
  padding: 0.75rem 1.5rem;
  min-height: 44px;
  border-radius: 999px;
  border: 2px solid var(--hemo-color-primary);
  background: transparent;
  color: var(--hemo-color-primary);
  font-weight: 700;
  cursor: pointer;
}

.share-button:hover {
  background: var(--hemo-color-primary);
  color: white;
}

.share-feedback {
  font-size: 0.85rem;
  color: var(--hemo-color-success);
  margin: 0;
}

.back-home {
  margin-top: 1rem;
  font-size: 0.9rem;
  text-decoration: underline;
  color: var(--hemo-color-text-secondary);
}
</style>
