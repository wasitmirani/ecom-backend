import React, { useEffect, useState } from "react";
import Sidebar from "@/utils/sidebar";
import { Link } from "react-router-dom";
import { Props } from "@/interfaces/sidebar_interface";




const SideBarMenu : React.FC<Props>=  ({ menu }) =>{
    const logout = (event:any) => {
        event.preventDefault();
        console.log(event);
        // Logout logic

        window.location.href = "/logout";
      };
    useEffect(()=>{

    },[]);
    return (

        <div className="app-menu navbar-menu">

            <div className="navbar-brand-box">

                <Link to="/" className="logo logo-dark">
                    <span className="logo-sm">
						<h1>Vegipak</h1>
                        {/* <img src="/assets/images/logo-sm.png" alt="" height="22"/> */}
                    </span>
                    <span className="logo-lg">
						<h1>Vegipak</h1>
                        {/* <img src="/assets/images/logo-dark.png" alt="" height="17"/> */}
                    </span>
                </Link>

                <Link to="/" className="logo logo-light">
                    <span className="logo-sm">
					<h1>Vegipak</h1>
                        {/* <img src="/assets/images/logo-sm.png" alt="" height="22"/> */}
                    </span>
                    <span className="logo-lg">
					<h1>Vegipak</h1>
                        {/* <img src="/assets/images/logo-light.png" alt="" height="17"/> */}
                    </span>
                </Link>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
					{/* <li className="nav-item">
							  <Link className="nav-link menu-link" to='/app/home'>
							  <i className='icon-dual'></i> <span >
								Home
							  </span>
							  </Link>
				</li>
				<li className="nav-item">
							  <Link className="nav-link menu-link" to='/app/dashboard'>
							  <i className='icon-dual'></i> <span >
							Dashboard
							  </span>
							  </Link>
				</li> */}
					{menu && menu.map((menu_item,index) => (
						menu_item.type === 'heading' ? (
							<li className="menu-title">
							<span>{menu_item.title}</span>
							</li>
						) : menu_item.type === 'single' ? (

							  <li className="nav-item">
							  <Link className="nav-link menu-link" to={`${menu_item.link}`}>
							  <i className={menu_item.icon + ' icon-dual'}></i> <span>{menu_item.title}</span>
							  </Link>
						  </li>
						) : menu_item.type === 'multi' ? (

							 <li className="nav-item">
							 <Link className="nav-link menu-link" to={'#sidebar'+index} data-bs-toggle="collapse"  aria-controls={'sidebar'+index}>
								 {/*  <i data-feather="home" className="icon-dual"></i>   */}
								 <i className={menu_item.icon + ' icon-dual'}></i>
								 <span >{menu_item.title}</span>
							 </Link>
							 <div className="collapse menu-dropdown" id={'sidebar'+index}>
								 <ul className="nav nav-sm flex-column">
									{menu_item?.sub_menu?.map((item,i)=>(
						  			<li  className="nav-item">
										 <Link to={item.link} className="nav-link"> {item.title} </Link>
									 </li>
									))}

								 </ul>
							 </div>
						 </li>
						) : null
						))}

<li className="nav-item" >
<a className="nav-link menu-link" href="/logout" onClick={logout}>
  <i className="fa-solid fa-power-off icon-dual"></i> <span>Log out</span>
</a></li>

                    </ul>
                </div>
            </div>

            <div className="sidebar-background"></div>
        </div>
    );
}

export default SideBarMenu;
