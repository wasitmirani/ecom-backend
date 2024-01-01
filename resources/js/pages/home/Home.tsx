import React, { useEffect,useState  } from 'react';
import { Link } from 'react-router-dom';
// import Helper from "../../utils/helpers";


const Home: React.FC = ()=>{
  
    const [is_loading, setIsLoading] = useState(true);


    useEffect(() => {
	
        
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
										<div className="flex-grow-1 text-truncate">
											Your free trial expired in <b>17</b> days.
										</div>
										<div className="flex-shrink-0">
											<Link to="/" className="text-reset text-decoration-underline"><b>Upgrade</b></Link>
										</div>
									</div>

									<div className="row align-items-end">
										<div className="col-sm-8">
											<div className="p-3">
												<p className="fs-16 lh-base">Upgrade your plan from a <span className="fw-semibold">Free
														trial</span>, to ‘Premium Plan’ <i className="mdi mdi-arrow-right"></i></p>
												<div className="mt-3">
													<Link to="/" className="btn btn-primary">Upgrade
														Account!</Link>
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

					<div className="row">
						<div className="col-md-6">
							<div className="card card-animate">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<div>
											<p className="fw-medium text-muted mb-0">Users</p>
											<h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="28.05">0</span>k</h2>
											<p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0">
													<i className="ri-arrow-up-line align-middle"></i> 16.24 %
												</span> vs. previous month</p>
										</div>
										<div>
											<div className="avatar-sm flex-shrink-0">
												<span className="avatar-title bg-primary-subtle rounded-circle fs-2">
													<i data-feather="users" className="text-primary"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="card card-animate">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<div>
											<p className="fw-medium text-muted mb-0">Sessions</p>
											<h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="97.66">0</span>k</h2>
											<p className="mb-0 text-muted"><span className="badge bg-light text-danger mb-0">
													<i className="ri-arrow-down-line align-middle"></i> 3.96 %
												</span> vs. previous month</p>
										</div>
										<div>
											<div className="avatar-sm flex-shrink-0">
												<span className="avatar-title bg-primary-subtle rounded-circle fs-2">
													<i data-feather="activity" className="text-primary"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">
							<div className="card card-animate">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<div>
											<p className="fw-medium text-muted mb-0">Avg. Visit Duration</p>
											<h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="3">0</span>m
												<span className="counter-value" data-target="40">0</span>sec
											</h2>
											<p className="mb-0 text-muted"><span className="badge bg-light text-danger mb-0">
													<i className="ri-arrow-down-line align-middle"></i> 0.24 %
												</span> vs. previous month</p>
										</div>
										<div>
											<div className="avatar-sm flex-shrink-0">
												<span className="avatar-title bg-primary-subtle rounded-circle fs-2">
													<i data-feather="clock" className="text-primary"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="card card-animate">
								<div className="card-body">
									<div className="d-flex justify-content-between">
										<div>
											<p className="fw-medium text-muted mb-0">Bounce Rate</p>
											<h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="33.48">0</span>%</h2>
											<p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0">
													<i className="ri-arrow-up-line align-middle"></i> 7.05 %
												</span> vs. previous month</p>
										</div>
										<div>
											<div className="avatar-sm flex-shrink-0">
												<span className="avatar-title bg-primary-subtle rounded-circle fs-2">
													<i data-feather="external-link" className="text-primary"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-xxl-7">
				<div className="row h-100">
					<div className="col-xl-6">
						<div className="card card-height-100">
							<div className="card-header align-items-center d-flex">
								<h4 className="card-title mb-0 flex-grow-1">Live Users By Country</h4>
								<div className="flex-shrink-0">
									<button type="button" className="btn btn-soft-primary btn-sm">
										Export Report
									</button>
								</div>
							</div>


							<div className="card-body">
{/* style="height: 252px" */}
								<div id="users-by-country" data-colors='["--vz-light"]' className="text-center" ></div>

								<div className="table-responsive table-card mt-3">
									<table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-1">
										<thead className="text-muted border-dashed border border-start-0 border-end-0 bg-light-subtle">
											<tr>
												<th>Duration (Secs)</th>
												{/* style="width: 30%;" */}
												<th >Sessions</th>
												<th >Views</th>
											</tr>
										</thead>
										<tbody className="border-0">
											<tr>
												<td>0-30</td>
												<td>2,250</td>
												<td>4,250</td>
											</tr>
											<tr>
												<td>31-60</td>
												<td>1,501</td>
												<td>2,050</td>
											</tr>
											<tr>
												<td>61-120</td>
												<td>750</td>
												<td>1,600</td>
											</tr>
											<tr>
												<td>121-240</td>
												<td>540</td>
												<td>1,040</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

						</div>
					</div>

					<div className="col-xl-6">
						<div className="card card-height-100">
							<div className="card-header align-items-center d-flex">
								<h4 className="card-title mb-0 flex-grow-1">Sessions by Countries</h4>
								<div>
									<button type="button" className="btn btn-soft-secondary btn-sm">
										ALL
									</button>
									<button type="button" className="btn btn-soft-primary btn-sm">
										1M
									</button>
									<button type="button" className="btn btn-soft-secondary btn-sm">
										6M
									</button>
								</div>
							</div>
							<div className="card-body p-0">
								<div>
									<div id="countries_charts" data-colors='["--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary-rgb, 0.45", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary"]' className="apex-charts" dir="ltr"></div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-xl-6">
				<div className="card">
					<div className="card-header border-0 align-items-center d-flex">
						<h4 className="card-title mb-0 flex-grow-1">Audiences Metrics</h4>
						<div>
							<button type="button" className="btn btn-soft-secondary btn-sm">
								ALL
							</button>
							<button type="button" className="btn btn-soft-secondary btn-sm">
								1M
							</button>
							<button type="button" className="btn btn-soft-secondary btn-sm">
								6M
							</button>
							<button type="button" className="btn btn-soft-primary btn-sm">
								1Y
							</button>
						</div>
					</div>
					<div className="card-header p-0 border-0 bg-light-subtle">
						<div className="row g-0 text-center">
							<div className="col-6 col-sm-4">
								<div className="p-3 border border-dashed border-start-0">
									<h5 className="mb-1"><span className="counter-value" data-target="854">0</span>
										<span className="text-success ms-1 fs-12">49%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
									</h5>
									<p className="text-muted mb-0">Avg. Session</p>
								</div>
							</div>

							<div className="col-6 col-sm-4">
								<div className="p-3 border border-dashed border-start-0">
									<h5 className="mb-1"><span className="counter-value" data-target="1278">0</span>
										<span className="text-success ms-1 fs-12">60%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
									</h5>
									<p className="text-muted mb-0">Conversion Rate</p>
								</div>
							</div>

							<div className="col-6 col-sm-4">
								<div className="p-3 border border-dashed border-start-0 border-end-0">
									<h5 className="mb-1"><span className="counter-value" data-target="3">0</span>m
										<span className="counter-value" data-target="40">0</span>sec
										<span className="text-success ms-1 fs-12">37%<i className="ri-arrow-right-up-line ms-1 align-middle"></i></span>
									</h5>
									<p className="text-muted mb-0">Avg. Session Duration</p>
								</div>
							</div>

						</div>
					</div>
					<div className="card-body p-0 pb-2">
						<div>
							<div id="audiences_metrics_charts" data-colors='["--vz-primary", "--vz-light"]' className="apex-charts" dir="ltr"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-xl-6">
				<div className="card card-height-100">
					<div className="card-header align-items-center d-flex">
						<h4 className="card-title mb-0 flex-grow-1">Audiences Sessions by Country</h4>
						<div className="flex-shrink-0">
							<div className="dropdown card-header-dropdown">
								<Link className="text-reset dropdown-btn" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="fw-semibold text-uppercase fs-12">Sort by: </span><span className="text-muted">Current Week<i className="mdi mdi-chevron-down ms-1"></i></span>
								</Link>
								<div className="dropdown-menu dropdown-menu-end">
									<Link className="dropdown-item" to="#">Today</Link>
									<Link className="dropdown-item" to="#">Last Week</Link>
									<Link className="dropdown-item" to="#">Last Month</Link>
									<Link className="dropdown-item" to="#">Current Year</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card-body p-0">
						<div>
							<div id="audiences-sessions-country-charts" data-colors='["--vz-info", "--vz-primary"]' className="apex-charts" dir="ltr">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-xl-4">
				<div className="card card-height-100">
					<div className="card-header align-items-center d-flex">
						<h4 className="card-title mb-0 flex-grow-1">Users by Device</h4>
						<div className="flex-shrink-0">
							<div className="dropdown card-header-dropdown">
								<Link className="text-reset dropdown-btn" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="text-muted fs-16"><i className="mdi mdi-dots-vertical align-middle"></i></span>
								</Link>
								<div className="dropdown-menu dropdown-menu-end">
									<Link className="dropdown-item"to="#">Today</Link>
									<Link className="dropdown-item"to="#">Last Week</Link>
									<Link className="dropdown-item"to="#">Last Month</Link>
									<Link className="dropdown-item"to="#">Current Year</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card-body">
						<div id="user_device_pie_charts" data-colors='["--vz-primary", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.75"]' className="apex-charts" dir="ltr"></div>

						<div className="table-responsive mt-3">
							<table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
								<tbody className="border-0">
									<tr>
										<td>
											<h4 className="text-truncate fs-14 fs-medium mb-0"><i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Desktop
												Users</h4>
										</td>
										<td>
											<p className="text-muted mb-0"><i data-feather="users" className="me-2 icon-sm"></i>78.56k</p>
										</td>
										<td className="text-end">
											<p className="text-success fw-medium fs-12 mb-0"><i className="ri-arrow-up-s-fill fs-5 align-middle"></i>2.08%
											</p>
										</td>
									</tr>
									<tr>
										<td>
											<h4 className="text-truncate fs-14 fs-medium mb-0"><i className="ri-stop-fill align-middle fs-18 text-success me-2"></i>Mobile
												Users</h4>
										</td>
										<td>
											<p className="text-muted mb-0"><i data-feather="users" className="me-2 icon-sm"></i>105.02k</p>
										</td>
										<td className="text-end">
											<p className="text-danger fw-medium fs-12 mb-0"><i className="ri-arrow-down-s-fill fs-5 align-middle"></i>10.52%
											</p>
										</td>
									</tr>
									<tr>
										<td>
											<h4 className="text-truncate fs-14 fs-medium mb-0"><i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Tablet
												Users</h4>
										</td>
										<td>
											<p className="text-muted mb-0"><i data-feather="users" className="me-2 icon-sm"></i>42.89k</p>
										</td>
										<td className="text-end">
											<p className="text-danger fw-medium fs-12 mb-0"><i className="ri-arrow-down-s-fill fs-5 align-middle"></i>7.36%
											</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<div className="col-xl-4 col-md-6">
				<div className="card card-height-100">
					<div className="card-header align-items-center d-flex">
						<h4 className="card-title mb-0 flex-grow-1">Top Referrals Pages</h4>
						<div className="flex-shrink-0">
							<button type="button" className="btn btn-soft-primary btn-sm">
								Export Report
							</button>
						</div>
					</div>

					<div className="card-body">

						<div className="row align-items-center">
							<div className="col-6">
								<h6 className="text-muted text-uppercase fw-semibold text-truncate fs-12 mb-3">
									Total Referrals Page</h6>
								<h4 className="fs- mb-0">725,800</h4>
								<p className="mb-0 mt-2 text-muted"><span className="badge bg-success-subtle text-success mb-0">
										<i className="ri-arrow-up-line align-middle"></i> 15.72 %
									</span> vs. previous month</p>
							</div>
							<div className="col-6">
								<div className="text-center">
									<img src="/assets/images/illustrator-1.png" className="img-fluid" alt=""/>
								</div>
							</div>
						</div>
						<div className="mt-3 pt-2">
							<div className="progress progress-lg rounded-pill">
								{/* style="width: 25%" */}
								{/* style="width: 25%" */}
								{/*  style="width: 18%" */}
								{/* style="width: 22%" */}
								{/* style="width: 16%" */}
								{/* style="width: 19%"  */}
								<div className="progress-bar bg-primary" role="progressbar" ></div>
								<div className="progress-bar bg-secondary" role="progressbar"  ></div>
								<div className="progress-bar bg-success" role="progressbar"  ></div>
								<div className="progress-bar bg-warning" role="progressbar" ></div>
								<div className="progress-bar bg-danger" role="progressbar" ></div>
							</div>
						</div>

						<div className="mt-3 pt-2">
							<div className="d-flex mb-2">
								<div className="flex-grow-1">
									<p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-primary me-2"></i>www.google.com
									</p>
								</div>
								<div className="flex-shrink-0">
									<p className="mb-0">24.58%</p>
								</div>
							</div>
							<div className="d-flex mb-2">
								<div className="flex-grow-1">
									<p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-secondary me-2"></i>www.youtube.com
									</p>
								</div>
								<div className="flex-shrink-0">
									<p className="mb-0">17.51%</p>
								</div>
							</div>
							<div className="d-flex mb-2">
								<div className="flex-grow-1">
									<p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-success me-2"></i>www.meta.com
									</p>
								</div>
								<div className="flex-shrink-0">
									<p className="mb-0">23.05%</p>
								</div>
							</div>
							<div className="d-flex mb-2">
								<div className="flex-grow-1">
									<p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-warning me-2"></i>www.medium.com
									</p>
								</div>
								<div className="flex-shrink-0">
									<p className="mb-0">12.22%</p>
								</div>
							</div>
							<div className="d-flex">
								<div className="flex-grow-1">
									<p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-danger me-2"></i>Other
									</p>
								</div>
								<div className="flex-shrink-0">
									<p className="mb-0">17.58%</p>
								</div>
							</div>
						</div>

						<div className="mt-2 text-center">
							<Link to="javascript:void(0);" className="text-muted text-decoration-underline">Show
								All</Link>
						</div>

					</div>
				</div>
			</div>

			<div className="col-xl-4 col-md-6">
				<div className="card card-height-100">
					<div className="card-header align-items-center d-flex">
						<h4 className="card-title mb-0 flex-grow-1">Top Pages</h4>
						<div className="flex-shrink-0">
							<div className="dropdown card-header-dropdown">
								<Link className="text-reset dropdown-btn" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="text-muted fs-16"><i className="mdi mdi-dots-vertical align-middle"></i></span>
								</Link>
								<div className="dropdown-menu dropdown-menu-end">
									<Link className="dropdown-item" to="#">Today</Link>
									<Link className="dropdown-item" to="#">Last Week</Link>
									<Link className="dropdown-item" to="#">Last Month</Link>
									<Link className="dropdown-item" to="#">Current Year</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card-body">
						<div className="table-responsive table-card">
							<table className="table align-middle table-borderless table-centered table-nowrap mb-0">
								<thead className="text-muted table-light">
									<tr>
										<th scope="col" >Active Page</th>
										<th scope="col">Active</th>
										<th scope="col">Users</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<Link to="javascript:void(0);" className="link-secondary">/themesbrand/skote-25867</Link>
										</td>
										<td>99</td>
										<td>25.3%</td>
									</tr>
									<tr>
										<td>
											<Link to="javascript:void(0);" className="link-secondary">/dashonic/chat-24518</Link>
										</td>
										<td>86</td>
										<td>22.7%</td>
									</tr>
									<tr>
										<td>
											<Link to="javascript:void(0);" className="link-secondary">/skote/timeline-27391</Link>
										</td>
										<td>64</td>
										<td>18.7%</td>
									</tr>
									<tr>
										<td>
											<Link to="javascript:void(0);" className="link-secondary">/themesbrand/minia-26441</Link>
										</td>
										<td>53</td>
										<td>14.2%</td>
									</tr>
									
									
								
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
        )
}

export default Home;