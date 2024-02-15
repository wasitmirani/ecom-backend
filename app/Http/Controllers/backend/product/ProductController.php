<?php

namespace App\Http\Controllers\backend\product;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function getProducts(){
        $query = request('query');

        $products = Product::latest();
        if (!empty($query)) {

            $products = $products->where('sku', 'like', '%' . $query . '%')
                                 ->orWhere('name', 'like', '%' . $query . '%');
        }
        $products = $products
            ->with([ 'category', 'user'])
            ->paginate(perPage());

       return response()->json(['products' => $products]);
    }
    public function index()
    {

        $query = request('query');

        $products = Product::latest();
        if (!empty($query)) {

            $products = $products->where('sku', 'like', '%' . $query . '%')
                                 ->orWhere('name', 'like', '%' . $query . '%');
        }
        $products = $products
            ->with([ 'category', 'user'])
            ->paginate(perPage());

        $categories = Category::select('id','name')->orderBy('name','ASC')->get();

        return responseJsonSuccess('products fetched successfully.',['categories' => $categories, 'products' => $products]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'category_id' => 'nullable|exists:categories,id',
            'name' => 'required|min:5|max:150|string',
            'sku'=>'required|unique:products',
            'description' => 'nullable|min:20|max:200|string',
            'type' => 'in:digital,physical,service',
            'price' => 'required|numeric',
            'discount' => 'numeric',
        ]);
        $images=array();
        if($files=$request->file('images')){
            foreach($files as $file){
                $name=genUUID().'-product.'. $file->getClientOriginalExtension();
                $file->move('product/images',$name);
                $images[]=$name;
            }
        }
        $product = Product::create([
            'uuid' => genUUID(),
            'category_id'=>$request->category_id,
            'user_id'=>$request->user()->id,
            'type'=>$request->type ?? 'physical',
            'slug'=>setSlug($request->name),
            'sku'=>$request->sku,
            'images'=>$images,
            'description' =>$request->description,
            'price' =>$request->price,
            'name'=>$request->name,
            'discount' =>$request->discount ?? 0,

        ]);

        return responseJsonSuccess('product has been created successfuly',['$product' => $product]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $uuid)
    {
        //
        return Product::where('uuid', $uuid)->with('category')->first();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $uuid)
    {
        //
         $request->validate([

            'category_id' => 'nullable|exists:categories,id',
            'name' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'discount' => 'numeric',
        ]);
        $product = Product::where('uuid',$uuid)->update([
            'category_id'=>$request->category_id,
            'description' =>$request->description,
            'price' =>$request->price,
            'name'=>$request->name,
            'sku'=>$request->sku,
            'slug'=>setSlug($request->name),
            'discount' =>$request->discount,

        ]);

        return responseJsonSuccess('product has been updated successfuly');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $product=Product::where('uuid',$id)->delete();
        if($product){
            return responseJsonSuccess('product has been deleted successfuly');
        }
        else {
            return response()->json(['message'=>'Product not found'],404);
        }
    }

    public function uploadProduct(Request $request){
        $request->validate([
            'file'=>['required','mimes:xlsx,xls'],
       ]);
        if($request->hasFile('file')){

                 $filePath = $request->file('file')->store('/public/products');
                $path= str_replace('public', 'storage', $filePath);
                $items = fastexcel()->import($path );
                foreach ($items as $key => $item) {
                    # code...
                    $is_product=Product::where('sku',$item['sku'])->first();
                    if(empty($is_product)){
                        $product = Product::create([
                            'uuid' => genUUID(),
                            'category_id'=>$item['category_id'] ?? null,
                            'user_id'=>$request->user()->id,
                            'type'=>$item['type'] ?? 'physical',
                         'slug'=>setSlug($item['name']),
                         'sku'=>$item['sku'],
                            'images'=>$item['images'] ?? [],
                            'description' =>$item['description'] ?? null,
                            'price' =>$item['price'],
                            'name'=>$item['name'],
                            'discount' =>$item['discount'] ?? 0,

                        ]);
                    }
                    else {
                        $product=Product::where('sku',$item['sku'])->update([
                            'description' =>$item['description']?? null,
                            'price' =>$item['price'],
                            'name'=>$item['name'],
                            'slug'=>setSlug($item['name']),
                            'discount' =>$item['discount']?? 0,

                        ]);
                    }

                }

            return response()->json(['message'=>'Product has been imported successfully']);
        }

    }
}
