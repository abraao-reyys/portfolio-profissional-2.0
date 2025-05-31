<script setup>
const images = import.meta.glob('../assets/images/*', {
  query: '?url',
  import: 'default',
  eager: true
});

const projectsInfos = [
    {
        title: 'Portfólio Profissional 2.0',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: images['../assets/images/project-portfolio2.jpg']
    },
    {
        title: 'Portfólio Profissional 1.0',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: images['../assets/images/project-portfolio1.jpg'],
        link: 'https://abraao-reyys.github.io/portfolio-profissional/'
    },
    {
        title: 'Blog Android',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: images['../assets/images/project-blogandroid.jpg'],
        link: 'https://abraao-reyys.github.io/projeto-android/'
    },
    {
        title: 'Tela de Login',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: images['../assets/images/project-teladelogin.jpg'],
        link: 'https://abraao-reyys.github.io/projeto-login/'
    },
    {
        title: 'Landing Page - One Piece',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: images['../assets/images/project-onepiece.jpg'],
        link: 'https://abraao-reyys.github.io/projeto-one-piece/'
    },
    {
        title: 'Cordel Moderno',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: images['../assets/images/project-cordel.jpg'],
        link: 'https://abraao-reyys.github.io/projeto-cordel/'
    },
    {
        title: 'Simulador de Smartphone',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: images['../assets/images/project-smartphone.jpg'],
        link: 'https://abraao-reyys.github.io/projeto-social-media/'
    },
    {
        title: 'Landing Page - GameZone',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, repudiandae.',
        urlImg: images['../assets/images/project-gamezone.jpg'],
        link: 'https://marcos-grocha.github.io/game-zone'
    }
];
</script>

<template>
  <main>
    <h2>Galeria de Projetos</h2>
    <div class="project-cards-container">
      <a
        v-for="project in projectsInfos"
        :key="project.title"
        :href="project.link"
        class="project-link-wrapper"
        target="_blank"
        rel="noopener"
      >
        <ProjectCard :urlImage="project.urlImg">
          <template #projectTitle>{{ project.title }}</template>
          <template #projectDescription>{{ project.description }}</template>
        </ProjectCard>
      </a>
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

        cursor: pointer;
    }
}

a {
    text-decoration: none;
}

@media screen and (min-width: 360px) and (max-width: 500px) {
    main {
        padding: 48px;
    }
}
</style>