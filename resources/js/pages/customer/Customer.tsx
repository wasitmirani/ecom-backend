import React  from "react";


const Customer: React.FC = ()=>{
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
                                                <button className="btn btn-soft-danger" id="remove-actions" ><i className="ri-delete-bin-2-line"></i></button>
                                                <button type="button" className="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal"><i className="ri-add-line align-bottom me-1"></i> Add Customer</button>
                                                <button type="button" className="btn btn-info"><i className="ri-file-download-line align-bottom me-1"></i> Import</button>
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
                                                            <div className="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-control choices__input" data-plugin="choices" data-choices="" data-choices-search-false="" name="choices-single-default" id="idStatus" hidden="" tabindex="-1" data-choice="active"><option value="all" data-custom-properties="[object Object]">All</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="all" data-custom-properties="[object Object]" aria-selected="true">All</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><div className="choices__list" role="listbox"><div id="choices--idStatus-item-choice-4" className="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="4" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Status</div><div id="choices--idStatus-item-choice-1" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="1" data-value="Active" data-select-text="Press to select" data-choice-selectable="">Active</div><div id="choices--idStatus-item-choice-2" className="choices__item choices__item--choice is-selected choices__item--selectable" role="option" data-choice="" data-id="2" data-value="all" data-select-text="Press to select" data-choice-selectable="">All</div><div id="choices--idStatus-item-choice-3" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Block" data-select-text="Press to select" data-choice-selectable="">Block</div></div></div></div>
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
                                                        <th scope="col" style="width: 50px;">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="checkAll" value="option">
                                                            </div>
                                                        </th>

                                                        <th className="sort" data-sort="customer_name">Customer</th>
                                                        <th className="sort" data-sort="email">Email</th>
                                                        <th className="sort" data-sort="phone">Phone</th>
                                                        <th className="sort" data-sort="date">Joining Date</th>
                                                        <th className="sort" data-sort="status">Status</th>
                                                        <th className="sort" data-sort="action">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all"><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                            </div>
                                                        </th>
                                                        <td className="id" style="display:none;"><a href="javascript:void(0);" className="fw-medium link-primary">#VZ10</a></td>
                                                        <td className="customer_name">Timothy Smith</td>
                                                        <td className="email">timothysmith@velzon.com</td>
                                                        <td className="phone">973-277-6950</td>
                                                        <td className="date">13 Dec, 2021</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
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
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                            </div>
                                                        </th>
                                                        <td className="id" style="display:none;"><a href="javascript:void(0);" className="fw-medium link-primary">#VZ9</a></td>
                                                        <td className="customer_name">Herbert Stokes</td>
                                                        <td className="email">herbertstokes@velzon.com</td>
                                                        <td className="phone">312-944-1448</td>
                                                        <td className="date">20 Jul, 2021</td>
                                                        <td className="status"><span className="badge bg-danger-subtle text-danger text-uppercase">Block</span></td>
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
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                            </div>
                                                        </th>
                                                        <td className="id" style="display:none;"><a href="javascript:void(0);" className="fw-medium link-primary">#VZ8</a></td>
                                                        <td className="customer_name">Charles Kubik</td>
                                                        <td className="email">charleskubik@velzon.com</td>
                                                        <td className="phone">231-480-8536</td>
                                                        <td className="date">25 Sep, 2021</td>
                                                        <td className="status"><span className="badge bg-danger-subtle text-danger text-uppercase">Block</span></td>
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
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                            </div>
                                                        </th>
                                                        <td className="id" style="display:none;"><a href="javascript:void(0);" className="fw-medium link-primary">#VZ7</a></td>
                                                        <td className="customer_name">Glen Matney</td>
                                                        <td className="email">glenmatney@velzon.com</td>
                                                        <td className="phone">515-395-1069</td>
                                                        <td className="date">02 Nov, 2021</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
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
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                            </div>
                                                        </th>
                                                        <td className="id" style="display:none;"><a href="javascript:void(0);" className="fw-medium link-primary">#VZ6</a></td>
                                                        <td className="customer_name">Carolyn Jones</td>
                                                        <td className="email">carolynjones@velzon.com</td>
                                                        <td className="phone">414-453-5725</td>
                                                        <td className="date">07 Jun, 2021</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
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
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                            </div>
                                                        </th>
                                                        <td className="id" style="display:none;"><a href="javascript:void(0);" className="fw-medium link-primary">#VZ5</a></td>
                                                        <td className="customer_name">Kevin Dawson</td>
                                                        <td className="email">kevindawson@velzon.com</td>
                                                        <td className="phone">213-741-4294</td>
                                                        <td className="date">14 Mar, 2021</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
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
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                            </div>
                                                        </th>
                                                        <td className="id" style="display:none;"><a href="javascript:void(0);" className="fw-medium link-primary">#VZ4</a></td>
                                                        <td className="customer_name">Michael Morris</td>
                                                        <td className="email">michaelmorris@velzon.com</td>
                                                        <td className="phone">805-447-8398</td>
                                                        <td className="date">19 May, 2021</td>
                                                        <td className="status"><span className="badge bg-danger-subtle text-danger text-uppercase">Block</span></td>
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
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" name="chk_child" value="option1">
                                                            </div>
                                                        </th>
                                                        <td className="id" style="display:none;"><a href="javascript:void(0);" className="fw-medium link-primary">#VZ3</a></td>
                                                        <td className="customer_name">Robert McMahon</td>
                                                        <td className="email">robertmcmahon@velzon.com</td>
                                                        <td className="phone">786-253-9927</td>
                                                        <td className="date">12 Jan, 2021</td>
                                                        <td className="status"><span className="badge bg-success-subtle text-success text-uppercase">Active</span></td>
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
                                                    </tr></tbody>
                                            </table>
                                            <div className="noresult" style="display: none">
                                                <div className="text-center">
                                                   
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">We've searched more than 150+ customer We did not find any customer for you search.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <div className="pagination-wrap hstack gap-2" style="display: flex;">
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
                                    <div className="modal fade" id="showModal" tabindex="-1" aria-hidden="true" style="display: none;">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header bg-light p-3">
                                                    <h5 className="modal-title" id="exampleModalLabel">Add Customer</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                                                </div>
                                                <form className="tablelist-form" autocomplete="off">
                                                    <div className="modal-body">
                                                        <input type="hidden" id="id-field">

                                                        <div className="mb-3" id="modal-id" style="display: none;">
                                                            <label for="id-field1" className="form-label">ID</label>
                                                            <input type="text" id="id-field1" className="form-control" placeholder="ID" readonly="">
                                                        </div>

                                                        <div className="mb-3">
                                                            <label for="customername-field" className="form-label">Customer Name</label>
                                                            <input type="text" id="customername-field" className="form-control" placeholder="Enter name" required="">
                                                            <div className="invalid-feedback">Please enter a customer name.</div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label for="email-field" className="form-label">Email</label>
                                                            <input type="email" id="email-field" className="form-control" placeholder="Enter email" required="">
                                                            <div className="invalid-feedback">Please enter an email.</div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label for="phone-field" className="form-label">Phone</label>
                                                            <input type="text" id="phone-field" className="form-control" placeholder="Enter phone no." required="">
                                                            <div className="invalid-feedback">Please enter a phone.</div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label for="date-field" className="form-label">Joining Date</label>
                                                            <input type="text" id="date-field" className="form-control flatpickr-input" data-provider="flatpickr" data-date-format="d M, Y" required="" placeholder="Select date" readonly="readonly">
                                                            <div className="invalid-feedback">Please select a date.</div>
                                                        </div>

                                                        <div>
                                                            <label for="status-field" className="form-label">Status</label>
                                                            <div className="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div className="choices__inner"><select className="form-control choices__input" data-choices="" data-choices-search-false="" name="status-field" id="status-field" required="" hidden="" tabindex="-1" data-choice="active"><option value="" data-custom-properties="[object Object]">Status</option></select><div className="choices__list choices__list--single"><div className="choices__item choices__placeholder choices__item--selectable" data-item="" data-id="1" data-value="" data-custom-properties="[object Object]" aria-selected="true">Status</div></div></div><div className="choices__list choices__list--dropdown" aria-expanded="false"><input type="search" name="search_terms" className="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Status" placeholder=""><div className="choices__list" role="listbox"><div id="choices--status-field-item-choice-3" className="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="3" data-value="" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Status</div><div id="choices--status-field-item-choice-1" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="1" data-value="Active" data-select-text="Press to select" data-choice-selectable="">Active</div><div id="choices--status-field-item-choice-2" className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Block" data-select-text="Press to select" data-choice-selectable="">Block</div></div></div></div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer" style="display: block;">
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" className="btn btn-success" id="add-btn">Add Customer</button>
                                                            <!-- <button type="button" className="btn btn-success" id="edit-btn">Update</button> -->
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                 
                                    <div className="modal fade zoomIn" id="deleteRecordModal" tabindex="-1" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close" id="deleteRecord-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mt-2 text-center">
                                                      
                                                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                                            <h4>Are you sure ?</h4>
                                                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this record ?</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                                        <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn w-sm btn-danger" id="delete-record">Yes, Delete It!</button>
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
}

export default Customer;