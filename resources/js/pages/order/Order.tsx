import { axios_request } from '@/bootstrap';
import { BreadcrumbComponent } from '@/components/BreadCrumbComponent';
import LoadingComponent from '@/components/LoadingComponent';
import PaginationComponent from "@/components/PaginationComponent";
import Helper from '@/utils/helpers';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Order: React.FC = (() => {

    const [orders, setOrders] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDate, setSelectedDate] = useState("");
    const navigate = useNavigate();
    const helper = new Helper();


    const handleExportOrders = ()=>{
        setLoading(true);


            axios_request.get(`/export-orders?date=${selectedDate}&query=${searchQuery}`, { responseType: 'arraybuffer' })
            .then((response) => {



          const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `orders-${Date.now()}.xlsx`);
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url); // clean up
        });

        setTimeout(() => {
            setLoading(false);
        }, 300);
    }
    const handleExportOrdersItems = ()=>{
        setLoading(true);

        axios_request.get(`/export-by-order-items?date=${selectedDate}&query=${searchQuery}`, { responseType: 'arraybuffer' })
        .then((response) => {
          const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `orders-by-items-${Date.now()}.xlsx`);
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url); // clean up
        })
        .catch((error) => {
          console.error('Error downloading file:', error);
        });
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }
    const getOrders = (status?:string | null) => {
        setOrders([]);
        setLoading(true);
        status = status == null ? '' : status;
        if(status=="1"){
            setCurrentPage(1);
            status = '';
        }

        axios_request.get(`/orders?status=${status}&date=${selectedDate}&page=${currentPage}`).then((res) => {
            setOrders(res.data.orders);
        });

        setTimeout(() => {
            setLoading(false);
        }, 300);
    }
    const handleSearch = (event: any) => {

        setLoading(true);
        const query = event.target.value;
        console.log(query);
        setSearchQuery(query);
        if (query.length > 2) {
            setTimeout(() => {
                // Filter products based on the search query
                setCurrentPage(1);
                axios_request.get(`/orders?page=${currentPage}&date=${selectedDate}&query=${searchQuery}`).then((res) => {
                    setOrders(res.data.orders);

                });
            }, 1800);
            setLoading(false);
            return true;
        }
        if(query.length==0) {
            getOrders();
        }



        setLoading(false);
    };
    const handlePageChange = (newPage: number) => {

        setCurrentPage(newPage);
      };

    const getDetails=(uuid:string) => {

        navigate('/app/order-details/'+uuid);
    }
    const orderPrint=(uuid:string)=>{
        window.location.href=window.origin+"/print/order/"+uuid;
    }
    const updateStatus= (uuid:string) => {
        axios_request.get('/order-status/'+uuid).then((res) => {
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                getOrders();
        })
    };
    useEffect(() => {
        getOrders();
    }, [currentPage]);
    return (
        <>

        <BreadcrumbComponent active_name="Orders"  />

        <div className="row">
            <div className="col-lg-12">
                <div className="card" id="orderList">
                    <div className="card-header border-0">
                        <div className="row align-items-center gy-3">
                            <div className="col-sm">
                                <h5 className="card-title mb-0">Orders List</h5>
                            </div>
                            <div className="col-sm-auto">
                                            <div className="d-flex gap-1 flex-wrap">
                                                <button type="button" className="btn btn-success add-btn" onClick={handleExportOrdersItems}><i className="ri-file-download-line align-bottom me-1"></i> Export  By Items</button>
                                                <button type="button" className="btn btn-info" onClick={handleExportOrders}><i className="ri-file-download-line align-bottom me-1"></i> Export Orders</button>

                                            </div>
                                        </div>
                        </div>
                    </div>
                    <div className="card-body border border-dashed border-end-0 border-start-0">
                        <form>
                            <div className="row g-3">
                                <div className="col-xxl-5 col-sm-6">
                                    <div className="search-box">
                                        <input type="search" value={searchQuery}
                                                    onChange={handleSearch}  className="form-control search" placeholder="Search for order ID, customer, order status or something..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </div>

                                <div className="col-xxl-2 col-sm-6">
                                    <div>
                                        <input type="date"  value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)} className="form-control flatpickr-input" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" id="demo-datepicker" placeholder="Select date" />
                                    </div>
                                </div>





                                <div className="col-xxl-2 col-sm-4">
                                    <div>
                                        <button onClick={()=>getOrders('1')} type="button" className="btn btn-primary w-100" > <i className="ri-equalizer-fill me-1 align-bottom"></i>
                                            Filters
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>
                    <div className="card-body pt-0">
                        <div>
                            <ul className="nav nav-tabs nav-tabs-custom nav-success mb-3" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <Link onClick={()=>getOrders()} className="nav-link active All py-3" data-bs-toggle="tab" id="All" to="#home1" role="tab" aria-selected="true">
                                        <i className="ri-store-2-fill me-1 align-bottom"></i> All Orders
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link  onClick={()=>getOrders('delivered')}   className="nav-link py-3 Delivered" data-bs-toggle="tab" id="Delivered" to="#delivered" role="tab" aria-selected="false" >
                                        <i className="ri-checkbox-circle-line me-1 align-bottom"></i> Delivered
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link  onClick={()=>getOrders('pickup')} className="nav-link py-3 Pickups" data-bs-toggle="tab" id="Pickups" to="#pickups" role="tab" aria-selected="false" >
                                        <i className="ri-truck-line me-1 align-bottom"></i> Pickups
                                        {/* <span className="badge bg-danger align-middle ms-1">2</span> */}
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link  onClick={()=>getOrders('return')} className="nav-link py-3 Returns" data-bs-toggle="tab" id="Returns" to="#returns" role="tab" aria-selected="false" >
                                        <i className="ri-arrow-left-right-fill me-1 align-bottom"></i> Returns
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link  onClick={()=>getOrders('cancelled')}  className="nav-link py-3 Cancelled" data-bs-toggle="tab" id="Cancelled" to="#cancelled" role="tab" aria-selected="false" >
                                        <i className="ri-close-circle-line me-1 align-bottom"></i> Cancelled
                                    </Link>
                                </li>
                            </ul>

                            <div className="table-responsive table-card mb-1">
                                <table className="table table-nowrap align-middle" >
                                    <thead className="text-muted table-light">
                                        <tr className="text-uppercase">
                                            {/* style="width: 25px;" */}
                                            <th  >Order Date</th>
                                            <th  >Order ID</th>
                                            <th  >Customer</th>
                                            <th  >Area</th>
                                            <th  >City</th>
                                            <th  >Items</th>

                                            <th  >Sub Total</th>
                                            <th  >Discount</th>
                                            <th  >Total</th>
                                            <th  >Status</th>
                                            <th >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="list form-check-all">
                                    {loading &&
                                                            (
                                                                <tr >
                                                                    <td colSpan={8} style={{ textAlign: 'center' }}>
                                                                        <LoadingComponent />
                                                                    </td>

                                                                </tr>

                                                            )}
                                        {
                                            orders?.data?.map((order: any) => (
                                                <tr>
                                                     <td className="date">{helper.timeformat(order.created_at)}</td>
                                                <td className="id">
                                                    <a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">
                                                        #{order.reference_number}</a></td>
                                                <td className="customer_name">{order.customer_name}</td>
                                                <td className="product_name">{order.customer_area}</td>
                                                <td className="product_name">{order.customer_city}</td>
                                                <td className="date">{order.items.length}</td>

                                                <td className="amount">Rs.{order.subtotal}</td>
                                                <td className="amount">Rs.{order.total_discount}</td>
                                                <td className="amount">Rs.{order.total}</td>

                                                <td className="status"><span className="badge bg-primary-subtle text-primary text-uppercase">{order.status}</span></td>
                                                <td>
                                                    <ul className="list-inline hstack gap-2 mb-0">
                                                    <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                            <a role='button'  onClick={()=>orderPrint(order.uuid)} className="text-success d-inline-block">
                                                                <i className="ri-printer-fill fs-16"></i>
                                                            </a>
                                                        </li>
                                                        {order.status == "new" && (
                                                            <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Approved">
                                                            <a href="#showModal2" onClick={()=>updateStatus(order.uuid)} data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                <i className="ri-check-fill fs-16"></i>
                                                            </a>
                                                        </li>
                                                        )}

                                                        <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                            <a role='button'  onClick={()=>getDetails(order.uuid)} className="text-primary d-inline-block">
                                                                <i className="ri-eye-fill fs-16"></i>
                                                            </a>
                                                        </li>


                                                        <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                            <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                <i className="ri-delete-bin-5-fill fs-16"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}
                                      </tbody>
                                </table>
                                {/* <div className="noresult" >
                                    <div className="text-center">
                                        <h5 className="mt-2">Sorry! No Result Found</h5>
                                        <p className="text-muted">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                                    </div>
                                </div> */}
                                  {/* Pagination */}
                                  { orders?.data?.length > 0 &&
                                                    ( <PaginationComponent items={orders}
                                                        currentPage={currentPage} onPageChange={handlePageChange}
                                                    />

                                                    )
                                                }
                            </div>

                        </div>



                    </div>
                </div>

            </div>

        </div>
        </>
    );
})

export default Order;
