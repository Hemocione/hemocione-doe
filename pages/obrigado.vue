<template>
  <div class="obrigado-page">
    <header class="checkout-header">
      <NuxtLink to="/" class="back-link" aria-label="Voltar pro início">
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

    <main class="content">
      <div class="mascot-wrapper">
        <NuxtImg
          src="/images/logos/blood-brothers.png"
          class="mascot"
          alt="Selo Irmãos de Sangue"
        />
        <div class="sparkles" aria-hidden="true">
          <span v-for="i in 8" :key="i" class="sparkle" :style="sparkleStyle(i)" />
        </div>
      </div>

      <h1 class="heading">Muito obrigado!</h1>

      <p class="lead">
        Seu apoio ajuda o Hemocione a continuar fomentando a doação de sangue
        no Brasil. Você agora faz parte da nossa rede de <strong>irmãos de sangue</strong>.
      </p>

      <section class="app-cta">
        <div class="app-cta-glow" />
        <div class="app-cta-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        </div>
        <h2 class="app-cta-title">Leve o Hemocione no bolso</h2>
        <p class="app-cta-text">
          Encontre hemocentros, acompanhe campanhas e doe sangue com o app oficial.
        </p>
        <div class="store-buttons">
          <a
            href="https://apps.apple.com/br/app/hemocione/id6502384360"
            target="_blank"
            rel="noopener"
            class="store-link"
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
            class="store-link"
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
        <svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
        </svg>
        Compartilhar com amigos
      </button>
      <p v-if="shareFeedback" class="share-feedback">{{ shareFeedback }}</p>

      <NuxtLink to="/" class="back-home">
        Voltar para o início
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
      // usuário cancelou
    }
    return;
  }
  await navigator.clipboard.writeText(shareData.url);
  shareFeedback.value = "Link copiado!";
}

function sparkleStyle(i: number) {
  const angle = (i / 8) * 360;
  const distance = 70 + Math.random() * 40;
  const delay = Math.random() * 0.6;
  const size = 6 + Math.random() * 10;
  return {
    '--angle': `${angle}deg`,
    '--distance': `${distance}px`,
    '--delay': `${delay}s`,
    '--size': `${size}px`,
  };
}
</script>

<style scoped>
.obrigado-page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fefefe 0%, #f5f5f5 100%);
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

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 2.5rem 1.5rem 3.5rem;
  max-width: 30rem;
  margin: 0 auto;
}

.mascot-wrapper {
  position: relative;
  animation: mascot-bounce 0.7s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes mascot-bounce {
  0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
  60% { transform: scale(1.08) rotate(2deg); }
  100% { opacity: 1; transform: scale(1) rotate(0); }
}

.mascot {
  height: 130px;
  position: relative;
  z-index: 1;
}

.sparkles {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.sparkle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: var(--size);
  border-radius: 999px;
  background: var(--hemo-color-primary);
  opacity: 0;
  animation: sparkle-pop 1.2s var(--delay) ease-out both;
}

.sparkle:nth-child(odd) {
  background: #ffb800;
}

.sparkle:nth-child(3n) {
  background: var(--hemo-color-success);
}

@keyframes sparkle-pop {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(0);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(var(--distance) * -1)) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(var(--distance) * -2)) scale(0);
  }
}

.heading {
  font-family: var(--hemo-font-display);
  font-size: 2.2rem;
  font-weight: 900;
  margin: 0;
  color: var(--hemo-color-primary);
  animation: fade-up 0.5s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fade-up {
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
}

.lead {
  font-size: 1.05rem;
  color: #555;
  margin: 0;
  line-height: 1.5;
  animation: fade-up 0.5s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.lead strong {
  color: var(--hemo-color-primary);
  font-weight: 700;
}

.app-cta {
  margin-top: 1.5rem;
  padding: 1.75rem 1.5rem;
  background: white;
  border-radius: 1.25rem;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  width: 100%;
  position: relative;
  overflow: hidden;
  animation: fade-up 0.5s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.app-cta-glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 140%;
  height: 140%;
  background: radial-gradient(ellipse at center, rgba(187, 10, 8, 0.04), transparent 60%);
  pointer-events: none;
}

.app-cta-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 0.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--hemo-color-primary), var(--hemo-color-primary-dark));
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-cta-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.app-cta-title {
  margin: 0 0 0.35rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
}

.app-cta-text {
  margin: 0 0 1.1rem;
  font-size: 0.9rem;
  color: #888;
  line-height: 1.4;
}

.store-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.store-link {
  display: block;
  transition: transform 0.2s ease;
}

.store-link:hover {
  transform: translateY(-2px);
}

.store-badge {
  height: 44px;
}

.share-button {
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  min-height: 44px;
  border-radius: 999px;
  border: 2px solid var(--hemo-color-primary);
  background: transparent;
  color: var(--hemo-color-primary);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
  font-family: inherit;
  animation: fade-up 0.5s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.share-button:hover {
  background: var(--hemo-color-primary);
  color: white;
}

.share-button:active {
  transform: scale(0.96);
  transition: transform 0.1s ease;
}

.share-icon {
  width: 1.1rem;
  height: 1.1rem;
}

.share-feedback {
  font-size: 0.85rem;
  color: var(--hemo-color-success);
  margin: 0;
  animation: fade-up 0.3s ease both;
}

.back-home {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #aaa;
  font-weight: 500;
  transition: color 0.15s ease;
  animation: fade-up 0.5s 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.back-home:hover {
  color: var(--hemo-color-primary);
}
</style>
