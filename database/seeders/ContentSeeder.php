<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;
use phpDocumentor\Reflection\PseudoTypes\True_;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                'name' => "chiribim", 'course_id' => 1, 'title' => "Chiribim", 'video_duration' => 05.18, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "moroaca", 'course_id' => 1, 'title' => "Moroaca", 'video_duration' => 04.45, 'has_audio' => true, 'has_instructions' => true
            ],


            #--------------------------------------------------------------------------------------------------------------------

            [
                'name' => "balaio", 'course_id' => 2, 'title' => "Balaio", 'video_duration' => 01.53, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "circulo_siciliano", 'course_id' => 2, 'title' => "Círculo Siciliano", 'video_duration' => 05.00, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "drei_temperamente", 'course_id' => 2, 'title' => "Drei Temperamente", 'video_duration' => 03.47, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "glencastle_polka", 'course_id' => 2, 'title' => "Glencastle Polka", 'video_duration' => 06.50, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "minoesjka", 'course_id' => 2, 'title' => "Minoesjka", 'video_duration' => 05.40, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "rosa_amarela", 'course_id' => 2, 'title' => "Rosa Amarela", 'video_duration' => 05.28, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "step_please", 'course_id' => 2, 'title' => "STEP PLEASE", 'video_duration' => 06.03, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "syncopated_clock", 'course_id' => 2, 'title' => "Syncopated-clock", 'video_duration' => 06.10, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "troika", 'course_id' => 2, 'title' => "Troika", 'video_duration' => 03.41, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "the_chimes_of_dunkirk", 'course_id' => 2, 'title' => "The Chimes of Dunkirk", 'video_duration' => 06.13, 'has_audio' => true, 'has_instructions' => true
            ],


            #--------------------------------------------------------------------------------------------------------------------

            [
                'name' => "balaio", 'course_id' => 3, 'title' => "Balaio", 'video_duration' => 04.46, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "bim_bam_bom", 'course_id' => 3, 'title' => "Bim Bam Bom", 'video_duration' => 04.30, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "bird_dance", 'course_id' => 3, 'title' => "Bird Dance", 'video_duration' => 04.11, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "canta_canta", 'course_id' => 3, 'title' => "Canta Canta, Minha Gente", 'video_duration' => 05.21, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "heavy_and_light", 'course_id' => 3, 'title' => "Heavy and Light", 'video_duration' => 03.53, 'has_audio' => true, 'has_instructions' => true
            ],

            [
                'name' => "kryzachok", 'course_id' => 3, 'title' => "Kryzachok", 'video_duration' => 03.15, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "la_raspa", 'course_id' => 3, 'title' => "La Raspa", 'video_duration' => 03.50, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "malhao", 'course_id' => 3, 'title' => "Malhão Malhão", 'video_duration' => 05.03, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "chiribim", 'course_id' => 3, 'title' => "Chiribim", 'video_duration' => 05.17, 'has_audio' => true, 'has_instructions' => true
            ],
            [
                'name' => "mexican_waltz", 'course_id' => 3, 'title' => "Mexican Waltz", 'video_duration' => 05.07, 'has_audio' => true, 'has_instructions' => true
            ],



            #--------------------------------------------------------------------------------------------------------------------



            [
                'name' => "circulo_cartao", 'course_id' => 4, 'title' => "Construção do círculo em cartão", 'video_duration' => 06.04, 'has_instructions' => true, 'has_audio' => false
            ],
            [
                'name' => "leques", 'course_id' => 4, 'title' => "Construção dos leques", 'video_duration' => 10.45, 'has_instructions' => true, 'has_audio' => false
            ],
            [
                'name' => "bengala", 'course_id' => 4, 'title' => "Enfeitamento da bengala de Natal", 'video_duration' => 06.35, 'has_instructions' => true, 'has_audio' => false
            ],
            [
                'name' => "pulseiras", 'course_id' => 4, 'title' => "Elaboração das pulseiras com fitas", 'video_duration' => 02.40, 'has_instructions' => true, 'has_audio' => false
            ],
            [
                'name' => "holly_jolly", 'course_id' => 4, 'title' => "Danca coreográfica de pé Holly Jolly Christmas", 'video_duration' => 05.25, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "let_it_snow", 'course_id' => 4, 'title' => "Danca coreográfica de pé Let It Snow", 'video_duration' => 05.04, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "acorda", 'course_id' => 4, 'title' => "Danca coreográfica sentada Acorda que ja é Natal", 'video_duration' => 08.33, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "cantilena", 'course_id' => 4, 'title' => "Danca coreográfica sentada Cantilena da Lua Nov", 'video_duration' => 06.49, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "christmas", 'course_id' => 4, 'title' => "Danca coreográfica sentada Christmas", 'video_duration' => 06.38, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "cheira", 'course_id' => 4, 'title' => "Danca coreográfica sentada Já cheira a Natal", 'video_duration' => 06.50, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "criancas", 'course_id' => 4, 'title' => "Danca coreográfica sentada Natal das crianças", 'video_duration' => 06.44, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "estrelas", 'course_id' => 4, 'title' => "Danca coreográfica sentada Pó de Estrelas", 'video_duration' => 05.57, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "natal", 'course_id' => 4, 'title' => "Danca coreográfica sentada Se é Natal", 'video_duration' => 06.36, 'has_instructions' => true, 'has_audio' => true
            ],
            [
                'name' => "winter", 'course_id' => 4, 'title' => "Danca coreográfica sentada Winter Wonderland", 'video_duration' => 06.10, 'has_instructions' => true, 'has_audio' => true
            ],
        ];

        Content::create([
            'presentation' => true,
            'filename' => "02_introduction",
            'video_duration' => 01.53,
            'course_id' => 2,
            'title' => "Introdução",
            'has_audio' => false,
            'has_instructions' => false
        ]);

        Content::create([
            'presentation' => true,
            'filename' => "03_introduction",
            'video_duration' => 02.10,
            'course_id' => 3,
            'title' => "Introdução",
            'has_audio' => false,
            'has_instructions' => false
        ]);

        Content::create([
            'presentation' => true,
            'filename' => "04_introduction",
            'video_duration' => 02.50,
            'course_id' => 4,
            'title' => "Introdução",
            'has_audio' => false,
            'has_instructions' => false
        ]);


        foreach ($items as $item) {
            Content::create([
                'filename' => "0" . $item["course_id"] . "_" . $item["name"],
                'video_duration' => $item["video_duration"],
                'course_id' => $item['course_id'],
                'title' => $item["title"],
                'has_audio' => $item['has_audio'],
                'has_instructions' => $item["has_instructions"]
            ]);
        }
    }
}
