<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Rap2hpoutre\FastExcel\FastExcel;


class ExportController extends Controller
{
    //

    public function exportOrders(Request $request){
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
        $orders = $orders->with('items')->get();

        $items=[];
        foreach($orders as $item){
            $items[]=[
                'Date'=>$item->created_at->format('Y-m-d H:i:s'),
                'Status'=>$item->status,
                'Order Reference' => $item->reference_number,
                'Customer Name'=>$item->customer_name,
                'Customer Phone'=>$item->customer_phone,
                'Customer Email'=>$item->customer_email,
                'Address'=>$item->customer_address,
                'City'=>$item->customer_city,
                'Items' =>count($item->items),
                'SubTotal'=>$item->subtotal,
                'Discount'=>$item->total_discount,
                'Total'=>$item->total

            ];
        }


    

     return   (new FastExcel(  $items))->download(now().'order.xlsx');

    }


    public function exportByOrderItems(Request $request){
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
        $orders = $orders->with('items')->get();

        $list=[];
        foreach ($orders as $key => $order) {
            foreach ($order->items as $key => $value) {
                $list[]=[
                    'Date'=>$order->created_at->format('Y-m-d H:i:s'),
                    'Status'=>$order->status,
                    'Order Reference' => $order->reference_number,
                    'Customer Name'=>$order->customer_name,
                    'Customer Phone'=>$order->customer_phone,
                    'Customer Email'=>$order->customer_email,
                    'Address'=>$order->customer_address,
                    'City'=>$order->customer_city,
                    'name'=>$value->name,
                    'sku'=>$value->sku,
                    'qty'=>$value->qty,
                    'unit_price'=>$value->unit_price,
                    'discount_price'=>$value->discount_price,
                ];
            }

        }
     return   (new FastExcel(  $list))->download(now().'order-items-file.xlsx');

    }
}
