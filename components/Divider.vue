<script setup></script>

<template>
    <div class="divider-header"></div>
</template>

<style scoped>
.divider-header {
    height: 40px;
    width: 100%;

    background-color: var(--comp);
}

@media screen and (max-width: 599px) {
    .divider-header {
        height: 16px;
    }
}
</style>