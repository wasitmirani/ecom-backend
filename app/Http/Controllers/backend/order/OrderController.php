<?php

namespace App\Http\Controllers\backend\order;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\Setting;
use App\Models\OrderItem;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //

    public function orderPrint(Request $request){
        $uuid = $request->uuid;
        $order = Order::where('uuid',$uuid)->with('items')->first();

        return view('backend.pages.print',compact('order'));
    }
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
        if(!empty($request->date)){

            $orders= $orders->whereDate('created_at', $request->date);
        }
        $orders = $orders->with([ 'items', 'user'])->paginate(perPage());

        return response()->json(['orders' => $orders]);
    }

    public function myOrders(Request $request){
        $query = request('query');
        $orders = Order::latest()->where('user_id', $request->user()->id);
        if (!empty($query)) {
            $orders = $orders->where('reference_number', 'like', '%' . $query . '%');
        }
        if(!empty($request->status)) {
            $orders = $orders->where('status', $request->status);
        }
        if(!empty($request->date)){

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

    public function store(Request $request){
        $request->validate([
            'customer_name'=>'required',
            'customer_phone'=>'required',
            'customer_city'=>'required',
            'customer_address'=>'required',
            'order_notes'=>'min:10',
            'item.*.name'=>'required',
            'item.*.sku'=>'required',
            'item.*.qty'=>'required|integer',
            'item.*.unit_price'=>'required|decimal:2',
            'item.*.discount'=>'decimal:2',
            'subtotal'=>'required|decimal:2',
            'total'=>'required|decimal:2',
            'total_discount'=>'required',
        ]);

        $setting=Setting::latest()->first();

        $setting = Setting::latest()->first();

// Check if current time is within the allowed order creation time range
$currentDateTime = now(); // Get the current date and time
$startTime =Carbon::parse($setting->start_time);
$endTime = Carbon::parse($setting->end_time);

        if ($currentDateTime >= $startTime && $currentDateTime <= $endTime) {
            // Create the order
            $last_=Order::latest()->first();
            $id=$last_->id ?? 1;
            $order = Order::create([
                'uuid' => Str::uuid(),
                'customer_name' => $request->customer_name,
                'reference_number' => 'SO-'. $id+1,
                'slug' => 'SO-'. $id+1,
                'customer_phone' => $request->customer_phone,
                'customer_city' => $request->customer_city,
                'customer_area' => $request->customer_area,
                'customer_email' => $request->customer_email,
                'customer_address' => $request->customer_address,
                'order_notes' => $request->order_notes,
                'total' => $request->total,
                'subtotal' => $request->subtotal,
                'total_discount' => $request->total_discount ?? 0,
            ]);

            foreach ($request->items as $key => $item) {
                # code...
                OrderItem::create([
                    'order_id' => $order->id,
                    'name' => $item['name'],
                    'sku' => $item['sku'],
                    'qty' => $item['qty'],
                    'unit_price' => $item['unit_price'],
                    'discount_price' => $item['discount']?? 0,
                ]);
            }

            return response()->json(['message'=>'order created successfully']);
            // Any additional logic you want to perform after creating the order
        } else {
            // Not within allowed time range, do something (e.g., return an error response)
            return response()->json(['error' => 'Order creation not allowed at this time.'], 400);
        }


    }

    public function ordersPickList(Request $request){
        $q = request('query');
        $items = OrderItem::latest();
        if (!empty($q)) {
            $items = $items->whereHas('order', function ($query) use ($q) {
                return $query->where('reference_number', 'like', '%' . $q . '%')
                ->orWhere('customer_area', 'like', '%' . $q . '%')
                ->orWhere('customer_phone', 'like', '%' . $q . '%');
            });
        }
        if(!empty($request->date)){

            $items= $items->whereDate('created_at', $request->date);
        }
        else {

            $items= $items->whereDate('created_at', now());

        }
        $items = $items->with('order')->paginate(perPage());

        return response()->json(['items' => $items]);
    }


}
