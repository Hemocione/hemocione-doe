<template>
  <ElCard class="offer-card">
    <div class="value">R$ {{ value }}</div>
    <div class="title">
      {{ title }}
      <ElIcon>
        <ElIconArrowRightBold />
      </ElIcon>
    </div>
  </ElCard>
</template>

<style scoped>
.offer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
  height: 100%;
  color: var(--hemo-color-primary);
  font-size: 2rem;
}

.offer-card:deep(.el-card__body) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
}

.value {
  font-size: 3rem;
  font-weight: 900;
  max-width: 100%;
  margin: 0;
  color: var(--hemo-color-primary);
  white-space: nowrap;
}

.title {
  font-size: 1.5rem;
  font-weight: 900;
  max-width: 100%;
  margin: 0;
  color: var(--hemo-color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

@media screen and (max-width: 768px) {
  .offer-card {
    padding: 1rem;
  }
  .value {
    font-size: 1.5rem;
  }
  .title {
    font-size: 1rem;
  }
}
</style>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
}>();
</script>
