import { axios_request } from '@/bootstrap';
import Helper from '@/utils/helpers';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const OrderDetails: React.FC = () => {
    const { uuid } = useParams<any>();
    const helper = new Helper();
    const [order,setOrder] =useState<any>([]);
   const getOrderDetails= ()=>{
        axios_request.get(`/order-details/${uuid}`).then((res)=>{
            setOrder(res.data.order);
        });
    }

    useEffect(() => {
      
    
    
        getOrderDetails();
      
    }, [uuid])
    
    return (
        <>
            <div className="row">
                <div className="col-xl-9">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex align-items-center">
                                <h5 className="card-title flex-grow-1 mb-0">Order #{order.reference_number}</h5>
                             
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive table-card">
                                <table className="table table-nowrap align-middle table-borderless mb-0">
                                    <thead className="table-light text-muted">
                                        <tr>
                                            <th scope="col">Product Details</th>
                                            <th scope="col">Item Price</th>
                                            <th scope="col">Quantity</th>
                                     
                                            <th scope="col" className="text-end">Total Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {order?.items?.map((item:any)=>(
                                             <tr>
                                             <td>
                                                 <div className="d-flex">
                                                  
                                                     <div className="flex-grow-1 ms-3">
                                                         <h5 className="fs-15">
                                                            <a role='button' className="link-primary">{item.name}</a></h5>
                                                         
                                                     </div>
                                                 </div>
                                             </td>
                                             <td>  Rs.{item.unit_price}</td>
                                             <td>{item.qty}</td>
                                             
                                             <td className="fw-medium text-end">
                                               Rs.{item.unit_price * item.qty}
                                             </td>
                                         </tr>
                                        ))}
                                       
                                       
                                      
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
              
                    <div className="card">
                        <div className="card-header">
                            <div className="d-sm-flex align-items-center">
                                <h5 className="card-title flex-grow-1 mb-0">Order Status</h5>
                                <div className="flex-shrink-0 mt-2 mt-sm-0">
                                    <a href="javascript:void(0);" className="btn btn-soft-info material-shadow-none btn-sm mt-2 mt-sm-0"><i className="ri-map-pin-line align-middle me-1"></i> Change Address</a>
                                    <a href="javascript:void(0);" className="btn btn-soft-danger material-shadow-none btn-sm mt-2 mt-sm-0"><i className="mdi mdi-archive-remove-outline align-middle me-1"></i> Cancel Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="profile-timeline">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item border-0">
                                        <div className="accordion-header" id="headingOne">
                                            <a className="accordion-button p-2 shadow-none" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 avatar-xs">
                                                        <div className="avatar-title bg-success rounded-circle material-shadow">
                                                            <i className="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6 className="fs-15 mb-0 fw-semibold">Order Placed - <span className="fw-normal">{helper.timeformat(order.created_at)}</span></h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body ms-2 ps-5 pt-0">
                                                <h6 className="mb-1">An order has been placed.</h6>
                                                <p className="text-muted">{helper.timeformat(order.created_at)}</p>

                                               
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-xl-3">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex">
                                <h5 className="card-title flex-grow-1 mb-0"><i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i> Order Summary</h5>
                                <div className="flex-shrink-0">
                                    <a href="javascript:void(0);" className="badge bg-primary-subtle text-primary fs-11">{order.customer_city}</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="">

                                <p className="text-muted mb-0">Sub Total: Rs.{order.subtotal}</p>
                                <p className="text-muted mb-0">Discount : Rs.{order.total_discount}</p>
                                <p className="text-muted mb-0">Total : Rs.{order.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex">
                                <h5 className="card-title flex-grow-1 mb-0">Customer Details</h5>
                                
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mb-0 vstack gap-3">
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <img src="/assets/images/users/user-dummy-img.jpg" alt="" className="avatar-sm rounded material-shadow" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="fs-14 mb-1">{order.customer_name}</h6>
                                            <p className="text-muted mb-0">Customer</p>
                                        </div>
                                    </div>
                                </li>
                                <li><i className="ri-mail-line me-2 align-middle text-muted fs-16"></i>{order.customer_email}</li>
                                <li><i className="ri-phone-line me-2 align-middle text-muted fs-16"></i>{order.customer_phone}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0"><i className="ri-map-pin-line align-middle me-1 text-muted"></i> Billing Address</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                                <li className="fw-medium fs-14">Joseph Parker</li>
                                <li>+(256) 245451 451</li>
                                <li>2186 Joyce Street Rocky Mount</li>
                                <li>New York - 25645</li>
                                <li>United States</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0"><i className="ri-map-pin-line align-middle me-1 text-muted"></i> Shipping Address</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                                <li className="fw-medium fs-14">Joseph Parker</li>
                                <li>+(256) 245451 451</li>
                                <li>2186 Joyce Street Rocky Mount</li>
                                <li>California - 24567</li>
                                <li>United States</li>
                            </ul>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0"><i className="ri-secure-payment-line align-bottom me-1 text-muted"></i> Payment Details</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                    <p className="text-muted mb-0">Transactions:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <h6 className="mb-0">#VLZ124561278124</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                    <p className="text-muted mb-0">Payment Method:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <h6 className="mb-0">Debit Card</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                    <p className="text-muted mb-0">Card Holder Name:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <h6 className="mb-0">Joseph Parker</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                    <p className="text-muted mb-0">Card Number:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <h6 className="mb-0">xxxx xxxx xxxx 2456</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <p className="text-muted mb-0">Total Amount:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <h6 className="mb-0">$415.96</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
} 