<script setup></script>

<template>
  <div class="layout">
    <div class="fixed">
      <Header />
      <Divider />
    </div>

    <div class="main-content">
      <div class="page-content">
        <NuxtPage />
      </div>
      <Footer />
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

.main-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 184px);
    margin-top: 184px;
    overflow-y: auto;
}

.page-content {
    flex: 1;
}

footer {
    flex-shrink: 0;
}
</style>