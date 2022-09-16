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
                'name' => "balaio", 'course_id' => 1, 'title' => "Balaio", 'video_duration' => 1.53
            ],
            [
                'name' => "circulo_siciliano", 'course_id' => 1, 'title' => "Círculo Siciliano", 'video_duration' => 5.00
            ],
            [
                'name' => "drei_temperamente", 'course_id' => 1, 'title' => "Drei Temperamente", 'video_duration' => 3.47
            ],
            [
                'name' => "glencastle_polka", 'course_id' => 1, 'title' => "Glencastle Polka", 'video_duration' => 6.50
            ],
            [
                'name' => "minoesjka", 'course_id' => 1, 'title' => "Minoesjka", 'video_duration' => 5.40
            ],
            [
                'name' => "rosa_amarela", 'course_id' => 1, 'title' => "Rosa Amarela", 'video_duration' => 5.28
            ],
            [
                'name' => "step_please", 'course_id' => 1, 'title' => "STEP PLEASE", 'video_duration' => 6.03
            ],
            [
                'name' => "syncopated_clock", 'course_id' => 1, 'title' => "Syncopated-clock", 'video_duration' => 6.10
            ],
            [
                'name' => "troika", 'course_id' => 1, 'title' => "Troika", 'video_duration' => 3.41
            ],
            [
                'name' => "the_chimes_of_dunkirk", 'course_id' => 1, 'title' => "The Chimes of Dunkirk", 'video_duration' => 6.13
            ],






            [
                'name' => "balaio", 'course_id' => 2, 'title' => "Balaio", 'video_duration' => 4.46
            ],
            [
                'name' => "bim_bam_bom", 'course_id' => 2, 'title' => "Bim Bam Bom", 'video_duration' => 4.30
            ],
            [
                'name' => "bird_dance", 'course_id' => 2, 'title' => "Bird Dance", 'video_duration' => 4.11
            ],
            [
                'name' => "canta_canta", 'course_id' => 2, 'title' => "Canta Canta, Minha Gente", 'video_duration' => 5.21
            ],
            [
                'name' => "heavy_and_light", 'course_id' => 2, 'title' => "Heavy and Light", 'video_duration' => 3.53
            ],

            [
                'name' => "kryzachok", 'course_id' => 2, 'title' => "Kryzachok", 'video_duration' => 3.15
            ],
            [
                'name' => "la_raspa", 'course_id' => 2, 'title' => "La Raspa", 'video_duration' => 3.50
            ],
            [
                'name' => "malhao", 'course_id' => 2, 'title' => "Malhão Malhão", 'video_duration' => 5.03
            ],
            [
                'name' => "chiribim", 'course_id' => 2, 'title' => "Chiribim", 'video_duration' => 5.17
            ],
            [
                'name' => "mexican_waltz", 'course_id' => 2, 'title' => "Mexican Waltz", 'video_duration' => 5.07
            ],
        ];

        Content::create([
            'presentation' => true,
            'filename' => "01_introduction",
            'video_duration' => 1.53,
            'course_id' => 1,
            'title' => "Introdução"
        ]);

        Content::create([
            'presentation' => true,
            'filename' => "02_introduction",
            'video_duration' => 2.10,
            'course_id' => 2,
            'title' => "Introdução"
        ]);

        foreach ($items as $item) {
            Content::create([
                'filename' => "0" . $item["course_id"] . "_" . $item["name"],
                'video_duration' => $item["video_duration"],
                'course_id' => $item['course_id'],
                'title' => $item["title"]
            ]);
        }
    }
}
