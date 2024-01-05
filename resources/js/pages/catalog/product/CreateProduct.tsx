import { BreadcrumbComponent } from "@/components/BreadCrumbComponent";
import React from "react";

const CreateProduct: React.FC = ()=>{
    return (
        <>
            <BreadcrumbComponent active_name="Create Product" links={[{name:"Products",link:"/products"}]}/>

           
            <form id="createproduct-form" className="needs-validation" >
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label className="form-label" >Product Title</label>
                                            <input type="text" className="form-control" id="product-title-input"  placeholder="Enter product title" required/>
                                           
                                        </div>
                                        <div>
                                            <div className="row">
                                           
                                                <div className="col">
                                                <label>Product Price</label>
                                                <input type="text" className="form-control" id="product-title-input"  placeholder="Enter product title" required/>

                                                </div>
                                                <div className="col">
                                                <label>Product SKU</label>
                                                <input type="text" className="form-control" id="product-title-input"  placeholder="Enter product title" required/>

                                                </div>
                                            </div>
                                            

                                        </div>
                                    </div>
                                </div>
                            

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Product Gallery</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <h5 className="fs-14 mb-1">Product Image</h5>
                                            <p className="text-muted">Add Product main Image.</p>
                                            <div className="text-center">
                                            <input type="file" className="form-control"  placeholder="upload product images" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                               

                             
                    
                                <div className="text-end mb-3">
                                    <button type="submit" className="btn btn-success w-sm">Submit</button>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                             
                               

                             
                               

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Product Categories</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-muted mb-2"> Select product category</p>
                                        <select className="form-select" id="choices-category-input" name="choices-category-input" data-choices data-choices-search-false>
                                            <option value="Appliances">Appliances</option>
                                            <option value="Automotive Accessories">Automotive Accessories</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Fashion">Fashion</option>
                                            <option value="Furniture">Furniture</option>
                                            <option value="Grocery">Grocery</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Watches">Watches</option>
                                        </select>
                                    </div>
                               
                                </div>
                              
                           
                            

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Product Short Description</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-muted mb-2">Add short description for product</p>
                                        <textarea className="form-control" placeholder="Must enter minimum of a 100 characters" rows="3"></textarea>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                       

                    </form>
        </>
    );
}

export default CreateProduct;