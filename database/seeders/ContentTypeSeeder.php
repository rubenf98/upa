<?php

namespace Database\Seeders;

use App\Models\ContentType;
use Illuminate\Database\Seeder;

class ContentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ContentType::create([
            'name' => "mp3",
        ]);

        ContentType::create([
            'name' => "mp4",
        ]);

        ContentType::create([
            'name' => "pdf",
        ]);
    }
}
