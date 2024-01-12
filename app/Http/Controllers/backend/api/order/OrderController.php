<?php

namespace App\Http\Controllers\backend\api\order;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //
    public function index(Request $request){
        $query = request('query');
        $orders = Order::latest();
        if (empty($query)) {
            $orders = $orders->where('reference_number', 'like', '%' . $query . '%');
        }
        $orders = $orders->with([ 'items', 'user'])->paginate(perPage());

        return response()->json(['orders' => $orders]);
    }

    public function orderDetails(Request $request){
        $order=Order::where('uuid',$request->uuid)->with('user','items')->first();

        return response()->json(['order' => $order]);

    }


}
