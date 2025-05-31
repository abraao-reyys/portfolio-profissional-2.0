<script setup></script>

<template>
    <div class="card-container">
        <div class="card-title">
            <slot name="cardTitle" />
        </div>
        <div class="card-subtitle">
            <slot name="cardSubtitle" />
        </div>
        <div class="card-description">
            <slot name="cardDescription" />
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;

    width: 368px;

    padding: 16px;

    border: 1px solid var(--border-2);
    border-radius: 10px;

    .card-title {
        display: flex;
        align-items: center;

        font-size: var(--font-xl);
        font-weight: 700;
    }

    .card-title {
        font-size: var(--font-lg);
        font-weight: 700;
    }

    .card-description {
        color: var(--text-light);
        font-size: var(--font-md);
    }
}
</style>