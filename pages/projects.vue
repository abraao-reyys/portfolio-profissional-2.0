<script setup>
const projectsInfos = [
    {
        title: 'Portfólio Profissional 2.0',
        description: 'Esta é uma nova versão de portfólio; UI/UX aprimorada e utilização de novas tecnologias aprendidas.',
        urlImg: '/assets/images/project-portfolio2.jpg',
        urlRepo: 'https://github.com/abraao-reyys/portfolio-profissional-2.0',
        urlDeploy: 'https://portfolio-profissional-2.netlify.app/'
    },
    {
        title: 'Portfólio Profissional 1.0',
        description: 'Este é o meu primeiro projeto feito após dar início aos estudos de JavaScript.',
        urlImg: '/assets/images/project-portfolio1.jpg',
        urlRepo: 'https://github.com/abraao-reyys/portfolio-profissional',
        urlDeploy: 'https://abraao-reyys.github.io/portfolio-profissional'
    },
    {
        title: 'BookFinder API',
        description: 'Combina uma API Node com Express e um frontend estático em HTML/JS para busca de livros.',
        urlImg: '/assets/images/project-bookfinder-api.png',
        urlRepo: 'https://github.com/abraao-reyys/bookfinder-api',
        urlDeploy: 'https://abraao-reyys.github.io/bookfinder-api/'
    },
    {
        title: 'Blog Android',
        description: 'Criado como desafio através do CursoemVideo com o objetivo de pôr em prática as habilidades em CSS.',
        urlImg: '/assets/images/project-blogandroid.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-android',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-android/'
    },
    {
        title: 'Tela de Login',
        description: 'Criado ao final do módulo de formulários HTML do CursoemVideo para testar habilidades, inclusive em CSS.',
        urlImg: '/assets/images/project-teladelogin.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-login',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-login/'
    },
    {
        title: 'Landing Page - One Piece',
        description: 'Este foi o meu primeiro projeto quando iniciei os estudos em web front-end. Idealizado pelo DevEmDobro.',
        urlImg: '/assets/images/project-onepiece.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-one-piece',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-one-piece/'
    },
    {
        title: 'Cordel Moderno',
        description: 'Criado como desafio através do CursoemVideo com o objetivo de elaborar um Efeito Parallax.',
        urlImg: '/assets/images/project-cordel.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-cordel',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-cordel/'
    },
    {
        title: 'Simulador de Smartphone',
        description: 'Criado ao final do módulo de iFrames HTML do CursoemVideo. Além dos iFrames, pratiquei posicionamento com CSS.',
        urlImg: '/assets/images/project-smartphone.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-social-media',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-social-media/'
    }
];
</script>

<template>
    <main>
        <h2>Galeria de Projetos</h2>
        <div class="project-cards-container">
            <ProjectCard
            v-for="project in projectsInfos"
            :urlImage="project.urlImg"
            :urlRepo="project.urlRepo"
            :urlDeploy="project.urlDeploy"
            >
                <template #projectTitle>{{ project.title }}</template>
                <template #projectDescription>
                    {{ project.description }}
                </template>
            </ProjectCard>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 104px;

    height: 100%;
    width: 100%;

    padding: 104px;

    .project-cards-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 80px;

        height: 100%;
        max-width: 1256px;
        width: 100%;
    }
}

@media screen and (max-width: 959px) {
    main {
        padding: 48px 32px;

        .project-cards-container {
            justify-content: space-evenly;
            gap: 48px;
        }
    }
}

@media screen and (max-width: 360px) {
    main {
        padding: 24px !important;
        gap: 64px;
    }
}
</style>