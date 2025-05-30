<script setup></script>

<template>
    <div class="layout">
        <div class="fixed">
            <Header />
            <Divider />
        </div>
        <div class="page-content">
            <NuxtPage />
        </div>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;

    height: 100vh;
}

.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    height: 184px;
    width: 100%;
}

.page-content {
    margin-top: 184px;
    height: calc(100vh - 184px);
    overflow-y: auto;
}
</style>