<script setup>
const projectsInfos = [
    {
        title: 'Portfólio Profissional 2.0',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: '/assets/images/project-portfolio2.jpg',
        urlRepo: '',
        urlDeploy: 'https://abraao-reyys.github.io/portfolio-profissional-2.0/'
    },
    {
        title: 'Portfólio Profissional 1.0',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: '/assets/images/project-portfolio1.jpg',
        urlRepo: 'https://github.com/abraao-reyys/portfolio-profissional',
        urlDeploy: 'https://abraao-reyys.github.io/portfolio-profissional'
    },
    {
        title: 'Blog Android',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: '/assets/images/project-blogandroid.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-android',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-android/'
    },
    {
        title: 'Tela de Login',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: '/assets/images/project-teladelogin.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-login',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-login/'
    },
    {
        title: 'Landing Page - One Piece',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: '/assets/images/project-onepiece.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-one-piece',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-one-piece/'
    },
    {
        title: 'Cordel Moderno',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: '/assets/images/project-cordel.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-cordel',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-cordel/'
    },
    {
        title: 'Simulador de Smartphone',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: '/assets/images/project-smartphone.jpg',
        urlRepo: 'https://github.com/abraao-reyys/projeto-social-media',
        urlDeploy: 'https://abraao-reyys.github.io/projeto-social-media/'
    },
    {
        title: 'Landing Page - GameZone',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: '/assets/images/project-gamezone.jpg',
        urlRepo: 'https://github.com/marcos-grocha/game-zone',
        urlDeploy: 'https://marcos-grocha.github.io/game-zone/'
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