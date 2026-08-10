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
          Seu apoio é fundamental para o fortalecimento do Hemocione, o maior
          fomentador da doação de sangue no país. Contribua para ajudar a
          salvar ainda mais vidas e torne-se um irmão de sangue!
        </p>
        <span class="hero-badge">Hemocione • ONG desde 2017</span>
      </div>
      <div class="hero-clip" aria-hidden="true"></div>
    </section>

    <section class="impact">
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
  height: 68svh;
  min-height: 460px;
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
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  padding: 1.5rem;
  padding-bottom: 4rem;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(187, 10, 8, 0.1) 0%,
    rgba(187, 10, 8, 0.88) 78%,
    rgba(187, 10, 8, 0.98) 100%
  );
  color: var(--hemo-color-text-primary);
}

.hero-clip {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 64px;
  background: var(--hemo-color-primary-dark);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
  z-index: 11;
}

.logo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 999px;
  padding: 0.7rem 1.6rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.hero-logo {
  width: 9rem;
  max-width: 55vw;
  display: block;
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
  max-width: 90%;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
}

.hero-text {
  font-size: 1.1rem;
  font-weight: 300;
  max-width: 40rem;
  margin: 0;
}

.hero-badge {
  font-size: 0.85rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 999px;
  padding: 0.35rem 1.1rem;
}

.impact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.5rem;
  padding: 3rem 1rem 2.5rem;
  background: linear-gradient(
    135deg,
    var(--hemo-color-primary-dark) 0%,
    #3a0303 100%
  );
}

.impact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.impact-value {
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.impact-label {
  font-size: 0.9rem;
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
  font-size: 2.1rem;
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
    min-height: 64svh;
  }

  .hero-title {
    font-size: 2.1rem;
  }

  .hero-text {
    font-size: 0.95rem;
  }

  .hero-logo {
    width: 7rem;
  }

  .impact {
    gap: 2rem;
    padding: 2.5rem 1rem 2rem;
  }

  .impact-value {
    font-size: 1.7rem;
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
