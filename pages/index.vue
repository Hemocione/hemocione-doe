<template>
  <div class="page">
    <section class="hero">
      <NuxtImg
        src="/images/hero-doadores.png"
        fit="cover"
        class="hero-photo"
        alt="Dois doadores sorrindo de camiseta vermelha do Hemocione"
      />
      <div class="hero-content">
        <span class="logo-badge" ref="logoBadgeRef">
          <NuxtImg src="/images/logos/logo-padrao.svg" class="hero-logo" />
        </span>
        <h1 class="hero-title">Doe Sangue, Doe Vida</h1>
        <p class="hero-text">
          Vire um irmão de sangue: sua doação mensal mantém o Hemocione
          salvando vidas todos os dias.
        </p>
        <button class="hero-scroll" @click="scrollToCTA" aria-label="Quero doar">
          Quero doar
          <svg class="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 13l5 5 5-5M12 6v12" />
          </svg>
        </button>
      </div>
    </section>

    <section class="impact-section">
      <div class="impact-strip">
        <div class="impact-item" v-for="stat in impactStats" :key="stat.label">
          <span class="impact-value">{{ stat.value }}</span>
          <span class="impact-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <section class="donor-CTA" ref="donorCTARef">
      <div class="cta-backdrop" />
      <NuxtImg
        src="/images/logos/blood-brothers.png"
        class="logo-blood-brothers"
        alt="Selo Irmãos de Sangue"
      />
      <div class="offers-wrapper">
        <span class="offers-title">Quero ajudar mensalmente com...</span>
        <div class="offers">
          <NuxtLink
            v-for="offer in offers"
            :to="`/irmao-de-sangue?value=${offer.value}`"
            :key="offer.title"
            class="offer-link"
          >
            <PricingCard
              :logo="offer.logo"
              :name="offer.title"
              :cost="`R$ ${offer.value}`"
              :per-day="offer.perDay"
              :recommended="offer.recommended"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PricingCard from "~/components/PricingCard.vue";

const donorCTARef = ref<HTMLElement | null>(null);

function scrollToCTA() {
  donorCTARef.value?.scrollIntoView({ behavior: "smooth" });
}

const impactStats = [
  { value: "230", label: "eventos realizados" },
  { value: "+10 mil", label: "bolsas de sangue coletadas" },
  { value: "+40 mil", label: "vidas salvas" },
];

const offers = [
  {
    title: "Plano Gotinha",
    value: "9.90",
    logo: "/images/logos/planos/gotinha.png",
    perDay: "≈ R$ 0,33 por dia",
    recommended: false,
  },
  {
    title: "Plano Hemácia",
    value: "29.90",
    logo: "/images/logos/planos/hemacia.png",
    perDay: "≈ R$ 1,00 por dia",
    recommended: false,
  },
  {
    title: "Plano Gota",
    value: "49.90",
    logo: "/images/logos/planos/gota.png",
    perDay: "≈ R$ 1,66 por dia",
    recommended: true,
  },
  {
    title: "Plano Bolsa",
    value: "99.90",
    logo: "/images/logos/planos/bolsa.png",
    perDay: "≈ R$ 3,33 por dia",
    recommended: false,
  },
];
</script>

<style scoped>
.hero {
  position: relative;
  height: 65svh;
  min-height: 420px;
  width: 100%;
  overflow: hidden;
}

.hero-photo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center 20%;
  animation: hero-drift 12s ease-in-out infinite alternate;
}

@keyframes hero-drift {
  0% { transform: scale(1); }
  100% { transform: scale(1.06); }
}

.hero-content {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 1.5rem;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(187, 10, 8, 0.05) 0%,
    rgba(187, 10, 8, 0.25) 40%,
    rgba(120, 0, 0, 0.92) 100%
  );
  color: white;
}

.logo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 999px;
  padding: 0.7rem 1.5rem;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset;
  animation: logo-pop 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes logo-pop {
  0% { opacity: 0; transform: translateY(12px) scale(0.92); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.hero-logo {
  width: 8rem;
  max-width: 50vw;
  display: block;
}

.hero-title {
  font-family: var(--hemo-font-display);
  font-size: clamp(2rem, 5.5vw, 3rem);
  font-weight: 900;
  margin: 0;
  max-width: 90%;
  color: white;
  line-height: 1.1;
  animation: text-rise 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes text-rise {
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}

.hero-text {
  font-size: 1.05rem;
  font-weight: 400;
  max-width: 34rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  animation: text-rise 0.7s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-scroll {
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.6rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  animation: text-rise 0.7s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  font-family: inherit;
}

.hero-scroll:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: translateY(-2px);
}

.hero-scroll:active {
  transform: scale(0.96);
  transition: transform 0.1s ease;
}

.scroll-arrow {
  width: 18px;
  height: 18px;
  animation: bounce-arrow 1.5s ease-in-out infinite;
}

@keyframes bounce-arrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

.impact-section {
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 2.5rem 1rem;
}

.impact-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 1.5rem 2rem;
  border-radius: 1.25rem;
  background: linear-gradient(
    135deg,
    var(--hemo-color-primary-dark) 0%,
    var(--hemo-color-primary) 100%
  );
  box-shadow: 0 10px 35px rgba(187, 10, 8, 0.3);
  width: 100%;
  max-width: 36rem;
}

.impact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}

.impact-value {
  font-family: var(--hemo-font-display);
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 900;
  color: white;
  line-height: 1;
}

.impact-label {
  font-size: clamp(0.6rem, 1.4vw, 0.75rem);
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 500;
  text-align: center;
}

.donor-CTA {
  background-color: var(--hemo-color-primary);
  min-height: 50svh;
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  overflow: hidden;
}

.cta-backdrop {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(255, 255, 255, 0.06), transparent 60%),
              radial-gradient(ellipse at 70% 30%, rgba(0, 0, 0, 0.15), transparent 50%);
  pointer-events: none;
}

.logo-blood-brothers {
  height: auto;
  max-height: 12rem;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.35));
  flex-shrink: 0;
  animation: float-seal 4s ease-in-out infinite;
}

@keyframes float-seal {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.offers-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  color: white;
  width: 100%;
  max-width: 38rem;
}

.offers-title {
  font-family: var(--hemo-font-display);
  font-size: clamp(1.4rem, 3.5vw, 2rem);
  font-weight: 900;
  text-align: center;
  line-height: 1.2;
}

.offers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  width: 100%;
}

.offer-link {
  width: 100%;
  display: block;
}

@media screen and (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 55svh;
  }

  .hero-content {
    padding: 2rem 1rem;
  }

  .hero-logo {
    width: 7rem;
  }

  .hero-scroll {
    padding: 0.6rem 1.4rem;
    font-size: 0.9rem;
  }

  .impact-section {
    padding: 1.75rem 0.75rem;
  }

  .impact-strip {
    gap: 1rem;
    padding: 1.25rem 1rem;
    border-radius: 1rem;
  }

  .impact-value {
    font-size: 1.25rem;
  }

  .impact-label {
    font-size: 0.6rem;
    letter-spacing: 0.02em;
  }

  .donor-CTA {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  .logo-blood-brothers {
    max-height: 5rem;
  }

  .offers {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }

  .offers-title {
    font-size: 1.3rem;
  }
}
</style>
