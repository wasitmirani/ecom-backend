import React, { useEffect, useState }  from "react";
import EmptyDataComponent from "@/components/EmptyDataComponent";
import { axios_request } from "@/bootstrap";
import Helper from "@/utils/helpers";


const Customer: React.FC = ()=>{
    const helper = new Helper();
    const [customers ,setCustomers] =useState<any>([]);
    const [loading, setLoading] = useState(false);
   const getCustomer= ()=>{
        setLoading(true);
        axios_request.get('/customers').then((res)=>{
            setCustomers(res.data.customers);
        });

        setTimeout(() => {
            setLoading(false);
        }, 300);
       
    }
   
    useEffect(()=>{
        getCustomer();
    },[]);
    return (
        <>
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
                                                    <input type="text" className="form-control search" placeholder="Search for customer, email, phone, status or something..."/>
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </div>
                                       
                                            <div className="col-xl-6">
                                                <div className="row g-3">
                                                    <div className="col-sm-4">
                                                        <div className="">
                                                            <input type="text" className="form-control flatpickr-input" id="datepicker-range" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" placeholder="Select date" />
                                                        </div>
                                                    </div>
                                           
                                                    <div className="col-sm-4">
                                                        <div>
                                                            <div className="choices" data-type="select-one"
                                                              role="listbox" aria-haspopup="true" aria-expanded="false">
                                                                <div className="choices__inner">
                                                                    <select className="form-control choices__input" 
                                                             
                                                                name="choices-single-default" id="idStatus"  
                                                               >
                                                                    <option value="all" 
                                                                    data-custom-properties="[object Object]">All</option>
                                                                    </select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="all" data-custom-properties="[object Object]" aria-selected="true">All</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--idStatus-item-choice-4" className="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="4" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Status</div><div id="choices--idStatus-item-choice-1" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="1" data-value="Active" data-select-text="Press to select" data-choice-selectable="">Active</div><div id="choices--idStatus-item-choice-2" className="choices__item choices__item--choice is-selected choices__item--selectable" role="option" data-choice="" data-id="2" data-value="all" data-select-text="Press to select" data-choice-selectable="">All</div><div id="choices--idStatus-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Block" data-select-text="Press to select" data-choice-selectable="">Block</div></div></div></div>
                                                        </div>
                                                    </div>
                                            

                                                    <div className="col-sm-4">
                                                        <div>
                                                            <button type="button" className="btn btn-primary w-100"> <i className="ri-equalizer-fill me-2 align-bottom"></i>Filters</button>
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
                                                    
                                                    {customers?.data?.map((customer:any) =>(
                                                          <tr>
                                                        
                                                          {/* style="display:none;" */}
                                                     
                                                          <td className="customer_name">{customer.name}</td>
                                                          <td className="email">{customer.email}</td>
                                                          <td className="phone">{customer.phone}</td>
                                                          <td className="date">{helper.timeformat(customer.created_at)}</td>
                                                          <td className="status">

                                                            {customer.deleted_at ? (

                                                                <span className="badge bg-success-subtle text-success text-uppercase">Active
                                                                </span>
                                                            )  : (
                                                                <span className="badge bg-success-subtle text-success text-uppercase">InActive
                                                                </span>
                                                            )}
                                                          </td>
                                                          <td>
                                                              <ul className="list-inline hstack gap-2 mb-0">
                                                                  <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                      <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                          <i className="ri-pencil-fill fs-16"></i>
                                                                      </a>
                                                                  </li>
                                                                  <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove">
                                                                      <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                          <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                      </a>
                                                                  </li>
                                                              </ul>
                                                          </td>
                                                      </tr>
                                                    ))}
                                                  
                                                   </tbody>
                                            </table>
                                            {/* style="display: none" */}
                                           <EmptyDataComponent/>

                                           
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {/* style="display: flex;" */}
                                            <div className="pagination-wrap hstack gap-2" >
                                                <a className="page-item pagination-prev disabled" href="#">
                                                    Previous
                                                </a>
                                                <ul className="pagination listjs-pagination mb-0"><li className="active"><a className="page" href="#" data-i="1" data-page="8">1</a></li><li><a className="page" href="#" data-i="2" data-page="8">2</a></li></ul>
                                                <a className="page-item pagination-next" href="#">
                                                    Next
                                                </a>
                                            </div>
                                        </div>
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