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
        <span class="logo-badge">
          <NuxtImg src="/images/logos/logo-padrao.svg" class="hero-logo" />
        </span>
        <h1 class="hero-title">Doe Sangue, Doe Vida</h1>
        <p class="hero-text">
          Vire um irmão de sangue: sua doação mensal mantém o Hemocione
          salvando vidas todos os dias.
        </p>
      </div>
    </section>

    <section class="impact-card">
      <div class="impact-item" v-for="stat in impactStats" :key="stat.label">
        <span class="impact-value">{{ stat.value }}</span>
        <span class="impact-label">{{ stat.label }}</span>
      </div>
    </section>

    <section class="donor-CTA">
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
            style="width: 100%; height: 100%"
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
  height: 48svh;
  min-height: 340px;
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
  object-position: top center;
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
  padding: 1.5rem;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(187, 10, 8, 0.15) 0%,
    rgba(187, 10, 8, 0.9) 100%
  );
  color: white;
}

.logo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 999px;
  padding: 0.6rem 1.4rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.hero-logo {
  width: 8rem;
  max-width: 50vw;
  display: block;
}

.hero-title {
  font-family: var(--hemo-font-display);
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
  max-width: 90%;
  letter-spacing: -0.01em;
}

.hero-text {
  font-size: 1.05rem;
  font-weight: 300;
  max-width: 32rem;
  margin: 0;
}

.impact-card {
  position: relative;
  z-index: 5;
  margin: -2.75rem auto 2.5rem;
  width: calc(100% - 2rem);
  max-width: 56rem;
  border-radius: 1.5rem;
  background: linear-gradient(
    135deg,
    var(--hemo-color-primary-dark) 0%,
    #3a0303 100%
  );
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.25rem;
  padding: 1.75rem 1.5rem;
}

.impact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.impact-value {
  font-family: var(--hemo-font-display);
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.impact-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.donor-CTA {
  background-color: var(--hemo-color-primary);
  min-height: 50svh;
  width: 100%;
  padding: 2.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.offers-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;
  color: var(--hemo-color-secondary);
  width: 100%;
  height: 100%;
}

.offers-title {
  font-family: var(--hemo-font-display);
  font-size: 2rem;
  font-weight: 700;
}

.offers {
  display: flex;
  gap: 0.75rem;
  width: 100%;
  aspect-ratio: 3/1;
  box-sizing: border-box;
}

.logo-blood-brothers {
  height: 100%;
  max-height: 40svh;
  filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3));
}

@media screen and (max-width: 768px) {
  .hero {
    height: auto;
    min-height: 42svh;
  }

  .hero-content {
    padding: 1.25rem;
  }

  .hero-title {
    font-size: 1.85rem;
  }

  .hero-text {
    font-size: 0.9rem;
  }

  .hero-logo {
    width: 6.5rem;
  }

  .impact-card {
    margin: -2rem auto 2rem;
    width: calc(100% - 1.25rem);
    gap: 1.5rem;
    padding: 1.25rem 1rem;
  }

  .impact-value {
    font-size: 1.5rem;
  }

  .donor-CTA {
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    padding: 1.5rem 1rem;
  }

  .logo-blood-brothers {
    height: auto;
    max-height: 22svh;
  }

  .offers-title {
    font-size: 1.4rem;
  }

  .offers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    aspect-ratio: 1/1;
    gap: 0.5rem;
  }
}
</style>
