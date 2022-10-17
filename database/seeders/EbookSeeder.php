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
            'title' => "10 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume I",
            'description' => "Atenção, orientação espacial, motricidade fina, cálculo, literatura escrita",
            'thumbnail' => "/image/products/10_volume1.jpg",
            'file' => '/ebooks/10_1.pdf'
        ]);

        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume I",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume1.jpg",
            'price' => 8,
            'file' => '/ebooks/50_1.pdf'
        ]);

        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume II",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume2.jpg",
            'price' => 8,
            'file' => '/ebooks/50_2.pdf'
        ]);

        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume III",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume3.jpg",
            'price' => 8,
            'file' => '/ebooks/50_3.pdf'
        ]);

        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume IV",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume4.jpg",
            'price' => 8,
            'file' => '/ebooks/50_4.pdf'
        ]);

        Ebook::create([
            'title' => "24 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume I",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/24_volume1.jpg",
            'price' => 4,
            'file' => '/ebooks/24_1.pdf'
        ]);

        Ebook::create([
            'title' => "50 Exercícios Estimulação Cognitiva",
            'subtitle' => "Volume V",
            'description' => "Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade",
            'thumbnail' => "/image/products/50_volume5.jpg",
            'price' => 8,
            'file' => '/ebooks/50_5.pdf'
        ]);

        Ebook::create([
            'title' => "Exercícios Estimulação Cognitiva Temáticos",
            'subtitle' => "Outono. Volume II",
            'description' => "Exercícios de atenção e perceção visual orientação espacial, literatura escrita e motricidade fina",
            'thumbnail' => "/image/products/25_outono.jpg",
            'price' => 4,
            'file' => '/ebooks/25_outono.pdf'
        ]);
    }
}
