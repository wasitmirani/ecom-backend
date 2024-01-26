import { axios_request } from "@/bootstrap";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export const HeaderMenu : React.FC = ()=>{
    const [user,setUser]=useState<any>([]);

    const getUser = () => {
        axios_request.get('/auth-user').then((res) => {
            let data = res.data.user;
            let setting= res.data.setting;

            setUser(data);


        });
    }
    useEffect(()=>{
        getUser();
        console.log("User");

    },[]);
        return (
            <header id="page-topbar">
            <div className="layout-width">
                <div className="navbar-header">
                    <div className="d-flex">



                        <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                            <span className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                    </div>

                    <div className="d-flex align-items-center">

                        <div className="ms-1 header-item d-none d-sm-flex">
                            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode">
                                <i className='bx bx-moon fs-22'></i>
                            </button>
                        </div>


                        <div className="dropdown ms-sm-3 header-item topbar-user">
                            <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="d-flex align-items-center">
                                    <img className="rounded-circle header-profile-user" src="/assets/images/users/user-dummy-img.jpg" alt="Header Avatar"/>
                                    <span className="text-start ms-xl-2">
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{user.name}</span>
                                        <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">{user.user_type
                                        }</span>
                                    </span>
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">

                                <h6 className="dropdown-header">Welcome {user.name}!</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        );
}

