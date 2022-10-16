<!DOCTYPE html>
<html lang="en">

<body>
    <div class="email-container" style="max-width: 600px;width: 90%;margin: auto;display: block;">
        @include('emails.common.header')

        <h1 class="title" style="font-weight: normal;">Bem vindo!</h1>
        <div class="text" style="font-size: 1em;">
            Caro utilizador(a), está a receber este email no seguimento do seu pedido de recuperação de password na plataforma Unidos Pela Atividade.
        </div>

        <div class="button-container flex-center">
            <a class="btn-url" href="https://unidospelaatividade.pt/login?token={{$token}}&mode=4" style="text-decoration: none;">
                <input class="button btn-slide-line" type="button" value="Definir nova palavra-passe"
                    style="margin: 25px auto;display: block; padding: 24px 36px;outline: none;border: none;text-decoration: none;cursor: pointer;text-transform: uppercase;border-radius: 8px;color: white;background: #289294;font-weight: bold;font-size: .9em;transition: .4s ease-out;">
            </a>
        </div>

        <div class="warning-container flex-center"
            style="text-align: center;color: gray;font-size: .8em;margin-bottom: 30px;">
            (Caso não tenha efetuado reste pedido, pode ignorar o email)
        </div>

        @include('emails.common.footer')
    </div>
</body>

</html>


<style>
    .email-container {
        max-width: 600px;
        width: 90%;
        margin: auto;
        display: block;
    }

    .title {
        font-weight: normal;
    }

    .text {
        font-size: 1em;
    }

    .footer {
        font-weight: bold;
        margin-top: 3px;
    }

    .flex-center {
        display: flex;
        justify-content: center;
    }

    .password-container {
        color: #289294;
        margin-top: 30px;
        font-size: 1.2em;
        font-weight: bold;
    }

    .warning-container {
        color: gray;
        font-size: .8em;
        margin-bottom: 30px;
    }
</style>