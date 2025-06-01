<script setup>
import { ref, onMounted } from 'vue'

const progressRef = ref(null);
const progressTumb = ref(null);
const percent = ref('');

onMounted(() => {
  if (progressRef.value) {
    percent.value = progressRef.value.textContent.trim()
    progressTumb.value.style.width = percent.value;
  }
})
</script>

<template>
    <div class="card-container">
        <div class="card-header">
            <div class="card-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="#1A1A1A" d="M12.5 1.25a.75.75 0 0 0-1.5 0v8.69L6.447 5.385a.75.75 0 1 0-1.061 1.06L9.94 11H1.25a.75.75 0 0 0 0 1.5h8.69l-4.554 4.553a.75.75 0 0 0 1.06 1.061L11 13.561v8.689a.75.75 0 0 0 1.5 0v-8.69l4.553 4.554a.75.75 0 0 0 1.061-1.06L13.561 12.5h8.689a.75.75 0 0 0 0-1.5h-8.69l4.554-4.553a.75.75 0 1 0-1.06-1.061L12.5 9.939z" stroke-width="1" stroke="#1A1A1A" />
                </svg>
                <slot name="cardTitle"></slot>
            </div>
            <div ref="progressRef" class="card-percent">
                <slot name="cardPercent"></slot>
            </div>
        </div>
        <div class="progress-track">
            <div ref="progressTumb" class="progress-tumb"></div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    
    height: 64px;
    width: 100%;
    max-width: 400px;

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 40px;

        .card-title {
            display: flex;
            align-items: center;
            gap: var(--space-sm);

            font-size: var(--font-lg);
            font-weight: 300;
        }
    }

    .progress-track {
        display: flex;
        justify-content: flex-start;
        border: 1px solid var(--border-1);
        border-radius: 10px;

        .progress-tumb {
            height: 16px;
            width: 0%;

            background-color: var(--principal);

            border-radius: 10px;
        }
    }
}

@media screen and (max-width: 520px) {
    .card-container {
        height: 48px;

        .card-header {
            height: 24px;

            .card-title {
                font-size: var(--font-md);
            }
        }

        .card-percent {
            font-size: 14px;
        }

        .progress-track {
            .progress-tumb {
                height: 10px;
            }
        }
    }
}
</style>