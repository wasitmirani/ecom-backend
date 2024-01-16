<?php

namespace App\Http\Controllers\backend\order;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //
    public function index(Request $request){
        $query = request('query');
        $orders = Order::latest();
        if (!empty($query)) {
            $orders = $orders->where('reference_number', 'like', '%' . $query . '%')
                            ->orWhere('customer_area','like', '%' . $query . '%')
                            ->orWhere('customer_phone','like', '%' . $query . '%');
        }
        if(!empty($request->status)) {
            $orders = $orders->where('status', $request->status);
        }
        if(isset($request->date)){

            $orders= $orders->whereDate('created_at', $request->date);
        }
        $orders = $orders->with([ 'items', 'user'])->paginate(perPage());

        return response()->json(['orders' => $orders]);
    }

    public function orderDetails(Request $request){
        $order=Order::where('uuid',$request->uuid)->with('user','items')->first();

        return response()->json(['order' => $order]);


    }
    public function cancelOrder(Request $request){
        $order=order::where('uuid',$request->uuid)->update(['status'=>'cancelled']);

        return response()->json(['message'=>'order has been cancelled successfully']);

    }

    public function updateAddress(Request $request){
        $order=order::where('uuid',$request->uuid)

        ->update(['customer_area'=>$request->area,
                 'customer_address'=>$request->address,
                 'customer_city'=>$request->city,
                ]);

        return response()->json(['message'=>'order has been updated successfully']);
    }
    public function updateStatus(Request $request){

        $order=Order::where('uuid',$request->uuid)->update(['status'=>'pickup']);

        return response()->json(['message' => 'order status has been updated']);
    }


}
