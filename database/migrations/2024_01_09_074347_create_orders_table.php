<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('reference_number');
            $table->string('uuid');
            $table->string('slug');
            $table->string('customer_name');
            $table->string('customer_email')->nullable();
            $table->string('customer_phone')->nullable();
            $table->string('customer_city')->nullable();
            $table->string('customer_address')->nullable();
            $table->string('customer_area')->nullable();
            $table->string('customer_country')->nullable();
            $table->longText("order_notes")->nullable();
            $table->double('subtotal')->nullable();
            $table->double('total')->nullable();
            $table->double('total_discount')->nullable();
            $table->enum('status', ['new', 'pickup','deliverd','return','cancelled'])->default('new'); //
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
