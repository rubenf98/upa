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
                'name' => "balaio", 'course_id' => 1, 'title' => "Balaio"
            ],
            [
                'name' => "circulo_siciliano", 'course_id' => 1, 'title' => "Círculo Siciliano"
            ],
            [
                'name' => "drei_temperamente", 'course_id' => 1, 'title' => "Drei Temperamente"
            ],
            [
                'name' => "glencastle_polka", 'course_id' => 1, 'title' => "Glencastle Polka"
            ],
            [
                'name' => "minoesjka", 'course_id' => 1, 'title' => "Minoesjka"
            ],
            [
                'name' => "rosa_amarela", 'course_id' => 1, 'title' => "Rosa Amarela"
            ],
            [
                'name' => "step_please", 'course_id' => 1, 'title' => "STEP PLEASE"
            ],
            [
                'name' => "syncopated_clock", 'course_id' => 1, 'title' => "Syncopated-clock"
            ],
            [
                'name' => "troika", 'course_id' => 1, 'title' => "Troika"
            ],
            [
                'name' => "the_chimes_of_dunkirk", 'course_id' => 1, 'title' => "The Chimes of Dunkirk"
            ],
            [
                'name' => "balaio", 'course_id' => 2, 'title' => "Balaio"
            ],
            [
                'name' => "bim_bam_bom", 'course_id' => 2, 'title' => "Bim Bam Bom"
            ],
            [
                'name' => "bird_dance", 'course_id' => 2, 'title' => "Bird Dance"
            ],
            [
                'name' => "canta_canta", 'course_id' => 2, 'title' => "Canta Canta, Minha Gente"
            ],
            [
                'name' => "chiribim", 'course_id' => 2, 'title' => "Chiribim"
            ],
            [
                'name' => "heavy_and_light", 'course_id' => 2, 'title' => "Heavy and Light"
            ],
            [
                'name' => "kryzachok", 'course_id' => 2, 'title' => "Kryzachok"
            ],
            [
                'name' => "la_raspa", 'course_id' => 2, 'title' => "La Raspa"
            ],
            [
                'name' => "malhao", 'course_id' => 2, 'title' => "Malhão Malhão"
            ],
            [
                'name' => "mexican_waltz", 'course_id' => 2, 'title' => "Mexican Waltz"
            ],
        ];

        $content_types = [
            [
                'id' => 1,
                'name' => "mp3",
            ],
            [
                'id' => 2,
                'name' => "mp4",
            ],
            [
                'id' => 3,
                'name' => "pdf",
            ]
        ];

        Content::create([
            'presentation' => true,
            'path' => "/courses/mp4/01_introduction.mp4",
            'content_type_id' => 2,
            'course_id' => 1,
            'title' => "Introdução"
        ]);

        Content::create([
            'presentation' => true,
            'path' => "/courses/mp4/02_introduction.mp4",
            'content_type_id' => 2,
            'course_id' => 2,
            'title' => "Introdução"
        ]);

        foreach ($items as $item) {
            foreach ($content_types as $content_type) {
                Content::create([
                    'path' => "/courses/" . $content_type["name"] . "/0" . $item["course_id"] . "_" . $item["name"] . "." . $content_type["name"],
                    'content_type_id' => $content_type["id"],
                    'course_id' => 1,
                    'title' => $item["title"]
                ]);
            }
        }
    }
}
