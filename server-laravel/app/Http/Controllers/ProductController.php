<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // get all
    public function index()
    {

        return [
            'success' => true,
            'message' => "Products fetched successfully",
            'products' => Product::all()
        ];

        // Example
        // return response->json([
        //     'success' => true,
        //     'message' => "Products fetched successfully",
        //     'products' => Product::all()
        // ], 200);
    }

    // get one
    public function show(Product $product)
    {
        return $product;
    }
}
