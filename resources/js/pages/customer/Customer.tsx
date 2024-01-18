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
    const [customers ,setCustomers] =useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

     // Define your API endpoint with filter parameters
     const apiUrl = `/customers?page=${currentPage}&query=${searchTerm}&date=${selectedDate}&status=${selectedStatus}`;
   const getCustomer=async (page?:string)=>{
        setLoading(true);
        if(page){
            setCurrentPage(1);
        }
        await axios_request.get(apiUrl).then((res)=>{
            setCustomers(res.data.customers);
        });

        setTimeout(() => {
            setLoading(false);
        }, 300);

    }
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
      };

    const handleToggleStatus =  (id:string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
                try {
                     axios_request.put(`/customer/${id}/toggle-status`).then((res) => {

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
                         getCustomer();

                   }).catch((err) => {
                     toast.error(err.response.data.message, {
                         position: "top-right",
                         autoClose: 1500,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                         progress: undefined,
                         theme: "light",
                         });
                   });

                 } catch (error) {

                 }

            }
          });


      };


    useEffect(()=>{
        getCustomer();
    }, [currentPage]);
    return (
        <>
          <BreadcrumbComponent active_name="Customers"  />
        <div className="row">
                        <div className="col-lg-12">
                            <div className="card" id="customerList">
                                <div className="card-header border-bottom-dashed">

                                    <div className="row g-4 align-items-center">
                                        <div className="col-sm">
                                            <div>
                                                <h5 className="card-title mb-0">Customer List</h5>
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
                                            <div className="col-xl-6">
                                                <div className="search-box">
                                                    <input type="search" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className="form-control search" placeholder="Search for customer, email, phone, status or something..."/>
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </div>

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

                                                                <select value={selectedStatus}
                                                                 onChange={(e) => setSelectedStatus(e.target.value)} className="form-select" aria-label="Default select example">
                                                                    <option selected disabled >Select Status</option>
                                                                    <option value="">All</option>
                                                                    <option value="1">Active</option>
                                                                    <option value="0">InActive</option>
                                                                    </select>
                                                                </div>

                                                    </div>


                                                    <div className="col-sm-4">
                                                        <div>
                                                            <button type="button"  onClick={()=>getCustomer("1")} className="btn btn-primary w-100"> <i className="ri-equalizer-fill me-2 align-bottom"></i>Filters</button>
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


                                                        <th className="sort" data-sort="customer_name">Customer</th>
                                                        <th className="sort" data-sort="email">Email</th>
                                                        <th className="sort" data-sort="phone">Phone</th>
                                                        <th className="sort" data-sort="date">Joining Date</th>
                                                        <th className="sort" data-sort="status">Status</th>
                                                        <th className="sort" data-sort="action">Action</th>
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
                                                    {customers?.data?.map((customer:any) =>(
                                                          <tr>

                                                          {/* style="display:none;" */}

                                                          <td className="customer_name">{customer.name}</td>
                                                          <td className="email">{customer.email}</td>
                                                          <td className="phone">{customer.phone}</td>
                                                          <td className="date">{helper.timeformat(customer.created_at)}</td>
                                                          <td className="status">

                                                            {customer.deleted_at  ? (

                                                                <span className="badge bg-danger-subtle text-danger text-uppercase">InActive
                                                                </span>
                                                            )  : (
                                                                <span className="badge bg-success-subtle text-success text-uppercase">Active
                                                                </span>
                                                            )}
                                                          </td>
                                                          <td>
                                                              <ul className="list-inline hstack gap-2 mb-0">
                                                              {customer.deleted_at  ? (
                                                                  <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                      <Link  onClick={() => handleToggleStatus(customer.id)} to="#showModal" data-bs-toggle="modal"  data-bs-trigger="hover" data-bs-placement="top" title="Restore" className="text-primary d-inline-block edit-item-btn">
                                                                      <i className="fa-solid fa-user-check"></i>
                                                                      </Link>
                                                                  </li>
                                                              ) : (
                                                                  <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove">
                                                                     <Link  onClick={() => handleToggleStatus(customer.id)}  data-bs-trigger="hover" data-bs-placement="top" title="Block"  className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" to="#deleteRecordModal">
                                                                      <i className="fa-solid fa-user-lock"></i>
                                                                      </Link>
                                                                  </li>
                                                              ) }
                                                              </ul>
                                                          </td>
                                                      </tr>
                                                    ))}
                                                    </>
                                                            ) }

                                                   </tbody>
                                            </table>
                                            {/* style="display: none" */}
                                            {customers.total < 1 && (
                                                  <EmptyDataComponent/>
                                            )}



                                        </div>

                                                 {/* Pagination */}
                                                 { customers?.data?.length > 0 &&
                                                    ( <PaginationComponent items={customers}
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
