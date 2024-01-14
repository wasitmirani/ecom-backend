import React, { useState } from "react";

const PaginationComponent: React.FC<any>=(({
    items,
    currentPage,
    onPageChange,
  })=>{
 
    return (
        <>
        <div className="d-flex justify-content-end mt-3 mb-2">
                                        
                                            <div className="pagination-wrap hstack gap-2" >
                                                <a className={`page-item pagination-prev  ${currentPage === 1 ? 'disabled' : ''}`}
                                                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                                                >
                                                    Previous
                                                </a>
                                                <ul className="pagination listjs-pagination mb-0">
                                                {[...Array(items.last_page).keys()].map((page) => (
                                                                <li
                                                                    key={page + 1}
                                                                    className={` ${currentPage === page + 1 ? 'active' : ''}`}
                                                                >
                                                                    <a
                                                                        className="page"
                                                                        onClick={() => onPageChange(page + 1)}
                                                                    >
                                                                        {page + 1}
                                                                    </a>
                                                                </li>
                                                            ))}

                                                  
                                                </ul>
                                                <a className={`page-item pagination-next  ${currentPage ===items.last_page ? 'disabled' : ''}`}  href="#"  onClick={() => onPageChange(Math.min(items.last_page, currentPage + 1))}>
                                                    Next
                                                </a>
                                             
                                            </div>
                                        </div>
        </>
    );
})


export default PaginationComponent;