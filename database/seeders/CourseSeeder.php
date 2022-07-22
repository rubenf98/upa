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
            'title' => "danças coreográficas sentadas",
            'subtitle' => "From the New York Times bestselling author",
            'description' => "From the #1 New York Times bestselling author of The Raven Boys, a mesmerizing story of dreams and desires, death and destiny.",
            'thumbnail' => "/image/session/sentado.jpg",
            'price' => 32
        ]);
        Course::create([
            'title' => "jogos musicais na mesa",
            'subtitle' => "From the New York Times bestselling author",
            'description' => "From the #1 New York Times bestselling author of The Raven Boys, a mesmerizing story of dreams and desires, death and destiny.",
            'thumbnail' => "/image/session/mesa.jpg",
            'price' => 32
        ]);
    }
}
