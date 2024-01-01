import { Breadcrumb } from '@/interfaces/breadcrumb_interface';
import React from 'react';
import { Link } from 'react-router-dom';

export const BreadcrumbComponent: React.FC<Breadcrumb> =(props)=>{
    console.log(props.links);
    return (
        <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 className="mb-sm-0">{props.active_name}</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="javascript: void(0);">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript: void(0);">Ecommerce</Link></li>
                                        <li className="breadcrumb-item active">{props.active_name}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
    </div>
    );
}