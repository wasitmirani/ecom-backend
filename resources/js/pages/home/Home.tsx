import React, { useEffect,useState  } from 'react';
import { Link } from 'react-router-dom';
// import Helper from "../../utils/helpers";


const Home: React.FC = ()=>{

    const [is_loading, setIsLoading] = useState(true);
    const [auth_user,setAuthUser] = useState({});


    useEffect(() => {

        setAuthUser(auth_user);
      }, []); // Empty dependency array means this useEffect will run once when the component mounts

        return (
			<>

			<div className="row">
			<div className="col-12">
				<div className="page-title-box d-sm-flex align-items-center justify-content-between">
					<h4 className="mb-sm-0">Analytics</h4>

					<div className="page-title-right">
						<ol className="breadcrumb m-0">
							<li className="breadcrumb-item"><Link to="javascript: void(0);">Dashboards</Link></li>
							<li className="breadcrumb-item active">Analytics</li>
						</ol>
					</div>

				</div>
			</div>
		  </div>

		<div className="row">
			<div className="col-xxl-5">
				<div className="d-flex flex-column h-100">
					<div className="row h-100">
						<div className="col-12">
							<div className="card">
								<div className="card-body p-0">
									<div className="alert alert-primary border-0 rounded-0 m-0 d-flex align-items-center" role="alert">
										<i data-feather="alert-triangle" className="text-primary me-2 icon-sm"></i>


									</div>

									<div className="row align-items-end">
										<div className="col-sm-8">
											<div className="p-3">
												<p className="fs-16 lh-base">Hi, <span className="fw-semibold">Wasit Mirani</span></p>
												<div className="mt-3">

												</div>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="px-3">
												<img src="/assets/images/user-illustarator-2.png" className="img-fluid" alt=""/>
											</div>
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
        )
}

export default Home;
