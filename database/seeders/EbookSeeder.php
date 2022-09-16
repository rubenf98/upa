<?php

namespace Database\Seeders;

use App\Models\Ebook;
use Illuminate\Database\Seeder;

class EbookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume I",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume1.jpg",
            'price' => 8,
            'file'=> '/ebooks/50_1.jpg'
        ]);

        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume II",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume2.jpg",
            'price' => 8,
            'file'=> '/ebooks/50_2.jpg'
        ]);

        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume III",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume3.jpg",
            'price' => 8,
            'file'=> '/ebooks/50_3.jpg'
        ]);

        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume IV",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume4.jpg",
            'price' => 8,
            'file'=> '/ebooks/50_4.jpg'
        ]);

        Ebook::create([
            'title' => "24 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume I",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume4.jpg",
            'price' => 4,
            'file'=> '/ebooks/24_1.jpg'
        ]);
    }
}
