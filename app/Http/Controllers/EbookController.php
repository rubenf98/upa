<?php

namespace App\Http\Controllers;

use App\Http\Resources\EbookResource;
use App\Models\Ebook;
use Illuminate\Http\Request;

class EbookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EbookResource::collection(Ebook::all());
    }


    /**
     * Download a resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function download(Ebook $ebook)
    {
        $content_type = 'application/pdf';
        $extension = '.pdf';

        if (str_contains('.ppsx', $ebook->file)) {
            $content_type = 'application/vnd.openxmlformats-officedocument.presentationml.slideshow';
            $extension = '.ppsx';
        }

        $headers = [
            'Content-Type' => $content_type,
        ];

        return response()->download(storage_path("app" . $ebook->file), 'filename' .  $extension, $headers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ebook  $ebook
     * @return \Illuminate\Http\Response
     */
    public function show(Ebook $ebook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ebook  $ebook
     * @return \Illuminate\Http\Response
     */
    public function edit(Ebook $ebook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ebook  $ebook
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ebook $ebook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ebook  $ebook
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ebook $ebook)
    {
        //
    }
}
