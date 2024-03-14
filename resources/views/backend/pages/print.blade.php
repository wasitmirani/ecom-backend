<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Receipt</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <style>
        * {
            font-size: 13px;

            font-weight: 100
        }


        td,
        th,
        tr,
        table {
            border-top: 1px solid black;
            border-collapse: collapse;

        }

        td.item,
        th.item {
            width: 90px;
            max-width: 100px;
        }

        td.qty,
        th.qty {
            width: 10px;
            max-width: 20px;
            word-break: break-all;
        }

        td.price,
        th.price {
            width: 10px;
            max-width: 10px;
            word-break: break-all;
        }

        .centered {
            text-align: center;
            align-content: center;
        }

        .ticket {
            width: 302px;
            max-width: 302px;
        }

        img {
            max-width: inherit;
            width: inherit;
        }

        @media print {

            .hidden-print,
            .hidden-print * {
                display: none !important;
            }
        }
    </style>
</head>

<body>


    <!------ Include the above in your HEAD tag ---------->

    <div class="container" style="width:320.88px;">
        <div class="row">
            <div class="col-xs-12">
                <div class="invoice-title">
                    <img style="margin-left: 35px;" src="{{asset('assets/images/logo.png')}}" alt="">
                    {{-- <h2 style="marign-left:50px;">

                        {{ config('app.name') }}</h2> --}}
                    <div>
                        <hr>
                        <h3>Sales Receipt
                        </h3>


                        <strong>Order Date: {{ $order->created_at->format('M-d-Y') }} </strong><br>
                        <strong>Order Ref: {{ $order->reference_number }} </strong><br>

                    </div>

                </div>

                <div class="row">
                    <div class="col-xs-12">
                        <address>

                            <strong>
                                <hr>
                                <h3>Receiver</h3>
                            </strong>
                            <strong>Name:</strong> <span>{{ $order->customer_name }}</span><br>
                            <strong>Phone:</strong> <span>{{ $order->customer_phone }}</span><br>
                            <strong>Email:</strong> <span>{{ $order->customer_email }}</span><br>
                            <strong>City:</strong> <span>{{ $order->customer_city }}</span><br>
                            <strong>Billing Address:</strong> <span>{{ $order->customer_address }}</span>
                        </address>
                    </div>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="">
                    <div class="panel-heading">
                        <h3 class="panel-title"><strong>Order summary</strong></h3>
                    </div>
                    <div class="">

                        <table class="table table-condensed">
                            <thead>
                                <tr>
                                    <td class="text-left"><strong>Name</strong></td>
                                    {{-- <td class="text-right"><strong>SKU</strong></td> --}}
                                    <td class="text-right"><strong>Price</strong></td>

                                    <td class="text-right"><strong>Qty</strong></td>

                                    <td class="text-center"><strong>Total</strong></td>
                                </tr>
                            </thead>
                            <tbody>

                                @foreach ($order->items as $item)
                                    <tr>
                                        <td class="text-left">{{ $item->name }} - {{ $item->sku }}</td>
                                        {{-- <td class="text-right">{{ $item->units }}</td> --}}
                                        <td class="text-right">{{ $item->unit_price }}</td>

                                        <td class="text-right">{{ $item->qty }}</td>
                                        <td class="text-right" style="">{{ $item->qty * $item->unit_price }}</td>
                                    </tr>
                                @endforeach

                                <tr>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line text-center"><strong>Subtotal</strong></td>
                                    <td class="thick-line text-right">Rs.{{ $order->subtotal }}</td>
                                </tr>
                                @if ($order->total_discount > 0)
                                    <tr>
                                        <td class="no-line"></td>
                                        <td class="no-line"></td>
                                        <td class="no-line text-center"><strong>Disount</strong></td>
                                        <td class="no-line text-right">Rs.{{ $order->total_discount }}</td>
                                    </tr>
                                @endif
                                <tr>
                                    <td class="no-line"></td>
                                    <td class="no-line"></td>
                                    <td class="no-line text-center"><strong>Total Amount</strong></td>
                                    <td class="no-line text-right">
                                        Rs.{{ $order->total }}</td>




                                </tr>

                            </tbody>
                        </table>

                        <address>
                            Thank for shopping from {{ config('app.name') }}. We look forward to seeing you again. Have
                            a great day!
                        </address>

                    </div>
                </div>
            </div>
        </div>
    </div>


</body>

</html>
