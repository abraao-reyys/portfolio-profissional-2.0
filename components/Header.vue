<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

function scrollToTop() {
  const content = document.querySelector('.main-content');
  if (content) {
    content.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>

<template>
    <header>
        <div class="title-container" @click="scrollToTop">
            <div class="title-header">Portfólio Profissional</div>
            <div class="subtitle-header">Abraão A. Reis</div>
        </div>
        <nav>
            <ul>
                <li
                class="page-nav-link"
                :class="{ active: route.path === '/'}"
                >
                    <NuxtLink to="/">
                        <div class="nav-link-title">Sobre mim</div>
                        <div class="nav-link-highlight"></div>
                    </NuxtLink>
                </li>
                <NuxtLink to="/projects">
                    <li
                    class="page-nav-link"
                    :class="{ active: route.path === '/projects'}"
                    >
                        <div class="nav-link-title">Projetos</div>
                        <div class="nav-link-highlight"></div>
                    </li>
                </NuxtLink>
                <li class="page-nav-link button-filled"><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background-color: var(--background);

    padding: 32px 80px;

    color: var(--text);

    div.title-container {
        display: flex;
        flex-direction: column;

        cursor: pointer;

        div.title-header {
            font-size: var(--font-xxl);
            font-weight: 900;
            line-height: 48px;
        }

        div.subtitle-header {
            font-size: var(--font-xl);
            line-height: 32px;
        }
    }

    nav {
        display: flex;

        height: 80px;
        width: 50%;

        ul {
            display: flex;
            align-items: center;
            gap: var(--space-lg);

            height: 100%;
            width: 100%;

            a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                width: 100%;

                color: var(--text);
                text-decoration: none;

                cursor: pointer;
            }
            
            .page-nav-link {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                height: 56px;
                width: 100%;

                font-size: var(--font-lg);

                list-style-type: none;

                .nav-link-highlight {
                    display: none;

                    height: 4px;
                    width: 112px;

                    background-color: var(--principal);

                    border-radius: 5px 5px 0 0;
                }
            }

            .page-nav-link.active {
                font-weight: 700;

                .nav-link-highlight {
                    display: block;
                }
            }

            .page-nav-link:hover {
                font-weight: 700;
            }
        }
    }
}
</style>