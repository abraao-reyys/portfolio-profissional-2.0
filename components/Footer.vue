<script setup></script>

<template>
    <footer>
        &copy; 2025 Abraão Reis. Todos os direitos reservados.
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
    width: 100%;

    color: var(--background);
    text-align: center;
    background-color: var(--principal);
}

@media screen and (max-width: 959px) {
    footer {
        font-size: 14px;
    }
}
</style>