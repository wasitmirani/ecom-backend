
import React from 'react';
import { Link } from 'react-router-dom';
import Helper  from '@/utils/helpers';
const helper= new Helper();

const Products: React.FC = ()=>{
    return (
        <>  
            <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <div className="d-flex mb-3">
                                        <div className="flex-grow-1">
                                            <h5 className="fs-16">Filters</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link to="#" className="text-decoration-underline" id="clearall">Clear All</Link>
                                        </div>
                                    </div>

                                    <div className="filter-choices-input">
                                        <input className="form-control"  type="text"  />
                                    </div>
                                </div>

                                <div className="accordion accordion-flush filter-accordion">

                                    <div className="card-body border-bottom">
                                        <div>
                                            <p className="text-muted text-uppercase fs-12 fw-medium mb-2">Products</p>
                                            <ul className="list-unstyled mb-0 filter-list">
                                                <li>
                                                    <Link to="#" className="d-flex py-1 align-items-center">
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-13 mb-0 listname">Grocery</h5>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="d-flex py-1 align-items-center">
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-13 mb-0 listname">Fashion</h5>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <span className="badge bg-light text-muted">5</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="d-flex py-1 align-items-center">
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-13 mb-0 listname">Watches</h5>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="d-flex py-1 align-items-center">
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-13 mb-0 listname">Electronics</h5>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <span className="badge bg-light text-muted">5</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="d-flex py-1 align-items-center">
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-13 mb-0 listname">Furniture</h5>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <span className="badge bg-light text-muted">6</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="d-flex py-1 align-items-center">
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-13 mb-0 listname">Automotive Accessories</h5>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="d-flex py-1 align-items-center">
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-13 mb-0 listname">Appliances</h5>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <span className="badge bg-light text-muted">7</span>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to="#" className="d-flex py-1 align-items-center">
                                                        <div className="flex-grow-1">
                                                            <h5 className="fs-13 mb-0 listname">Kids</h5>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="card-body border-bottom">
                                        <p className="text-muted text-uppercase fs-12 fw-medium mb-4">Price</p>

                                        <div id="product-price-range" data-slider-color="primary"></div>
                                        <div className="formCost d-flex gap-2 align-items-center mt-3">
                                            <input className="form-control form-control-sm" type="text" id="minCost" value="0" /> <span className="fw-semibold text-muted">to</span> <input className="form-control form-control-sm" type="text" id="maxCost" value="1000" />
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingBrands">
                                            <button className="accordion-button bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseBrands" aria-expanded="true" aria-controls="flush-collapseBrands">
                                                <span className="text-muted text-uppercase fs-12 fw-medium">Brands</span> <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                            </button>
                                        </h2>

                                        <div id="flush-collapseBrands" className="accordion-collapse collapse show" aria-labelledby="flush-headingBrands">
                                            <div className="accordion-body text-body pt-0">
                                                <div className="search-box search-box-sm">
                                                    <input type="text" className="form-control bg-light border-0" id="searchBrandsList" placeholder="Search Brands..."/>
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                                <div className="d-flex flex-column gap-2 mt-3 filter-check">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="Boat" id="productBrandRadio5" checked/>
                                                        {/*  for="productBrandRadio5" */}
                                                        <label className="form-check-label">Boat</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="OnePlus" id="productBrandRadio4" />
                                                        {/* for="productBrandRadio4" */}
                                                        <label className="form-check-label" >OnePlus</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="Realme" id="productBrandRadio3"/>
                                                        {/* for="productBrandRadio3" */}
                                                        <label className="form-check-label" >Realme</label>
                                                    </div>
                                                   

                                                    <div>
                                                        <button type="button" className="btn btn-link text-decoration-none text-uppercase fw-medium p-0">1,235
                                                            More</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingDiscount">
                                            <button className="accordion-button bg-transparent shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseDiscount" aria-expanded="true" aria-controls="flush-collapseDiscount">
                                                <span className="text-muted text-uppercase fs-12 fw-medium">Discount</span> <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseDiscount" className="accordion-collapse collapse" aria-labelledby="flush-headingDiscount">
                                            <div className="accordion-body text-body pt-1">
                                                <div className="d-flex flex-column gap-2 filter-check">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="50% or more" id="productdiscountRadio6"/>
                                                        {/* for="productdiscountRadio6" */}
                                                        <label className="form-check-label" >50% or more</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="40% or more" id="productdiscountRadio5"/>
                                                        {/*  for="productdiscountRadio5" */}
                                                        <label className="form-check-label">40% or more</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="30% or more" id="productdiscountRadio4"/>
                                                            {/* for="productdiscountRadio4" */}
                                                        <label className="form-check-label" >
                                                            30% or more
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="20% or more" id="productdiscountRadio3" checked />
                                                        {/* for="productdiscountRadio3" */}
                                                        <label className="form-check-label" >
                                                            20% or more
                                                        </label>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingRating">
                                            <button className="accordion-button bg-transparent shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseRating" aria-expanded="false" aria-controls="flush-collapseRating">
                                                <span className="text-muted text-uppercase fs-12 fw-medium">Rating</span> <span className="badge bg-success rounded-pill align-middle ms-1 filter-badge"></span>
                                            </button>
                                        </h2>

                                        <div id="flush-collapseRating" className="accordion-collapse collapse" aria-labelledby="flush-headingRating">
                                            <div className="accordion-body text-body">
                                                <div className="d-flex flex-column gap-2 filter-check">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="4 & Above Star" id="productratingRadio4" checked/>
                                                        {/* for="productratingRadio4" */}
                                                        <label className="form-check-label" >
                                                            <span className="text-muted">
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star"></i>
                                                            </span> 4 & Above
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="3 & Above Star" id="productratingRadio3"/>
                                                        {/* for="productratingRadio3" */}
                                                        <label className="form-check-label" >
                                                            <span className="text-muted">
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star"></i>
                                                                <i className="mdi mdi-star"></i>
                                                            </span> 3 & Above
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="2 & Above Star" id="productratingRadio2"/>
                                                        {/* for="productratingRadio2" */}
                                                        <label className="form-check-label" >
                                                            <span className="text-muted">
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star text-warning"></i>
                                                                <i className="mdi mdi-star"></i>
                                                                <i className="mdi mdi-star"></i>
                                                                <i className="mdi mdi-star"></i>
                                                            </span> 2 & Above
                                                        </label>
                                                    </div>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                           
                        </div>
                      

                        <div className="col-xl-9 col-lg-8">
                            <div>
                                <div className="card">
                                    <div className="card-header border-0">
                                        <div className="row g-4">
                                            <div className="col-sm-auto">
                                                <div>
                                                    <Link to={helper.prefix_url+`/create-product`} 
                                                    className="btn btn-success" id="addproduct-btn">
                                                        <i className="ri-add-line align-bottom me-1"></i> 
                                                        Add Product</Link>
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="d-flex justify-content-sm-end">
                                                    <div className="search-box ms-2">
                                                        <input type="text" className="form-control" id="searchProductList" placeholder="Search Products..."/>
                                                        <i className="ri-search-line search-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <ul className="nav nav-tabs-custom card-header-tabs border-bottom-0" role="tablist">
                                                    <li className="nav-item">
                                                        <Link className="nav-link active fw-semibold" data-bs-toggle="tab" to="#productnav-all" role="tab">
                                                            All <span className="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">12</span>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link fw-semibold" data-bs-toggle="tab" to="#productnav-published" role="tab">
                                                            Published <span className="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">5</span>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link fw-semibold" data-bs-toggle="tab" to="#productnav-draft" role="tab">
                                                            Draft
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-auto">
                                                <div id="selection-element">
                                                    <div className="my-n1 d-flex align-items-center text-muted">
                                                        Select <div id="select-content" className="text-body fw-semibold px-1"></div> Result <button type="button" className="btn btn-link link-danger p-0 ms-3 shadow-none" data-bs-toggle="modal" data-bs-target="#removeItemModal">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div className="card-body">

                                        <div className="tab-content text-muted">
                                            <div className="tab-pane active" id="productnav-all" role="tabpanel">
                                            <div className="live-preview">
                                        <div className="table-responsive">
                                            <table className="table align-middle table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        {/*  style="width: 42px;" */}
                                                        <th scope="col">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="responsivetableCheck"/>
                                                                    {/*  for="responsivetableCheck" */}
                                                                <label className="form-check-label"></label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">Purchased</th>
                                                        <th scope="col">Revenue</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="responsivetableCheck05"/>
                                                                <label className="form-check-label" ></label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2106</Link></td>
                                                        <td>10 Nov, 07:20</td>
                                                        <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="/assets/images/users/avatar-1.jpg" alt="" className="avatar-xs rounded-circle"/>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Jason schuller
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Splashify</td>
                                                        <td>$350.87</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="table-light">
                                                  
                                                </tfoot>
                                            </table>
                                          
                                        </div>
                                     
                                    </div>
                                            </div>
                                           

                                            <div className="tab-pane" id="productnav-published" role="tabpanel">
                                                <div id="table-product-list-published" className="table-card gridjs-border-none"></div>
                                            </div>
                                          

                                            <div className="tab-pane" id="productnav-draft" role="tabpanel">
                                                <div className="py-4 text-center">
                                                   
                                                    <h5 className="mt-4">Sorry! No Result Found</h5>
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
}   

export default Products;