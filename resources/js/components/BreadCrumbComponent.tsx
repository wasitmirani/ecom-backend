import { Breadcrumb } from '@/interfaces/breadcrumb_interface';
import React from 'react';
import { Link } from 'react-router-dom';
import Helpers  from "@/utils/helpers";

export const BreadcrumbComponent: React.FC<Breadcrumb> = (props) => {
  console.log(props.links);
  const helper = new Helpers();
  const links = props.links || [];

  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0">{props.active_name}</h4>

          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <Link to="/app/home">Home</Link>
              </li>
              
              {links.map((link:any, index) => (
                <li key={index} className="breadcrumb-item">
                  <Link to={helper.prefix_url+link.link}>{link.name}</Link>
                </li>
              ))}

              <li className="breadcrumb-item active">{props.active_name}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
