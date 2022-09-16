<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(RoleSeeder::class);
        $this->call(StatusSeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(EbookSeeder::class);
        $this->call(ContentSeeder::class);
    }
}
