<script setup></script>

<template>
    <form action="https://formspree.io/f/xwpvkwll" method="post">
        <div class="form-fields">
            <div class="form-row">
                <div class="input-field">
                    <label for="iname">Nome</label>
                    <input type="text" name="name" id="iname" placeholder="Digite seu nome" required>
                </div>
                <div class="input-field">
                    <label for="iemail">Email</label>
                    <input type="email" name="email" id="iemail" placeholder="Digite seu email" required>
                </div>
            </div>
            <div class="input-field">
                <label for="isubject">Assunto</label>
                <input type="text" name="subject" id="isubject" placeholder="Digite o título da mensagem" required>
            </div>
            <div class="input-field">
                <label for="imessage">Mensagem</label>
                <textarea name="message" id="imessage" placeholder="Digite sua mensagem" required/>
            </div>
        </div>
        <div class="form-row">
            <button class="button-hollow" @click.prevent>Limpar</button>
            <button class="button-filled" type="submit">Enviar</button>
        </div>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);

    width: 100%;

    .form-row {
        display: flex;
        justify-content: center;
        gap: var(--space-md);
    }

    .form-fields {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);

        .input-field {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);

            width: 100%;
    
            label {
                font-size: var(--font-lg);
            }

            input {
                height: 64px;

                padding: 16px;

                font-size: var(--font-md);

                background-color: var(--background);

                border: 1px solid var(--border-2);
                border-radius: 10px;
            }

            input::placeholder {
                color: var(--placeholder);
                font-size: var(--font-md);
                font-weight: 300;
            }

            input:focus {
                outline: 1px solid var(--principal);
            }
        }
    }

    textarea {
        display: flex;
        align-items: flex-start;

        height: 128px;

        padding: 16px;

        font-size: var(--font-md);
        
        background-color: var(--background);

        border: 1px solid var(--border-2);
        border-radius: 10px;

        resize: none;
    }

    textarea::placeholder {
        color: var(--placeholder);
        font-size: var(--font-md);
        font-weight: 300;
    }

    textarea:focus {
        outline: 1px solid var(--principal);
    }
}

@media screen and (min-width: 400px) and (max-width: 1100px) {
    form {
        .form-row:nth-of-type(1) {
            flex-direction: column !important;
        }
    }
}
</style>