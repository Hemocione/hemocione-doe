<template>
  <div class="page">
    <div class="banner-wrapper">
      <NuxtImg class="banner" src="/images/banner.png" fit="cover" />
      <div class="banner-data">
        <NuxtImg src="/images/logos/logo-padrao.svg" class="logo" />
        <div class="content">
          <h1 class="banner-title">Doe Sangue, Doe Vida</h1>
          <p class="banner-text">
            Seu apoio é fundamental para o fortalecimento do Hemocione, o maior
            fomentador da doação de sangue no país. Contribua para ajudar a
            salvar ainda mais vidas e torne-se um irmão de sangue!
          </p>
        </div>
      </div>
    </div>
    <div class="donor-CTA">
      <NuxtImg
        src="/images/logos/blood-brothers.png"
        class="logo-blood-brothers"
      />
      <div class="offers-wrapper">
        <span>Quero ajudar mensalmente com...</span>
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
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingCard from "~/components/PricingCard.vue";
const offers = [
  {
    title: "Plano Gotinha",
    value: "9.90",
    logo: "/images/logos/planos/gotinha.png",
  },
  {
    title: "Plano Hemácia",
    value: "29.90",
    logo: "/images/logos/planos/hemacia.png",
  },
  {
    title: "Plano Gota",
    value: "49.90",
    logo: "/images/logos/planos/gota.png",
  },
  {
    title: "Plano Bolsa",
    value: "99.90",
    logo: "/images/logos/planos/bolsa.png",
  },
];
</script>

<style scoped>
.offers-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  color: var(--hemo-color-secondary);
  font-size: 2rem;
  width: 100%;
  height: 100%;
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
}

.brothers-title {
  font-size: 3rem;
  font-weight: 900;
  max-width: 100%;
  margin: 0;
  color: var(--hemo-color-secondary);
}
.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.donor-CTA {
  background-color: var(--hemo-color-primary);
  min-height: 50svh;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.banner-wrapper {
  position: relative;
  height: 50svh;
  width: 100%;
}

.banner-data {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  font-size: 5rem;
  padding: 1rem;
}

.banner {
  height: 100%;
  width: 100%;
  opacity: 0.3;
  object-fit: cover;
}

.banner-title {
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  max-width: 90%;
  margin: 0;
}

.banner-text {
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  max-width: 90%;
  margin: 0;
}

.logo {
  width: 40%;
  max-width: 300px;
}

@media screen and (max-width: 768px) {
  .banner-data {
    font-size: 2rem;
  }

  .banner-title {
    font-size: 2.5rem;
    max-width: 100%;
  }

  .banner-text {
    font-size: 1rem;
    max-width: 100%;
  }

  .brothers-title {
    font-size: 2rem;
  }

  .donor-CTA {
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }

  .logo-blood-brothers {
    height: 100%;
    max-height: 30svh;
  }

  .offers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    aspect-ratio: 1/1;
  }
}
</style>
