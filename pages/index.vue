<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import myImg from '/assets/images/photo-myself.png';
import { useRoute } from 'vue-router'

const rawIdiomSkills = [
    {
        title: 'Português (nativo)',
        percent: '100%'
    },
    {
        title: 'Inglês',
        percent: '50%'
    },
    {
        title: 'Espanhol',
        percent: '10%'
    }
];

const idiomSkills = rawIdiomSkills.slice().sort((a, b) => {
  const percentA = parseInt(a.percent.replace('%', ''))
  const percentB = parseInt(b.percent.replace('%', ''))
  return percentB - percentA
});

const rawSoftwareSkills = [
    {
        title: 'VS Code',
        percent: '90%'
    },
    {
        title: 'Git',
        percent: '80%'
    },
    {
        title: 'Notion',
        percent: '80%'
    },
    {
        title: 'Jira/Confluence',
        percent: '70%'
    },
    {
        title: 'GitHub',
        percent: '70%'
    },
    {
        title: 'Figma',
        percent: '50%'
    },
    {
        title: 'Postman',
        percent: '40%'
    },
    {
        title: 'Docker',
        percent: '15%'
    }
];

const softwareSkills = rawSoftwareSkills.slice().sort((a, b) => {
  const percentA = parseInt(a.percent.replace('%', ''))
  const percentB = parseInt(b.percent.replace('%', ''))
  return percentB - percentA
});

const rawCodeSkills = [
    {
        title: 'HTML/CSS',
        percent: '90%'
    },
    {
        title: 'JavaScript',
        percent: '85%'
    },
    {
        title: 'Node',
        percent: '80%'
    },
    {
        title: 'Vue/Nuxt',
        percent: '65%'
    },
    {
        title: 'Express',
        percent: '50%'
    },
    {
        title: 'TypeScript',
        percent: '40%'
    },
    {
        title: 'React (em foco)',
        percent: '55%'
    },
    {
        title: 'Python',
        percent: '20%'
    },
    {
        title: 'SQL',
        percent: '30%'
    }
];


const route = useRoute()

const codeSkills = rawCodeSkills.slice().sort((a, b) => {
  const percentA = parseInt(a.percent.replace('%', ''))
  const percentB = parseInt(b.percent.replace('%', ''))
  return percentB - percentA
});

const copyText = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Copiado!");
    })
    .catch(err => {
      alert("Falha ao copiar texto: " + err);
    });
};

const mapWidth = ref('760');
const mapHeight = ref('456');

function updateMap() {
  const width = window.innerWidth;

  if (width >= 790 && width < 960) {
    mapWidth.value = '600';
    mapHeight.value = '400';
} else if (width > 480 && width < 790) {
    mapWidth.value = '400';
    mapHeight.value = '400';
} else if (width > 380 && width <= 480) {
    mapWidth.value = '300'
    mapHeight.value = '400'
} else if (width <= 380) {
    mapWidth.value = '250'
} else {
    mapWidth.value = '760';
    mapHeight.value = '456';
    }
}

onMounted(async () => {
  updateMap();
  window.addEventListener('resize', updateMap);

  await nextTick();
  if (route.hash === '#contact') {
    const el = document.querySelector(route.hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMap);
});
</script>

<template>
    <main>
        <section id="aboutMe">
            <div class="section-container">
                <div class="section-history-content">
                    <h2>Por trás do código</h2>
                    <div class="history-description">
                        <p>Apaixonado por tecnologia e aprendizado constante, iniciei minha jornada na programação em 2021, ainda durante o ensino médio. Desde então, venho me aprofundando na área com entusiasmo e disciplina. Atualmente curso Sistemas de Informação na UNIT, onde participo ativamente de eventos, hackathons e iniciativas que me desafiem a crescer e ampliar meu conhecimento.</p>
                        <p>Acredito que mais do que dominar ferramentas, é essencial construir uma base sólida de fundamentos. Com essa mentalidade, desenvolvi esta segunda versão do meu portfólio — uma evolução da primeira — atualizada com as tecnologias que venho estudando e aplicando no momento, voltado à criação de websites com boas práticas e estrutura moderna.</p>
                        <p>Fora do código, me dedico a uma vida rica em experiências: leio livros técnicos e clássicos, toco instrumentos musicais, pratico corrida, sou católico ativo, estudo idiomas e estou sempre em busca de novos aprendizados. Sonho alto, planejo com propósito e sigo determinado a conquistar cada passo com esforço e paixão.</p>
                        <p><small>"Enquanto houver vontade de lutar haverá esperança de vencer." — Sto. Agostinho</small></p>
                    </div>
                    <div class="action-buttons">
                        <a href="/assets/documents/abraaoreis-cv.pdf" download class="button-filled">Baixar currículo</a>
                        <div class="network-buttons-container">
                            <a href="https://www.linkedin.com/in/abraaoreis/" target="_blank">
                                <div class="network-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="#1A1A1A" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" stroke-width="1" stroke="#1A1A1A" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://github.com/abraao-reyys" target="_blank">
                                <div class="network-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="#1A1A1A" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" stroke-width="1" stroke="#1A1A1A" />
                                    </svg>
                                </div>
                            </a>
                            <a href="mailto:abraaoreispersonal@gmail.com">
                                <div class="network-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="#1A1A1A" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z" stroke-width="1" stroke="#1A1A1A" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="section-history-image">
                    <img :src="myImg" alt="Minha Foto">
                </div>
            </div>
        </section>
        <section id="education" class="standard-section">
            <h2>Formação e Cursos</h2>
            <div class="education-cards">
                <EducationCard>
                    <template #cardTitle>
                        Sistemas de Informação - UNIT
                    </template>
                    <template #cardSubtitle>
                        Ago 2024 - Jun 2028
                    </template>
                    <template #cardDescription>
                        Na universidade, desenvolvo habilidades de fullstack, infraestrutura, engenharia de requisitos, fundamentos da programação e participo ativamente de hackathons.
                    </template>
                </EducationCard>
                <EducationCard>
                    <template #cardTitle>
                        Desenvolvimento Web - Udemy
                    </template>
                    <template #cardSubtitle>
                        Dez 2024 - Fev 2025
                    </template>
                    <template #cardDescription>
                        Foco em JavaScript moderno, com aprofundamento em Node.js, Express, Vue e recursos avançados do ESNext para aplicações web.
                    </template>
                </EducationCard>
                <EducationCard>
                    <template #cardTitle>
                        Curso em Vídeo - CEV
                    </template>
                    <template #cardSubtitle>
                        Jun 2023 - Dez 2024
                    </template>
                    <template #cardDescription>
                        Ao longo do tempo, conclui diversos cursos na plataforma, explorando HTML5, CSS3, JavaScript, lógica de programação, Python e outros áreas essenciais.
                    </template>
                </EducationCard>
                <EducationCard>
                    <template #cardTitle>
                        Desenvolvimento com React - Udemy
                    </template>
                    <template #cardSubtitle>
                        Jun 2025 - Em andamento
                    </template>
                    <template #cardDescription>
                        Desenvolvimento web com React, Next, Nest, Tailwind, entre outras tecnologias, de forma integrada; além de criação e consumo de APIs.
                    </template>
                </EducationCard>
            </div>
        </section>
        <section id="services" class="standard-section">
            <h2>Serviços</h2>
            <div class="service-cards">
                <ServiceCard>
                    <template #cardTitle>
                        Desenvolvimento Front-End
                    </template>
                    <template #cardDescription>
                        Criação de interfaces web com Vue, Nuxt e TypeScript, focando em interatividade e robustez.
                    </template>
                </ServiceCard>
                <ServiceCard>
                    <template #cardTitle>
                        Desenvolvimento Back-End
                    </template>
                    <template #cardDescription>
                        Iniciando no backend com Node e Express, realizo requisições e testes utilizando o Postman.
                    </template>
                </ServiceCard>
                <ServiceCard>
                    <template #cardTitle>
                        Engenharia de Requisitos
                    </template>
                    <template #cardDescription>
                        Atuo na modelagem de requisitos por meio de casos de uso, diagramas UML e na elaboração estruturada de documentos de especificação de sistemas.
                    </template>
                </ServiceCard>
                <ServiceCard>
                    <template #cardTitle>
                        Gestão de Processos
                    </template>
                    <template #cardDescription>
                        Gestão ágil com liderança estratégica, aplicando técnicas criativas e inovadoras para desenvolver soluções eficientes.
                    </template>
                </ServiceCard>
            </div>
        </section>
        <section id="skills" class="standard-section">
            <h2>Habilidades</h2>
            <div class="skills-columns">
                <div class="skill-column">
                    <div class="skills-type">Softwares</div>
                    <div class="skill-cards">
                        <SkillCard v-for="skill in softwareSkills">
                            <template #cardTitle>
                                {{ skill.title }}
                            </template>
                            <template #cardPercent>
                                {{ skill.percent }}
                            </template>
                        </SkillCard>
                    </div>
                </div>
                <div class="skill-column">
                    <div class="skills-type">Código</div>
                    <div class="skill-cards">
                        <SkillCard v-for="skill in codeSkills">
                            <template #cardTitle>
                                {{ skill.title }}
                            </template>
                            <template #cardPercent>
                                {{ skill.percent }}
                            </template>
                        </SkillCard>
                    </div>
                </div>
                <div class="skill-column">
                    <div class="skills-type">Idiomas</div>
                    <div class="skill-cards">
                        <SkillCard v-for="skill in idiomSkills">
                            <template #cardTitle>
                                {{ skill.title }}
                            </template>
                            <template #cardPercent>
                                {{ skill.percent }}
                            </template>
                        </SkillCard>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="standard-section">
            <div class="section-header">
                <h2>Contato</h2>
                <div class="section-subtitle">
                    Ficou interessado (a)? Confira as formas de contato
                </div>
            </div>
            <div class="section-content">
                <div class="infos-container">
                    <div class="info-contact">
                        <div class="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                                <path fill="#1A1A1A" d="M11.5 7A2.5 2.5 0 0 1 14 9.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 9.5A2.5 2.5 0 0 1 11.5 7m0 1A1.5 1.5 0 0 0 10 9.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 13 9.5A1.5 1.5 0 0 0 11.5 8m-4.7 4.36l4.7 7.73l4.7-7.73c.51-.86.8-1.81.8-2.86A5.5 5.5 0 0 0 11.5 4A5.5 5.5 0 0 0 6 9.5c0 1.05.29 2 .8 2.86m10.25.52L11.5 22l-5.55-9.12C5.35 11.89 5 10.74 5 9.5A6.5 6.5 0 0 1 11.5 3A6.5 6.5 0 0 1 18 9.5c0 1.24-.35 2.39-.95 3.38" stroke-width="0" stroke="#1A1A1A" />
                            </svg>
                        </div>
                        <div class="info-content">
                            <div class="info-title">Endereço</div>
                            <div class="info-description">Aracaju, Sergipe, Brasil</div>
                        </div>
                    </div>
                    <div class="info-contact" @click="copyText('abraaoreispersonal@gmail.com')">
                        <div class="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                                <path fill="#1A1A1A" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z" stroke-width="0" stroke="#1A1A1A" />
                            </svg>
                        </div>
                        <div class="info-content">
                            <div class="info-title">Email</div>
                            <div class="info-description">abraaoreispersonal@gmail.com</div>
                        </div>
                    </div>
                    <div class="info-contact" @click="copyText('79996616917')">
                        <div class="info-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32">
                                <path fill="#1A1A1A" d="M13.5 24a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM10.25 2A3.25 3.25 0 0 0 7 5.25v21.5A3.25 3.25 0 0 0 10.25 30h11.5A3.25 3.25 0 0 0 25 26.75V5.25A3.25 3.25 0 0 0 21.75 2zM8 5.25A2.25 2.25 0 0 1 10.25 3h11.5A2.25 2.25 0 0 1 24 5.25v21.5A2.25 2.25 0 0 1 21.75 29h-11.5A2.25 2.25 0 0 1 8 26.75z" stroke-width="0.4" stroke="#1A1A1A" />
                            </svg>
                        </div>
                        <div class="info-content">
                            <div class="info-title">Telefone</div>
                            <div class="info-description">79 9 9661 6917</div>
                        </div>
                    </div>
                </div>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125325.97311428112!2d-37.18379433485042!3d-11.005828234731723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab04015be27cd%3A0x804434fd92ec3b36!2sAracaju%2C%20SE!5e0!3m2!1spt-BR!2sbr!4v1748620585785!5m2!1spt-BR!2sbr" :width="mapWidth" :height="mapHeight" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="form-container">
                    <div class="form-header">
                        <div class="form-header-title">Pronto para começar?</div>
                        <div class="form-header-subtitle">Entre em contato comigo para darmos <span class="highlight">start</span> no seu próximo grande projeto!</div>
                    </div>
                    <div class="form-content">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
    height: 100%;
    width: 100%;

    color: var(--text);

    padding: 0 148px;

    h2 {
        font-size: var(--font-xxl);
        font-weight: 900;
    }

    p {
        color: var(--text-light);
        font-size: var(--font-lg);
    }

    a {
        text-decoration: none;
    }

    section#aboutMe {
        padding: 80px 76px;

        .section-container {
            display: flex;
            flex-flow: row wrap-reverse;
            justify-content: center;
            align-items: center;
            gap: 40px 64px;

            width: 100%;

            .section-history-content {
                display: flex;
                flex-direction: column;
                gap: 40px;

                max-width: 920px;
                width: 100%;

                .history-description {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);

                    text-align: justify;
                }

                .action-buttons {
                    display: flex;
                    justify-content: space-between;

                    .network-buttons-container {
                        display: flex;
                        gap: var(--space-md);

                        .network-button {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            height: 56px;
                            width: 56px;

                            border: 1px solid var(--principal);
                            border-radius: 30px;
                        }
                        
                        .network-button:hover {
                            border: 2px solid var(--principal);
                        }
                    }
                }
            }
        }
    }

    .standard-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 64px;

        padding: 92px 0;
    }

    section#education {
        .education-cards {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 56px;
        }
    }

    section#services {
        .service-cards {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 56px 104px;
        }
    }

    section#skills {
        .skills-columns {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 80px;

            width: 100%;

            .skill-column {
                display: flex;
                flex-direction: column;
                gap: var(--space-lg);

                max-width: 400px;
                width: 100%;
            }

            .skill-cards {
                display: flex;
                flex-direction: column;
                gap: var(--space-md);
            }

            .skills-type {
                width: 100%;

                text-align: center;
                font-size: var(--font-xl);
                line-height: 32px;
            }
        }
    }

    section#contact {
        display: flex;
        flex-direction: column;
        gap: 104px;

        .section-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-xs);

            .section-subtitle {
                color: var(--text-light);
                font-size: var(--font-lg);
                font-weight: 300;
                text-align: center;
            }
        }

        .section-content {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 104px;

            width: 100%;

            .infos-container {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                gap: 64px;

                width: 100%;

                .info-contact {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-sm);

                    width: 354px;

                    .info-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: var(--space-xs);

                        .info-title {
                            font-size: var(--font-xl);
                        }

                        .info-description {
                            color: var(--text-light);
                            font-size: var(--font-lg);
                            text-align: center;
                        }
                    }
                }

                .info-contact:nth-last-of-type(-n+2) {
                    cursor: pointer;
                }
            }

            .form-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: var(--space-lg);

                max-width: 960px;
                width: 100%;

                .form-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-xs);

                    .form-header-title {
                        font-size: var(--font-xl);
                    }

                    .form-header-subtitle {
                        color: var(--text-light);
                        font-size: var(--font-lg);
                        font-weight: 300;
                        text-align: center;

                        .highlight {
                            font-weight: 700;
                            font-style: italic;
                        }
                    }
                }

                .form-content {
                    width: 100%;
                }
            }
        }
    }
}

@media screen and (max-width: 1199px) {
    main {
        padding: 0 80px;
    }
}

@media screen and (max-width: 759px) {
    main {
        padding: 0 32px;

        #aboutMe {
            padding: 80px 32px !important;

            a.button-filled {
                width: 200px;
            }
        }
    }
}

@media screen and (max-width: 599px) {
    main {
        h2 {
            font-size: var(--font-xxl);
        }

        #aboutMe {
            padding: 56px 32px !important;

            img {
                width: 300px;
            }

            p {
                font-size: var(--font-md);
            }

            a.button-filled {
                width: 152px;
                font-size: var(--font-md) !important;
            }
        }
    }
}

@media screen and (max-width: 520px) {
    main {
        h2 {
            font-size: var(--font-xl);
        }

        #aboutMe {
            img {
                width: 220px !important;
            }
    
            .action-buttons {
                flex-direction: column;
                align-items: center;
                gap: 24px;
    
                .network-buttons-container {
                    justify-content: space-evenly;
    
                    width: 100%;
                }
            }
        }

        section#skills {
            .skills-columns {
                gap: 64px;
            }
            .skills-type {
                font-size: var(--font-lg) !important;
            }
        }

        section#contact {
            gap: 64px;

            .section-header {
                .section-subtitle {
                    font-size: var(--font-md);
                }
            }

            .section-content {
                .infos-container {
                    gap: 40px;

                    .info-contact {
                        .info-icon {
                            height: 48px;
                            width: 48px;
                            
                            svg {
                                height: 100%;
                                width: 100%;
                            }
                        }

                        .info-content {
                            .info-title {
                                font-size: var(--font-lg);
                            }

                            .info-description {
                                font-size: var(--font-md);
                            }
                        }
                    }
                }

                .form-container {
                    .form-header {
                        .form-header-title {
                            font-size: var(--font-lg);
                        }

                        .form-header-subtitle {
                            font-size: var(--font-md);
                        }
                    }
                }
            }
        }
    
        .standard-section {
            padding: 56px 0;
        }
    }
}

@media screen and (max-width: 410px) {
    main {
        #aboutMe {
            padding: 40px 0 !important;
        }

        section#skills {
            gap: 40px;
        }
    }
}
</style>