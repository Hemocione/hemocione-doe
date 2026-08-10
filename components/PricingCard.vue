<template>
  <div
    class="pricing-card"
    :class="{ 'pricing-card--recommended': recommended }"
  >
    <span v-if="recommended" class="recommended-badge">Melhor escolha</span>

    <div class="card-body">
      <div class="plan-icon">
        <NuxtImg :src="logo" :alt="name" class="plan-icon-img" />
      </div>

      <h2 class="plan-name">{{ name }}</h2>

      <div class="plan-price">
        <span class="plan-value">{{ cost }}</span>
        <span class="plan-period">/mês</span>
      </div>

      <p class="plan-per-day">{{ perDay }}</p>

      <button class="plan-cta" tabindex="-1">
        <DropIcon class="plan-cta-icon" />
        Ajudar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import DropIcon from "~/components/DropIcon.vue";

defineProps<{
  logo: string;
  name: string;
  cost: string;
  perDay?: string;
  recommended?: boolean;
}>();
</script>

<style scoped>
.pricing-card {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 1.25rem;
  border: 2px solid rgba(0, 0, 0, 0.06);
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.35s ease;
  will-change: transform;
}

.pricing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  border-color: rgba(0, 0, 0, 0.1);
}

.pricing-card:active {
  transform: scale(0.96);
  transition: transform 0.1s ease;
}

.pricing-card--recommended {
  border-color: white;
  box-shadow:
    0 4px 24px rgba(255, 255, 255, 0.25),
    0 0 0 2px white;
}

.pricing-card--recommended:hover {
  box-shadow:
    0 16px 40px rgba(0, 0, 0, 0.22),
    0 0 0 2px white;
}

.recommended-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  color: var(--hemo-color-primary);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.3rem 0.7rem;
  border-radius: 0 1.25rem 0 0.75rem;
}

.card-body {
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
}

.plan-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: var(--hemo-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(187, 10, 8, 0.3);
  flex-shrink: 0;
}

.plan-icon-img {
  width: 1.75rem;
  height: 1.75rem;
  object-fit: contain;
}

.plan-name {
  font-size: clamp(0.75rem, 2vw, 0.95rem);
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  text-align: center;
  line-height: 1.2;
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 0.15rem;
  margin: 0;
}

.plan-value {
  font-family: var(--hemo-font-display);
  font-size: clamp(1.05rem, 2.5vw, 1.4rem);
  font-weight: 900;
  color: var(--hemo-color-primary);
  line-height: 1;
}

.plan-period {
  font-size: 0.7rem;
  color: #666;
  font-weight: 400;
}

.plan-per-day {
  font-size: 0.65rem;
  color: #999;
  margin: 0;
  text-align: center;
}

.plan-cta {
  margin-top: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.55rem 0;
  border: none;
  border-radius: 0.75rem;
  background: var(--hemo-color-primary);
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease;
  font-family: inherit;
}

.plan-cta:hover {
  background: var(--hemo-color-primary-dark);
}

.plan-cta-icon {
  width: 0.6rem;
  height: 0.9rem;
}
</style>
