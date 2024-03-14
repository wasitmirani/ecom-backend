import React, { useEffect, useState }  from "react";
import EmptyDataComponent from "@/components/EmptyDataComponent";
import { axios_request } from "@/bootstrap";
import Helper from "@/utils/helpers";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import PaginationComponent from "@/components/PaginationComponent";
import LoadingComponent from "@/components/LoadingComponent";
import { BreadcrumbComponent } from "@/components/BreadCrumbComponent";


const Customer: React.FC = ()=>{
    const helper = new Helper();
    const [orders ,setorders] =useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

     // Define your API endpoint with filter parameters
     const apiUrl = `/orders-pick-list?page=${currentPage}&query=${searchTerm}&date=${selectedDate}&status=${selectedStatus}`;
   const getOrders=async (page?:string)=>{
        setLoading(true);
        if(page){
            setCurrentPage(1);
        }
        await axios_request.get(apiUrl).then((res)=>{
            setorders(res.data.items);
        });

        setTimeout(() => {
            setLoading(false);
        }, 300);

    }
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
      };




    useEffect(()=>{
        getOrders();
    }, [currentPage]);
    return (
        <>
          <BreadcrumbComponent active_name="Orders PickList"  />
        <div className="row">
                        <div className="col-lg-12">
                            <div className="card" id="customerList">
                                <div className="card-header border-bottom-dashed">

                                    <div className="row g-4 align-items-center">
                                        <div className="col-sm">
                                            <div>
                                                <h5 className="card-title mb-0">Orders PickList</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-auto">
                                            <div className="d-flex flex-wrap align-items-start gap-2">


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-bottom-dashed border-bottom">
                                    <form>
                                        <div className="row g-3">
                                            {/* <div className="col-xl-6">
                                                <div className="search-box">
                                                    <input type="search" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className="form-control search" placeholder="Search for customer, email, phone, status or something..."/>
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </div> */}

                                            <div className="col-xl-6">
                                                <div className="row g-3">
                                                    <div className="col-sm-4">
                                                        <div className="">
                                                            <input type="date"  value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)} className="form-control flatpickr-input" placeholder="Select date" />
                                                        </div>
                                                    </div>




                                                    <div className="col-sm-4">
                                                        <div>
                                                            <button type="button"  onClick={()=>getOrders("1")} className="btn btn-primary w-100"> <i className="ri-equalizer-fill me-2 align-bottom"></i>Filters</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <div className="table-responsive table-card mb-1">
                                            <table className="table align-middle" id="customerTable">
                                                <thead className="table-light text-muted">
                                                    <tr>

                                                    <th className="sort" data-sort="customer_name">Order Date</th>
                                                        <th className="sort" data-sort="customer_name">OrderNo</th>
                                                        <th className="sort" data-sort="email">Name</th>
                                                        <th className="sort" data-sort="phone">SKU</th>
                                                        <th className="sort" data-sort="date">Price</th>
                                                        <th className="sort" data-sort="status">Qty</th>
                                                        <th className="sort" data-sort="action">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                {loading ?
                                                            (
                                                                <tr >
                                                                    <td colSpan={7} style={{ textAlign: 'center' }}>
                                                                        <LoadingComponent />
                                                                    </td>

                                                                </tr>

                                                            ) : (
                                                                <>
                                                    {orders?.data?.map((item:any) =>(
                                                          <tr>

                                                          {/* style="display:none;" */}

                                                          <td className="customer_name">{helper.timeformat(item?.order?.created_at)}</td>
                                                          <td className="email">{item?.order.reference_number}</td>
                                                          <td className="phone">{item.name}</td>
                                                          <td className="phone">{item.sku}</td>
                                                          <td className="phone">{item.unit_price}</td>
                                                          <td className="phone">{item.qty}</td>
                                                          <td className="phone">{item.qty * item.unit_price}</td>

                                                      </tr>
                                                    ))}
                                                    </>
                                                            ) }

                                                   </tbody>
                                            </table>
                                            {/* style="display: none" */}
                                            {orders.total < 1 && (
                                                  <EmptyDataComponent/>
                                            )}



                                        </div>

                                                 {/* Pagination */}
                                                 { orders?.data?.length > 0 &&
                                                    ( <PaginationComponent items={orders}
                                                        currentPage={currentPage} onPageChange={handlePageChange}
                                                    />

                                                    )
                                                }
                                    </div>
                                    {/* style="display: none;" */}




                                </div>
                            </div>

                        </div>

                    </div>
        </>
    );
}

export default Customer;
