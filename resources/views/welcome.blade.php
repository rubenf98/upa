<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;500;700&family=Merienda+One&family=Playfair+Display:ital,wght@0,500;1,900&display=swap"
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
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        scroll-behavior: smooth;
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