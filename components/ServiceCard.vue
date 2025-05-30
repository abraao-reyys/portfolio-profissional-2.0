<script setup></script>

<template>
    <div class="card-container">
        <div class="card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="#1A1A1A" d="M12.5 1.25a.75.75 0 0 0-1.5 0v8.69L6.447 5.385a.75.75 0 1 0-1.061 1.06L9.94 11H1.25a.75.75 0 0 0 0 1.5h8.69l-4.554 4.553a.75.75 0 0 0 1.06 1.061L11 13.561v8.689a.75.75 0 0 0 1.5 0v-8.69l4.553 4.554a.75.75 0 0 0 1.061-1.06L13.561 12.5h8.689a.75.75 0 0 0 0-1.5h-8.69l4.554-4.553a.75.75 0 1 0-1.06-1.061L12.5 9.939z" stroke-width="1" stroke="#1A1A1A" />
            </svg>
            <slot name="cardTitle"></slot>
        </div>
        <div class="card-description">
            <slot name="cardDescription"></slot>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    height: 104px;

    .card-title {
        display: flex;
        align-items: center;
        gap: var(--space-sm);

        font-size: var(--font-xl);
        font-weight: 700;
    }

    .card-description {
        color: var(--text-light);
    }
}
</style>