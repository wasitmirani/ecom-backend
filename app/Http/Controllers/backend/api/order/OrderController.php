<?php

namespace App\Http\Controllers\backend\api\order;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    public function index(Request $request){
        $query = request('query');
        $orders = Order::latest();
        if (empty($query)) {
            $orders = $orders->where('name', 'like', '%' . $query . '%');
        }
        $orders = $orders
            ->with([ 'items', 'user'])
            ->paginate(perPage());

        return response()->json(['orders' => $orders]);
    }


}
