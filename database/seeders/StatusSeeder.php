<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::create([
            'name' => "pendente comprovativo",
        ]);
        Status::create([
            'name' => "pendente confirmação",
        ]);
        Status::create([
            'name' => "pago",
        ]);
    }
}
