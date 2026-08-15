<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // get all
    public function index() {
        return Product::all();
    }

    // get one
    public function show(Product $product) {
        return $product;
    }


}
