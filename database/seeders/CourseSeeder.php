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
            'title' => "SESSÃO Nº1 DANÇA COREOGRÁFICA SENTADA",
            'thumbnail' => "/courses/thumbnail/thumbnail.png"
        ]);
        Course::create([
            'title' => "SESSÃO Nº1 JOGOS MUSICAIS NA MESA",
            'thumbnail' => "/courses/thumbnail/thumbnail.png"
        ]);
    }
}
