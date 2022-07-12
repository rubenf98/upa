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
            'title' => "dança coreográfica sentada",
            'thumbnail' => "/courses/thumbnail/thumbnail.png"
        ]);
        Course::create([
            'title' => "jogos musicais na mesa",
            'thumbnail' => "/courses/thumbnail/thumbnail.png"
        ]);
    }
}
