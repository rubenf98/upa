<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">



    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffe32b">
    <meta name="msapplication-TileColor" content="#ffe32b">
    <meta name="theme-color" content="#ffe32b">



    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <meta name="keywords"
        content="Fast, Rope, fastrope, madeira, island, canyoning, canionismo, caminhada, hiking, adventure, experience, aventura, fast, rope">
    <meta name="author" content="Rúben Freitas">
    <meta name="description"
        content="Fast Rope is more than a Adventure company, is a team that we all share the passion for Canyoning, Hiking and much more...we also do private and personalized tours, you choose what you want to do and we make it happen.">

    <title>Unidos Pela Atividade</title>
</head>

<style>
    html,
    body,
    #index {
        height: 100%;
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
    }

    h1,
    h2,
    h3 {
        font-family: 'Open Sans', sans-serif;
    }

    .full-page-loader {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background: #ffffff;
        box-sizing: border-box;
        overflow: hidden;

        animation: fade-out 300ms forwards;
        animation-delay: 2.4s;
    }

    .loader {
        display: flex;
        justify-content: center;
        gap: 8px;
    }

    .loader div {
        width: 40px;
        height: 40px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #289294;
        border-radius: 50%;
    }

    .loader div:before,
    .loader div:after {
        content: '';
        width: 40px;
        height: 40px;
        position: absolute;
        border-radius: 50%;
    }

    .loader div:before {
        background-color: rgb(255, 255, 255);
        animation: scale-1 2400ms linear infinite;
    }

    .loader div:after {
        background-color: #289294;
        animation: scale-2 2400ms linear infinite;
    }

    .loader div:nth-child(2):before,
    .loader div:nth-child(2):after {
        animation-delay: 300ms;
    }

    .loader div:nth-child(3):before,
    .loader div:nth-child(3):after {
        animation-delay: 600ms;
    }

    .loader div:nth-child(4):before,
    .loader div:nth-child(4):after {
        animation-delay: 900ms;
    }

    .loader div:nth-child(5):before,
    .loader div:nth-child(5):after {
        animation-delay: 1200ms;
    }

    .loader div:nth-child(6):before,
    .loader div:nth-child(6):after {
        animation-delay: 1500ms;
    }

    @keyframes scale-1 {
        0% {
            transform: scale(0);
            z-index: 2;
        }

        50%,
        100% {
            transform: scale(1);
        }
    }

    @keyframes scale-2 {

        0%,
        50% {
            transform: scale(0);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes fade-out {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }


    p {
        opacity: .9;
    }

    body {
        margin: 0;
        position: relative;
    }
</style>


<script>
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
</script>


<body oncontextmenu="return false;">
    <div id="index">
        <div class="full-page-loader">
            <div class="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <script src="{{mix('js/app01032023.js')}}"></script>
    </div>
</body>



</html>
