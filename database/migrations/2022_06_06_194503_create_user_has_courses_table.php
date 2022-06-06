<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserHasCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_has_courses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("ussadsaer_id");
            $table->unsignedBigInteger("course_id");
            $table->timestamps();

            $table->foreign("uasdsadser_id")->references("id")->on("users");
            $table->foreign("course_id")->references("id")->on("courses");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_has_courses');
    }
}
