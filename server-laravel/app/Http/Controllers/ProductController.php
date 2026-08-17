<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
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

    public function store(Request $request, Product $product)
    {
        $validated = $request->validate([
            "name" => ["required", "string", "unique:products,name"],
            // desc, price, stock
            "description" => ["string"],
            "price" => ["required", "numeric", "gt:0"]
        ]);

        // [
        //     "name" => "required|string",
        //     // desc, price, stock
        //     "description" => "string",
        //     "price" => "integer"
        // ]

        if (isset($validated["name"])) {
            $validated["slug"] = Str::slug($validated["name"]);
        }


    }
}
