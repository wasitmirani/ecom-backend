
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Helper from '@/utils/helpers';
import { BreadcrumbComponent } from '@/components/BreadCrumbComponent';
import { axios_request } from "@/bootstrap";
import { toast } from 'react-toastify';
import LoadingComponent from '@/components/LoadingComponent';
import PaginationComponent from '@/components/PaginationComponent';
import useFileUpload from 'react-use-file-upload';

import Swal from 'sweetalert2';
const helper = new Helper();

const Products: React.FC = () => {
    const [products, setProducts] = useState<any>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

        const {
          files,
          fileNames,
          fileTypes,
          totalSize,
          totalSizeInBytes,
          handleDragDropEvent,
          clearAllFiles,
          createFormData,
          setFiles,
          removeFile,
        } = useFileUpload();

        const inputRef = useRef();

  const uploadFile = async (e:any) => {
    e.preventDefault();

    const formData = createFormData();

    try {
        axios_request.post('https://some-api.com', formData, {
        'content-type': 'multipart/form-data',
      });
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };
    const getProducts = () => {
        setLoading(true);
        axios_request.get(`/product?page=${currentPage}`).then((res) => {
            setProducts(res.data.results.products);

        });
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };
    const updateProduct = (uuid: string) => {
        console.log('updating product', uuid);
        navigate('/app/catalog/update-product/' + uuid);
    }
    const deleteProduct = (uuid: string) => {
        console.log(uuid);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios_request.delete(`/product/${uuid}`).then((response) => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your product has been deleted.",
                        icon: "success"
                    });
                    getProducts();
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

            }
        });
    }

    const handleSearch = (event: any) => {
        setLoading(true);
        const query = event.target.value;
        setSearchQuery(query);
        if (query.length > 2) {
            setTimeout(() => {
                // Filter products based on the search query
                setCurrentPage(1);
                axios_request.get(`/product?page=${currentPage}&query=${searchQuery}`).then((res) => {
                    setProducts(res.data.results.products);

                });
            }, 1500);
        }
        else {
            getProducts();
        }


        setTimeout(() => {
            setLoading(false);
        }, 300);
    };

    useEffect(() => {

        getProducts();
    }, [currentPage]); // Empty dependency array ensures the effect runs only once




    return (
        <>
            <BreadcrumbComponent active_name="Products" links={[{ name: "Products", link: "/products" }]} />
            <div className="row">



                <div className="col-xl-12 col-lg-12">
                    <div className="card-test">
                        <div className="card-body">


                            <ul className="nav nav-pills nav-customs nav-danger mb-3" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#border-navs-home" role="tab" aria-selected="false" >Products</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link " data-bs-toggle="tab" href="#border-navs-profile" role="tab" aria-selected="true">Import</a>
                                </li>

                            </ul>
                            <div className="tab-content text-muted">
                                <div className="tab-pane  active show" id="border-navs-home" role="tabpanel">
                                    {/* PRoducts Table */}
                                    <div className="card">
                                        <div className="card-header border-0">
                                            <div className="row g-4">
                                                <div className="col-sm-auto">
                                                    <div>
                                                        <Link to={helper.prefix_url + `/catalog/create-product`}
                                                            className="btn btn-success" id="addproduct-btn">
                                                            <i className="ri-add-line align-bottom me-1"></i>
                                                            Add Product</Link>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="d-flex justify-content-sm-end">
                                                        <div className="search-box ms-2">
                                                            <input value={searchQuery}
                                                                onChange={handleSearch} type="search" className="form-control" id="searchProductList" placeholder="Search Products..." />
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
                                                                All <span className="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">{products?.total ?? 0}</span>
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

                                                                        <th scope="col">Name</th>
                                                                        <th scope="col">Category</th>
                                                                        <th scope="col">SKU</th>
                                                                        <th scope="col">Price</th>
                                                                        <th scope="col">Discount</th>
                                                                        <th scope="col">Type</th>
                                                                        <th scope="col">Created</th>
                                                                        <th scope="col">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {loading ?
                                                                        (
                                                                            <tr >
                                                                                <td colSpan={7} style={{ textAlign: 'center' }}>
                                                                                    <LoadingComponent />
                                                                                </td>

                                                                            </tr>

                                                                        ) : (
                                                                            <>

                                                                                {products?.data?.map((product: any) => (
                                                                                    <tr key={product.id}>

                                                                                        <td><Link to="#" className="fw-medium">
                                                                                            {product.name}</Link></td>
                                                                                        <td>{product?.category?.name ?? 'N/A'}</td>
                                                                                        <td>{product.sku ?? 'N/A'}</td>
                                                                                        <td>Rs.{product.price ?? 0}</td>
                                                                                        <td>Rs.{product.discount ?? 0}</td>
                                                                                        <td>{product.type}</td>
                                                                                        <td>{helper.timeformat(product.created_at) ?? 'N/A'}</td>
                                                                                        <td>
                                                                                            <ul className="list-inline hstack gap-2 mb-0">

                                                                                                <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">
                                                                                                    <a href="#UpdateOrder" onClick={() => updateProduct(product.uuid)} data-bs-toggle="modal" className="text-primary d-inline-block edit-item-btn">
                                                                                                        <i className="ri-pencil-fill fs-16"></i>
                                                                                                    </a>
                                                                                                </li> |
                                                                                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Remove">
                                                                                                    <a
                                                                                                        onClick={() => deleteProduct(product.uuid)}
                                                                                                        className="text-danger d-inline-block remove-item-btn"
                                                                                                        data-bs-toggle="modal"
                                                                                                        href="#deleteOrder"
                                                                                                    >
                                                                                                        <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                                                    </a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </td>

                                                                                    </tr>
                                                                                ))}
                                                                            </>
                                                                        )}
                                                                </tbody>
                                                                <tfoot className="table-light">

                                                                </tfoot>
                                                            </table>
                                                            {/* Pagination */}
                                                            {products?.data?.length > 0 &&
                                                                (<PaginationComponent items={products}
                                                                    currentPage={currentPage} onPageChange={handlePageChange}
                                                                />

                                                                )
                                                            }
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
                                <div className="tab-pane" id="border-navs-profile" role="tabpanel">
                                                {/* Import Product */}

                                            <div className="card card-body">

                                        <h4 className="card-title">Upload Products
                                        <a className='m-3' href="/sample/product_sample.xlsx" download>Download Sample File</a>
                                        </h4>
                                        <p className="card-text text-muted">Please use the form to your right to upload any cvs  file of your choosing.</p>

                                        <div className='row'>
                                                <div className='col'>
                                                    <input type="file" name="file" placeholder='Import Products' className='form-control' />
                                                </div>
                                                <div className='col'>
                                                <a href="javascript:void(0);" className="btn btn-success">Upload</a>
                                                </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>


                    </div>
                </div>

            </div>

        </>
    );
}

export default Products;
