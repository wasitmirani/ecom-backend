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
                                            <input type="hidden" className="form-control" id="formAction" name="formAction" value="add"/>
                                            <input type="text" className="form-control d-none" id="product-id-input"/>
                                            <input type="text" className="form-control" id="product-title-input" value="" placeholder="Enter product title" required/>
                                            <div className="invalid-feedback">Please Enter a product title.</div>
                                        </div>
                                        <div>
                                            <label>Product Description</label>

                                            <div id="ckeditor-classNameic">
                                                <p>Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton. Material composition is 100% organic cotton. This is one of the world’s leading designer lifestyle brands and is internationally recognized for celebrating the essence of classNameic American cool style, featuring preppy with a twist designs.</p>
                                                <ul>
                                                    <li>Full Sleeve</li>
                                                    <li>Cotton</li>
                                                    <li>All Sizes available</li>
                                                    <li>4 Different Color</li>
                                                </ul>
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
                                                <div className="position-relative d-inline-block">
                                                    <div className="position-absolute top-100 start-100 translate-middle">
                                                        <label  className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Image">
                                                            <div className="avatar-xs">
                                                                <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                                    <i className="ri-image-fill"></i>
                                                                </div>
                                                            </div>
                                                        </label>
                                                        <input className="form-control d-none" value="" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg"/>
                                                    </div>
                                                    <div className="avatar-lg">
                                                        <div className="avatar-title bg-light rounded">
                                                            <img src="" id="product-img" className="avatar-md h-auto" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="fs-14 mb-1">Product Gallery</h5>
                                            <p className="text-muted">Add Product Gallery Images.</p>

                                            <div className="dropzone">
                                                <div className="fallback">
                                                    <input name="file" type="file" multiple="multiple"/>
                                                </div>
                                                <div className="dz-message needsclick">
                                                    <div className="mb-3">
                                                        <i className="display-4 text-muted ri-upload-cloud-2-fill"></i>
                                                    </div>

                                                    <h5>Drop files here or click to upload.</h5>
                                                </div>
                                            </div>

                                            <ul className="list-unstyled mb-0" id="dropzone-preview">
                                                <li className="mt-2" id="dropzone-preview-list">
                                                  
                                                    <div className="border rounded">
                                                        <div className="d-flex p-2">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar-sm bg-light rounded">
                                                                    <img data-dz-thumbnail className="img-fluid rounded d-block" src="#" alt="Product-Image" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <div className="pt-1">
                                                                    <h5 className="fs-14 mb-1" data-dz-name>&nbsp;</h5>
                                                                    <p className="fs-13 text-muted mb-0" data-dz-size></p>
                                                                    <strong className="error text-danger" data-dz-errormessage></strong>
                                                                </div>
                                                            </div>
                                                            <div className="flex-shrink-0 ms-3">
                                                                <button data-dz-remove className="btn btn-sm btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                    </div>
                                </div>
                               

                                <div className="card">
                                    <div className="card-header">
                                        <ul className="nav nav-tabs-custom card-header-tabs border-bottom-0" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#addproduct-general-info" role="tab">
                                                    General Info
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#addproduct-metadata" role="tab">
                                                    Meta Data
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                            
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="addproduct-general-info" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" >Manufacturer Name</label>
                                                            <input type="text" className="form-control" id="manufacturer-name-input" placeholder="Enter manufacturer name" />
                                                        </div> 
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" >Manufacturer Brand</label>
                                                            <input type="text" className="form-control" id="manufacturer-brand-input" placeholder="Enter manufacturer brand" />
                                                        </div>
                                                    </div>
                                                </div>
                                       

                                                <div className="row">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" >Stocks</label>
                                                            <input type="text" className="form-control" id="stocks-input" placeholder="Stocks" required />
                                                            <div className="invalid-feedback">Please Enter a product stocks.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" >Price</label>
                                                            <div className="input-group has-validation mb-3">
                                                                <span className="input-group-text" id="product-price-addon">$</span>
                                                                <input type="text" className="form-control" id="product-price-input" placeholder="Enter price" aria-label="Price" aria-describedby="product-price-addon" required />
                                                                <div className="invalid-feedback">Please Enter a product price.</div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Discount</label>
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="product-discount-addon">%</span>
                                                                <input type="text" className="form-control" id="product-discount-input" placeholder="Enter discount" aria-label="discount" aria-describedby="product-discount-addon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" >Orders</label>
                                                            <input type="text" className="form-control" id="orders-input" placeholder="Orders" required />
                                                            <div className="invalid-feedback">Please Enter a product orders.</div>
                                                        </div>
                                                    </div>
                                              
                                                </div>
                                                
                                            </div>
                                          

                                            <div className="tab-pane" id="addproduct-metadata" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" >Meta title</label>
                                                            <input type="text" className="form-control" placeholder="Enter meta title" id="meta-title-input" />
                                                        </div>
                                                    </div>
                                                   

                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label className="form-label" >Meta Keywords</label>
                                                            <input type="text" className="form-control" placeholder="Enter meta keywords" id="meta-keywords-input" />
                                                        </div>
                                                    </div>
                                                  
                                                </div>
                                             

                                                <div>
                                                    <label className="form-label">Meta Description</label>
                                                    <textarea className="form-control" id="meta-description-input" placeholder="Enter meta description" ></textarea>
                                                </div>
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
                                        <h5 className="card-title mb-0">Publish</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label  className="form-label">Status</label>

                                            <select className="form-select" id="choices-publish-status-input" data-choices data-choices-search-false>
                                                <option value="Published" selected>Published</option>
                                                <option value="Scheduled">Scheduled</option>
                                                <option value="Draft">Draft</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label  className="form-label">Visibility</label>
                                            <select className="form-select" id="choices-publish-visibility-input" data-choices data-choices-search-false>
                                                <option value="Public" selected>Public</option>
                                                <option value="Hidden">Hidden</option>
                                            </select>
                                        </div>
                                    </div>
                                   
                                </div>
                               

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Publish Schedule</h5>
                                    </div>
                                   
                                    <div className="card-body">
                                        <div>
                                            <label className="form-label">Publish Date & Time</label>
                                            <input type="text" id="datepicker-publish-input" className="form-control" placeholder="Enter publish date" data-provider="flatpickr" data-date-format="d.m.y" data-enable-time />
                                        </div>
                                    </div>
                                </div>
                               

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Product Categories</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-muted mb-2"> <a href="#" className="float-end text-decoration-underline">Add
                                                New</a>Select product category</p>
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
                                        <h5 className="card-title mb-0">Product Tags</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="hstack gap-3 align-items-start">
                                            <div className="flex-grow-1">
                                                <input className="form-control" data-choices data-choices-multiple-remove="true" placeholder="Enter tags" type="text" value="Cotton" />
                                            </div>
                                        </div>
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