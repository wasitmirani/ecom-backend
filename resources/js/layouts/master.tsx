import React, { useEffect, useState } from 'react';
import SideBarMenu from './components/sidebar';
import {HeaderMenu} from './components/header';
import {Routes as ReactRoutes, Route} from 'react-router-dom';
import {routes}  from "../routes/router";
import Sidebar from '@/utils/sidebar';
import { MenuItem } from '@/interfaces/sidebar_interface';
import { BrowserRouter } from "react-router-dom";


const Master : React.FC=()=>{
// const app_routes = useRoutes(routes);

const [menu, setMenu] = useState<MenuItem[]>([]);
const sidebar = new Sidebar();
useEffect(() => {
// Assuming getMenuList is a synchronous function

const menuList = sidebar.getMenuList();
setMenu(menuList);
}, []); 
return (
    <>
     {/* <Routes> */}
     <BrowserRouter>
    <div id="layout-wrapper">

{/* Header */}
<HeaderMenu/>

<div id="removeNotificationModal" className="modal fade zoomIn"  aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
            </div>
            <div className="modal-body">
                <div className="mt-2 text-center">
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you sure ?</h4>
                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn w-sm btn-danger" id="delete-notification">Yes, Delete It!</button>
                </div>
            </div>

        </div>
    </div>
</div>

        {/* Sidebar Menu */}

        <SideBarMenu menu={menu}/>

        <div className="vertical-overlay"></div>


        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    {/* routes */}
             
                    <ReactRoutes>

                    {routes.map((route,i) => {
                        return (
                            <Route   path={route.path} key={i} element={<route.page.component />}></Route>
                        )})}
                     </ReactRoutes>
                </div>

            </div>


        {/* Footer */}
        </div>

    </div>
    {/* </Routes> */}
    </BrowserRouter>
    </>
);
}

export default Master;
