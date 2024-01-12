import { axios_request } from "@/bootstrap";
import { BreadcrumbComponent } from "@/components/BreadCrumbComponent";
import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from 'react-router-dom';

import { toast } from "react-toastify";

const UpdateProduct: React.FC = ()=>{
    const { uuid } = useParams<any>();

    console.log(uuid);
     // State for form fields
    const [productTitle, setProductTitle] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productSKU, setProductSKU] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productType, setProductType] = useState("");
    const [productDescription, setProductDescription] = useState("")
    const [productDiscount,setProductDiscount] = useState<any>([]);
    const [productImages, setProductImages] = useState<File[]>([]);
    const [categories,setCategories] = useState<any>([]);
 
    
    const navigate = useNavigate();
    const getProduct=(()=>{
        axios_request.get(`/product/${uuid}`).then((res)=>{
            console.log(res.data);
            const product=res.data;
            setProductSKU(product.sku);
            setProductCategory(product.category_id);
            setProductDescription(product.description);
            setProductDiscount(product.discount);
            setProductPrice(product.price);
            setProductTitle(product.name);
            setProductType(product.type);

        });
    })
    const getCategories= (()=>{
        axios_request.get('/categories-list').then((res)=>{
            setCategories(res.data.results.categories);

        });
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can perform any additional validation or API calls before submitting
        
      
         // Append image files

        let data={'name':productTitle,'price':productPrice,'sku':productSKU,'category_id':productCategory,
        'description':productDescription,'discount':productDiscount,'type':productType};
       
        
        // Example: Log the form data
        axios_request.put(`/product/${uuid}`,data).then((res)=>{

            toast.info(res.data.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                navigate('/app/catalog/products');
        }).catch((err)=>{
            console.log(err.response.data.message);
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
    
        // You can add logic here to send data to your server or perform any other actions
      };
      useEffect(()=>{
        getProduct();
                getCategories();
      },[]);
    return (
        <>
            <BreadcrumbComponent active_name="Update Product" links={[{name:"Products",link:"/products"}]}/>


            <form id="createproduct-form" className="needs-validation" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label className="form-label" >Product Name</label>
                                            <input type="text"   value={productTitle}
                                                                 onChange={(e) => setProductTitle(e.target.value)} 
                                                                 className="form-control" id="product-title-input"  
                                                                 placeholder="Enter product name" required/>
                                           
                                        </div>
                                        <div>
                                            <div className="row">
                                           
                                                <div className="col-md-4">
                                                <label>Product Price</label>
                                                <input type="number" min={1} value={productPrice}
                                                                 onChange={(e) => setProductPrice(e.target.value)}  className="form-control" id="product-title-input"  placeholder="Enter product price" required/>

                                                </div>
                                                <div className="col-md-4">
                                                <label>Product Discount</label>
                                                <input type="number" min={0}  value={productDiscount}
                                                                 onChange={(e) => setProductDiscount(e.target.value)}  className="form-control" id="product-title-input"  placeholder="Enter product discount" />

                                                </div>
                                                <div className="col-md-4">
                                                <label>Product SKU</label>
                                                <input type="text"   value={productSKU}
                                                                 onChange={(e) => setProductSKU(e.target.value)} className="form-control" id="product-title-input"  placeholder="Enter product sku" required/>

                                                </div>
                                            </div>
                                            

                                        </div>
                                    </div>
                                </div>
                            

                                {/* <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Product Gallery</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <h5 className="fs-14 mb-1">Product Images</h5>
                                            <p className="text-muted">Add Product main Images.</p>
                                            <div className="text-center">
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                multiple
                                                onChange={(e) =>
                                                e.target.files && setProductImages([...e.target.files])
                                                }
                                            />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div> */}
                               

                             
                    
                                <div className="text-end mb-3">
                                    <button type="submit" className="btn btn-success w-sm">Update</button>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                             
                               

                             
                               

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Product Categories</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                        <p className="text-muted mb-2"> Select product category</p>
                                        <select className="form-select" value={productCategory}
                                                                 onChange={(e) => setProductCategory(e.target.value)} id="choices-category-input" name="choices-category-input" data-choices data-choices-search-false>
                                        <option value="" disabled>Select Category</option>
                                        {categories.map((category: any) => (
                                            <option key={category.id} value={category.id} selected={productCategory === category.id}>
                                                {category?.name}
                                            </option>
                                            ))}
                                            
                                            
                                        </select>
                                        </div>
                                        <div className="row mt-2">
                                        <p className="text-muted mb-2"> Select product type</p>
                                        <select className="form-select" value={productType}
                                                                 onChange={(e) => setProductType(e.target.value)} id="choices-category-input" name="choices-category-input" data-choices data-choices-search-false>
                                        <option value="" disabled>Select Type</option>
                                        <option value="digital" >Digital</option>
                                        <option value="physical" >Physical</option>
                                        <option value="service" >Service</option>
                                            
                                        </select>
                                        </div>
                                       
                                    </div>
                               
                                </div>
                              
                           
                            

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Product Short Description</h5>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-muted mb-2">Add short description for product</p>
                                        <textarea className="form-control" value={productDescription}
                                                                 onChange={(e) => setProductDescription(e.target.value)} placeholder="Must enter minimum of a 100 characters" rows="3"></textarea>
                                    </div>
                                   
                                </div>
                              
                            </div>
                           
                        </div>
                       

                    </form>
        </>
    );
}

export default UpdateProduct;