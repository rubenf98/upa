<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContentTypeRequest;
use App\Http\Resources\ContentTypeResource;
use App\Models\ContentType;
use Illuminate\Http\Request;

class ContentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ContentTypeResource::collection(ContentType::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContentTypeRequest $request)
    {
        $validator = $request->validated();
        $record = ContentType::create($validator);
        return new ContentTypeResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContentType  $contentType
     * @return \Illuminate\Http\Response
     */
    public function show(ContentType $contentType)
    {
        return new ContentTypeResource($contentType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContentType  $contentType
     * @return \Illuminate\Http\Response
     */
    public function update(ContentTypeRequest $request, ContentType $contenttype)
    {
        $validator = $request->validated();

        $contenttype->update($validator);

        return new ContentTypeResource($contenttype);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContentType  $contentType
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContentType $contenttype)
    {
        $contenttype->delete();

        return response()->json(null, 204);
    }
}
