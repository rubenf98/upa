<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::create([
            'title' => "oferta gratuita",
            'subtitle' => "Sessão gratuita disponibilizada a qualquer utilizador que se registe na plataforma",
            'description' => "Sessão gratuita disponibilizada a qualquer utilizador que se registe na plataforma! Esta é composta por uma dança coreográfica snetada e um jogo musical na mesa.",
            'thumbnail' => "/image/sessions/free.jpg",
        ]);

        Course::create([
            'title' => "danças coreográficas sentadas",
            'subtitle' => "Modalidade de baixo impacto físico, que tem como propósito a realização de um conjunto de gestos e movimentos simples e fáceis de executar. O objetivo é estimular as capacidades físicas e cognitivas, tais como: a memória, a atenção, a coordenação, entre outras.",
            'description' => "O bater de mãos, de pés; o dar estalos; o levar as mãos ao pescoço, à cabeça, aos ombros; o elevar as pernas, os braços, os joelhos, etc., são movimentos que fazem parte desta modalidade. Além do divertimento que esta atividade proporciona, também oferece benefícios a nível físico, cognitivo, emocional e social.",
            'thumbnail' => "/image/sessions/sentado.jpg",
            'price' => 32
        ]);

        Course::create([
            'title' => "jogos musicais na mesa",
            'subtitle' => "Mais do que proporcionar divertimento, o jogo musical ajuda no treino dos domínios da escuta, da concentração e da expressão.",
            'description' => "Mais do que proporcionar divertimento, o jogo musical ajuda no treino dos domínios da escuta, da concentração e da expressão. Pode ser, incontestavelmente, uma estratégia eficaz para a manutenção cognitiva, motora, social e emocional do idoso. Ele tem o poder de cativar quem nele participa!",
            'thumbnail' => "/image/sessions/mesa.jpg",
            'price' => 32
        ]);

        Course::create([
            'title' => "dança coreográfica de natal",
            'subtitle' => "Mais do que proporcionar divertimento, o jogo musical ajuda no treino dos domínios da escuta, da concentração e da expressão.",
            'description' => "Mais do que proporcionar divertimento, o jogo musical ajuda no treino dos domínios da escuta, da concentração e da expressão. Pode ser, incontestavelmente, uma estratégia eficaz para a manutenção cognitiva, motora, social e emocional do idoso. Ele tem o poder de cativar quem nele participa!",
            'thumbnail' => "/image/sessions/natal.jpg",
            'price' => 32
        ]);
    }
}
