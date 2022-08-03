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
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Merriweather:ital,wght@0,300;0,400;1,700&display=swap"
        rel="stylesheet">

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
        font-family: 'Merriweather', serif;
        scroll-behavior: smooth;
    }

    h1, h2, h3 {
        font-family: 'DM Serif Display', serif;
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

<body>
    <div id="index">
        <script src="{{mix('js/app.js')}}"></script>
    </div>
</body>



</html>