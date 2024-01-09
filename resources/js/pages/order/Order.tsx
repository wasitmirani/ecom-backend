import { axios_request } from '@/bootstrap';
import React, { useEffect, useState } from 'react';

const Order : React.FC = (()=>{

    const [orders,setOrders] = useState({});

    const getOrders = ()=>{
            axios_request.get('/orders').then((res)=>{
                    setOrders(res.data.orders);
            });
    }

    useEffect(()=>{
        getOrders();
    });
    return (
        <>
            <div className="row">
                        <div className="col-lg-12">
                            <div className="card" id="orderList">
                                <div className="card-header border-0">
                                    <div className="row align-items-center gy-3">
                                        <div className="col-sm">
                                            <h5 className="card-title mb-0">Order History</h5>
                                        </div>
                                        <div className="col-sm-auto">
                                            <div className="d-flex gap-1 flex-wrap">
                                                <button type="button" className="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal"><i className="ri-add-line align-bottom me-1"></i> Create Order</button>
                                                <button type="button" className="btn btn-info"><i className="ri-file-download-line align-bottom me-1"></i> Import</button>
                                                <button className="btn btn-soft-danger" id="remove-actions"><i className="ri-delete-bin-2-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border border-dashed border-end-0 border-start-0">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-xxl-5 col-sm-6">
                                                <div className="search-box">
                                                    <input type="text" className="form-control search" placeholder="Search for order ID, customer, order status or something..."/>
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </div>

                                            <div className="col-xxl-2 col-sm-6">
                                                <div>
                                                    <input type="text" className="form-control flatpickr-input" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" id="demo-datepicker" placeholder="Select date" />
                                                </div>
                                            </div>

                                            <div className="col-xxl-2 col-sm-4">
                                                <div>
                                                    <div className="choices" data-type="select-one" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-control choices__input" data-choices="" data-choices-search-false="" name="choices-single-default" id="idStatus"  data-choice="active"><option value="all" data-custom-properties="[object Object]">All</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="all" data-custom-properties="[object Object]" aria-selected="true">All</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--idStatus-item-choice-8" className="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="8" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Status</div><div id="choices--idStatus-item-choice-1" className="choices__item choices__item--choice is-selected choices__item--selectable" role="option" data-choice="" data-id="1" data-value="all" data-select-text="Press to select" data-choice-selectable="">All</div><div id="choices--idStatus-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Cancelled" data-select-text="Press to select" data-choice-selectable="">Cancelled</div><div id="choices--idStatus-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Delivered" data-select-text="Press to select" data-choice-selectable="">Delivered</div><div id="choices--idStatus-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Inprogress" data-select-text="Press to select" data-choice-selectable="">Inprogress</div><div id="choices--idStatus-item-choice-5" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="Pending" data-select-text="Press to select" data-choice-selectable="">Pending</div><div id="choices--idStatus-item-choice-6" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="6" data-value="Pickups" data-select-text="Press to select" data-choice-selectable="">Pickups</div><div id="choices--idStatus-item-choice-7" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="7" data-value="Returns" data-select-text="Press to select" data-choice-selectable="">Returns</div></div></div></div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-2 col-sm-4">
                                                <div>
                                                    <div className="choices" data-type="select-one"  role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-control choices__input" data-choices="" data-choices-search-false="" name="choices-single-default" id="idPayment"  data-choice="active"><option value="all" data-custom-properties="[object Object]">All</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="all" data-custom-properties="[object Object]" aria-selected="true">All</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--idPayment-item-choice-5" className="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="5" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Select Payment</div><div id="choices--idPayment-item-choice-1" className="choices__item choices__item--choice is-selected choices__item--selectable" role="option" data-choice="" data-id="1" data-value="all" data-select-text="Press to select" data-choice-selectable="">All</div><div id="choices--idPayment-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="COD" data-select-text="Press to select" data-choice-selectable="">COD</div><div id="choices--idPayment-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Mastercard" data-select-text="Press to select" data-choice-selectable="">Mastercard</div><div id="choices--idPayment-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Paypal" data-select-text="Press to select" data-choice-selectable="">Paypal</div><div id="choices--idPayment-item-choice-6" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="6" data-value="Visa" data-select-text="Press to select" data-choice-selectable="">Visa</div></div></div></div>
                                                </div>
                                            </div>

                                            <div className="col-xxl-1 col-sm-4">
                                                <div>
                                                    <button type="button" className="btn btn-primary w-100" > <i className="ri-equalizer-fill me-1 align-bottom"></i>
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
                                                <a className="nav-link active All py-3" data-bs-toggle="tab" id="All" href="#home1" role="tab" aria-selected="true">
                                                    <i className="ri-store-2-fill me-1 align-bottom"></i> All Orders
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link py-3 Delivered" data-bs-toggle="tab" id="Delivered" href="#delivered" role="tab" aria-selected="false" >
                                                    <i className="ri-checkbox-circle-line me-1 align-bottom"></i> Delivered
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link py-3 Pickups" data-bs-toggle="tab" id="Pickups" href="#pickups" role="tab" aria-selected="false" >
                                                    <i className="ri-truck-line me-1 align-bottom"></i> Pickups <span className="badge bg-danger align-middle ms-1">2</span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link py-3 Returns" data-bs-toggle="tab" id="Returns" href="#returns" role="tab" aria-selected="false" >
                                                    <i className="ri-arrow-left-right-fill me-1 align-bottom"></i> Returns
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link py-3 Cancelled" data-bs-toggle="tab" id="Cancelled" href="#cancelled" role="tab" aria-selected="false" >
                                                    <i className="ri-close-circle-line me-1 align-bottom"></i> Cancelled
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="table-responsive table-card mb-1">
                                            <table className="table table-nowrap align-middle" id="orderTable">
                                                <thead className="text-muted table-light">
                                                    <tr className="text-uppercase">
                                                        {/* style="width: 25px;" */}
                                                        <th scope="col" >
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="checkAll" value="option"/>
                                                            </div>
                                                        </th>
                                                        <th className="sort desc" data-sort="id">Order ID</th>
                                                        <th className="sort" data-sort="customer_name">Customer</th>
                                                        <th className="sort" data-sort="product_name">Product</th>
                                                        <th className="sort" data-sort="date">Order Date</th>
                                                        <th className="sort" data-sort="amount">Amount</th>
                                                        <th className="sort" data-sort="payment">Payment Method</th>
                                                        <th className="sort" data-sort="status">Delivery Status</th>
                                                        <th className="sort" data-sort="city">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all"><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td className="id"><a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ12</a></td>
                                                        <td className="customer_name">Alexis Clarke</td>
                                                        <td className="product_name">Noise Evolve Smartwatch</td>
                                                        <td className="date">20 Apr,2022 <small className="text-muted">4:05 PM</small></td>
                                                        <td className="amount">$1021</td>
                                                        <td className="payment">Mastercard</td>
                                                        <td className="status"><span className="badge bg-danger-subtle text-danger text-uppercase">Cancelled</span></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                                                                        <i className="ri-eye-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                    <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td className="id"><a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ11</a></td>
                                                        <td className="customer_name">Diana Kohler</td>
                                                        <td className="product_name">Half Sleeve T-Shirts (Blue)</td>
                                                        <td className="date">20 Apr,2022 <small className="text-muted">4:05 PM</small></td>
                                                        <td className="amount">$874</td>
                                                        <td className="payment">Visa</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Delivered</span></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                                                                        <i className="ri-eye-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                    <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td className="id"><a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ10</a></td>
                                                        <td className="customer_name">Henry Baird</td>
                                                        <td className="product_name">classNameic Short Sleeve Shirt</td>
                                                        <td className="date">20 Apr,2022 <small className="text-muted">4:05 PM</small></td>
                                                        <td className="amount">$342</td>
                                                        <td className="payment">Mastercard</td>
                                                        <td className="status"><span className="badge bg-secondary-subtle text-secondary text-uppercase">Inprogress</span></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                                                                        <i className="ri-eye-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                    <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td className="id"><a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ9</a></td>
                                                        <td className="customer_name">Donald Palmer</td>
                                                        <td className="product_name">Oxford Button-Down Shirt</td>
                                                        <td className="date">20 Apr,2022 <small className="text-muted">4:05 PM</small></td>
                                                        <td className="amount">$373</td>
                                                        <td className="payment">Visa</td>
                                                        <td className="status"><span className="badge bg-info-subtle text-info text-uppercase">Pickups</span></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                                                                        <i className="ri-eye-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                    <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td className="id"><a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ8</a></td>
                                                        <td className="customer_name">Alexis Clarke</td>
                                                        <td className="product_name">USB Flash Drive Personalized wi</td>
                                                        <td className="date">20 Apr,2022 <small className="text-muted">4:05 PM</small></td>
                                                        <td className="amount">$247</td>
                                                        <td className="payment">Paypal</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Delivered</span></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                                                                        <i className="ri-eye-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                    <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td className="id"><a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ7</a></td>
                                                        <td className="customer_name">Nancy Martino</td>
                                                        <td className="product_name">Funky Prints T-shirt</td>
                                                        <td className="date">20 Apr,2022 <small className="text-muted">4:05 PM</small></td>
                                                        <td className="amount">$180</td>
                                                        <td className="payment">COD</td>
                                                        <td className="status"><span className="badge bg-primary-subtle text-primary text-uppercase">Returns</span></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                                                                        <i className="ri-eye-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                    <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td className="id"><a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ6</a></td>
                                                        <td className="customer_name">James Price</td>
                                                        <td className="product_name">Apple iPhone 12</td>
                                                        <td className="date">20 Apr,2022 <small className="text-muted">4:05 PM</small></td>
                                                        <td className="amount">$1240</td>
                                                        <td className="payment">Visa</td>
                                                        <td className="status"><span className="badge bg-secondary-subtle text-secondary text-uppercase">Inprogress</span></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                                                                        <i className="ri-eye-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                    <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="checkAll" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td className="id"><a href="apps-ecommerce-order-details.html" className="fw-medium link-primary">#VZ5</a></td>
                                                        <td className="customer_name">Thomas Taylor</td>
                                                        <td className="product_name">Galaxy Watch4</td>
                                                        <td className="date">20 Apr,2022 <small className="text-muted">4:05 PM</small></td>
                                                        <td className="amount">$408</td>
                                                        <td className="payment">Mastercard</td>
                                                        <td className="status"><span className="badge bg-info-subtle text-info text-uppercase">Pickups</span></td>
                                                        <td>
                                                            <ul className="list-inline hstack gap-2 mb-0">
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="View">
                                                                    <a href="apps-ecommerce-order-details.html" className="text-primary d-inline-block">
                                                                        <i className="ri-eye-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                    <a href="#showModal" data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                    <a className="text-danger d-inline-block remove-item-btn" data-bs-toggle="modal" href="#deleteOrder">
                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr></tbody>
                                            </table>
                                            <div className="noresult" >
                                                <div className="text-center">
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted">We've searched more than 150+ Orders We did not find any orders for you search.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
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
                                    <div className="modal fade" id="showModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header bg-light p-3">
                                                    <h5 className="modal-title" id="exampleModalLabel">&nbsp;</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                                                </div>
                                                <form className="tablelist-form" >
                                                    <div className="modal-body">
                                                        <input type="hidden" id="id-field" />

                                                        <div className="mb-3" id="modal-id">
                                                            <label  className="form-label">ID</label>
                                                            <input type="text" id="orderId" className="form-control" placeholder="ID"  />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label  className="form-label">Customer Name</label>
                                                            <input type="text" id="customername-field" className="form-control" placeholder="Enter name" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label  className="form-label">Product</label>
                                                            <div className="choices" data-type="select-one" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-control choices__input" data-trigger="" name="productname-field" id="productname-field"  data-choice="active"><option value="" data-custom-properties="[object Object]">Product</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="1" data-value="" data-custom-properties="[object Object]" aria-selected="true">Product</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><input type="search" name="search_terms" className="choices__input choices__input--cloned"   role="textbox" aria-autocomplete="list" aria-label="Product" placeholder=""><div className="choices__list" role="listbox"><div id="choices--productname-field-item-choice-11" className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="11" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Product</div><div id="choices--productname-field-item-choice-1" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="1" data-value="350 ml Glass Grocery Container" data-select-text="Press to select" data-choice-selectable="">350 ml Glass Grocery Container</div><div id="choices--productname-field-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Adidas Sneakers" data-select-text="Press to select" data-choice-selectable="">Adidas Sneakers</div><div id="choices--productname-field-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="American egale outfitters Shirt" data-select-text="Press to select" data-choice-selectable="">American egale outfitters Shirt</div><div id="choices--productname-field-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Apple iPhone 12" data-select-text="Press to select" data-choice-selectable="">Apple iPhone 12</div><div id="choices--productname-field-item-choice-5" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="classNameic Short Sleeve Shirt" data-select-text="Press to select" data-choice-selectable="">classNameic Short Sleeve Shirt</div><div id="choices--productname-field-item-choice-6" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="6" data-value="Funky Prints T-shirt" data-select-text="Press to select" data-choice-selectable="">Funky Prints T-shirt</div><div id="choices--productname-field-item-choice-7" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="7" data-value="Galaxy Watch4" data-select-text="Press to select" data-choice-selectable="">Galaxy Watch4</div><div id="choices--productname-field-item-choice-8" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="8" data-value="Half Sleeve T-Shirts (Blue)" data-select-text="Press to select" data-choice-selectable="">Half Sleeve T-Shirts (Blue)</div><div id="choices--productname-field-item-choice-9" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="9" data-value="Noise Evolve Smartwatch" data-select-text="Press to select" data-choice-selectable="">Noise Evolve Smartwatch</div><div id="choices--productname-field-item-choice-10" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="10" data-value="Oxford Button-Down Shirt" data-select-text="Press to select" data-choice-selectable="">Oxford Button-Down Shirt</div><div id="choices--productname-field-item-choice-12" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="12" data-value="Puma Tshirt" data-select-text="Press to select" data-choice-selectable="">Puma Tshirt</div><div id="choices--productname-field-item-choice-13" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="13" data-value="USB Flash Drive Personalized with 3D Print" data-select-text="Press to select" data-choice-selectable="">USB Flash Drive Personalized with 3D Print</div></div></div></div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Order Date</label>
                                                            <input type="text" id="date-field" className="form-control flatpickr-input" data-provider="flatpickr"  data-date-format="d M, Y" data-enable-time="" placeholder="Select date" />
                                                        </div>

                                                        <div className="row gy-4 mb-3">
                                                            <div className="col-md-6">
                                                                <div>
                                                                    <label  className="form-label">Amount</label>
                                                                    <input type="text" id="amount-field" className="form-control" placeholder="Total amount" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div>
                                                                    <label  className="form-label">Payment Method</label>
                                                                    <div className="choices" data-type="select-one" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div className="choices__inner">
                                                                        <select className="form-control choices__input" data-trigger="" name="payment-method"  id="payment-field"  data-choice="active">
                                                                            <option value="" data-custom-properties="[object Object]">Payment Method</option>
                                                                            </select>
                                                                            <div className="choices__list choices__list--single">
                                                                                <div className="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="1" data-value="" data-custom-properties="[object Object]" aria-selected="true">Payment Method</div>
                                                                                </div></div>
                                                                                <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                                                                    <input type="search" name="search_terms" className="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Payment Method" placeholder=""><div className="choices__list" role="listbox"><div id="choices--payment-field-item-choice-3" className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="3" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Payment Method</div><div id="choices--payment-field-item-choice-1" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="1" data-value="COD" data-select-text="Press to select" data-choice-selectable="">COD</div><div id="choices--payment-field-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Mastercard" data-select-text="Press to select" data-choice-selectable="">Mastercard</div><div id="choices--payment-field-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Paypal" data-select-text="Press to select" data-choice-selectable="">Paypal</div><div id="choices--payment-field-item-choice-5" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="Visa" data-select-text="Press to select" data-choice-selectable="">Visa</div></div></div></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label for="delivered-status" className="form-label">Delivery Status</label>
                                                            <div className="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-control choices__input" data-trigger="" name="delivered-status" required="" id="delivered-status" hidden="" tabindex="-1" data-choice="active"><option value="" data-custom-properties="[object Object]">Delivery Status</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="1" data-value="" data-custom-properties="[object Object]" aria-selected="true">Delivery Status</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><input type="search" name="search_terms" className="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Delivery Status" placeholder=""><div className="choices__list" role="listbox"><div id="choices--delivered-status-item-choice-3" className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="3" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Delivery Status</div><div id="choices--delivered-status-item-choice-1" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="1" data-value="Cancelled" data-select-text="Press to select" data-choice-selectable="">Cancelled</div><div id="choices--delivered-status-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Delivered" data-select-text="Press to select" data-choice-selectable="">Delivered</div><div id="choices--delivered-status-item-choice-4" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Inprogress" data-select-text="Press to select" data-choice-selectable="">Inprogress</div><div id="choices--delivered-status-item-choice-5" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="Pending" data-select-text="Press to select" data-choice-selectable="">Pending</div><div id="choices--delivered-status-item-choice-6" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="6" data-value="Pickups" data-select-text="Press to select" data-choice-selectable="">Pickups</div><div id="choices--delivered-status-item-choice-7" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="7" data-value="Returns" data-select-text="Press to select" data-choice-selectable="">Returns</div></div></div></div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" className="btn btn-success" id="add-btn">Add Order</button>
                                                            <!-- <button type="button" className="btn btn-success" id="edit-btn">Update</button> -->
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Modal -->
                                    <div className="modal fade flip" id="deleteOrder" tabindex="-1" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-body p-5 text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#405189,secondary:#f06548" style="width:90px;height:90px"></lord-icon>
                                                    <div className="mt-4 text-center">
                                                        <h4>You are about to delete a order ?</h4>
                                                        <p className="text-muted fs-15 mb-4">Deleting your order will remove all of your information from our database.</p>
                                                        <div className="hstack gap-2 justify-content-center remove">
                                                            <button className="btn btn-link link-success fw-medium text-decoration-none" id="deleteRecord-close" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle"></i> Close</button>
                                                            <button className="btn btn-danger" id="delete-record">Yes, Delete It</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
