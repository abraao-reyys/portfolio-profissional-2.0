<script setup>
import { ref, onMounted } from 'vue';

const { urlImage, urlRepo, urlDeploy } = defineProps({
  urlImage: {
    type: String,
    required: true
  },
  urlRepo: String,
  urlDeploy: String
});

const projectImage = ref(null);

onMounted(() => {
    if (projectImage.value) {
        projectImage.value.style.backgroundImage = `url(${urlImage})`;
    }
});
</script>

<template>
    <div class="project-card-container">
        <div ref="projectImage" class="project-image"></div>
        <div class="project-info-container">
            <div class="project-title">
                <slot name="projectTitle" />
            </div>
            <div class="project-description">
                <slot name="projectDescription" />
            </div>
        </div>
        <div class="project-action-buttons">
            <a :href="urlRepo" v-if="urlRepo">
                <div class="project-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#F5F5F5" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" stroke-width="1" stroke="#F5F5F5" />
                    </svg>
                </div>
            </a>
            <a :href="urlDeploy" v-if="urlDeploy">
                <div class="project-action">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#F5F5F5" stroke-width="1.5">
                            <path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z" />
                            <path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z" />
                            <path stroke-linecap="round" d="M2 12h20" />
                        </g>
                    </svg>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.project-card-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--space-sm);
    
    width: 528px;

    padding: 32px;

    color: var(--text);

    border: 1px solid var(--border-2);
    border-radius: 20px;


    .project-image {
        height: 280px;
        width: 100%;

        border: 1px solid var(--border-2);
        border-radius: 10px;

        background-position: center;
    }

    .project-info-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);

        .project-title {
            height: 32px;
            font-size: var(--font-xl);
            font-weight: 700;
        }

        .project-description {
            color: var(--text-light);
            font-size: var(--font-md);
            font-weight: 300;
            text-align: justify;
        }
    }

    .project-action-buttons {
        display: flex;
        gap: var(--space-sm);

        .project-action {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 48px;
            width: 48px;

            background-color: var(--principal);

            border-radius: 24px;

            cursor: pointer;
        }
    }
}

@media screen and (max-width: 959px) {
    .project-card-container {
        gap: var(--space-xs);
        
        width: 264px;
        
        padding: 16px;

        .project-image {
            height: 120px;
            background-size: cover;
        }

        .project-info-container {
            .project-title {
                height: 24px;
                font-size: var(--font-md);
            }

            .project-description {
                font-size: 14px;
            }
        }

        .project-action-buttons {
            gap: var(--space-xs);

            .project-action {
                height: 32px;
                width: 32px;

                svg {
                    height: 18px;
                }
            }
        }
    }
}
</style>