
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Helper  from '@/utils/helpers';
import { BreadcrumbComponent } from '@/components/BreadCrumbComponent';
import {axios_request} from "@/bootstrap";
const helper= new Helper();

const Products: React.FC = ()=>{
    const [products, setProducts] = useState<any>([]);

    const getProducts=()=>{
        axios_request.get('/product').then((res)=>{
            setProducts(res.data.results.products);

        });
    }

    useEffect(() => {
        // Fetch products only when the component mounts
        getProducts();
    
        // Cleanup function to cancel ongoing tasks (if any) when the component unmounts
        return () => {
          // Cancel any ongoing Axios requests here if you are using Axios cancel tokens
        };
      }, []); // Empty dependency array ensures the effect runs only once
    
    return (
        <>  
          <BreadcrumbComponent active_name="Products" links={[{name:"Products",link:"/products"}]}/>
            <div className="row">
          
                      

                        <div className="col-xl-12 col-lg-12">
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
                                                            All <span className="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">{products?.data?.length ?? 0}</span>
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
                                                      
                                                        <th scope="col">Title</th>
                                                        <th scope="col">SKU</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Created</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                     
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
                                                        
                                                    </tr>
                                                </tbody>
                                                <tfoot className="table-light">
                                                  
                                                </tfoot>
                                            </table>
                                          
                                        </div>
                                     
                                    </div>
                                            </div>
                                           

                                          
                                          

                                            {/*   <div className="py-4 text-center">
                                                   
                                                    <h5 className="mt-4">Sorry! No Result Found</h5>
                                                </div> */}
                                            
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