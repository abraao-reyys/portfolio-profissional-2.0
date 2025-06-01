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

@media screen and (max-width: 959px) {
  .fixed {
    height: 264px;
  }

  .main-content {
    height: calc(100vh - 264px);
    margin-top: 264px;
  }
}

@media screen and (max-width: 599px) {
  .fixed {
    height: 208px;
  }

  .main-content {
    height: calc(100vh - 208px);
    margin-top: 208px;
  }
}

@media screen and (max-width: 480px) {
  .fixed {
    height: 160px;
  }

  .main-content {
    height: calc(100vh - 160px);
    margin-top: 160px;
  }
}
</style>