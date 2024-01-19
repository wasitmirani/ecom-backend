import { axios_request } from '@/bootstrap';
import { BreadcrumbComponent } from '@/components/BreadCrumbComponent';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Account: React.FC = () => {
    const [user,setUser]=useState<any>([]);
    const [formData, setFormData] = useState<any>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        joiningDate: '',
    });


    const getUser = () => {
        axios_request.get('/auth-user').then((res) => {
            let data = res.data.user;
            setUser(data);
             data={
                firstName: data.first_name,
                lastName: data.last_name,
                email: data.email,
                phone: data.phone,
                joiningDate:data.created_at,
              };
            setFormData(data);
            console.log(user);
        });
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData:any) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Add logic here to handle the form submission, such as updating the user data.
        console.log('Form submitted with data:', formData);
        axios_request.post(`/user/${user.id}/update`, formData).then((res) => {

            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });


        }).catch((err) => {
            console.log(err.response.data.message);
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


    };
    useEffect(()=>{
        getUser();
        console.log("User");

    },[]);
    return (
        <>
            <BreadcrumbComponent active_name="Account" />
            <div className="row " style={{ marginTop: '3%' }}>
                <div className="col-xxl-12">
                    <div className="card mt-xxl-n5">
                        <div className="card-header">
                            <ul className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab" aria-selected="false" tabindex="-1">
                                        <i className="fas fa-home"></i> Personal Details
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link " data-bs-toggle="tab" href="#changePassword" role="tab" aria-selected="true">
                                        <i className="far fa-user"></i> Change Password
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link " data-bs-toggle="tab" href="#experience" role="tab" aria-selected="true">
                                    <i class="fa-solid fa-gear"></i> Settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body p-4">
                            <div className="tab-content">

                                <div className="tab-pane active show" id="personalDetails" role="tabpanel">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">First Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        name='firstName'
                                                        placeholder="Enter your First Name"
                                                        value={formData.firstName}
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="lastName"
                                                        name='lastName'
                                                        required
                                                        placeholder="Enter your Last Name"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Phone Number</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phone"
                                                        name='phone'
                                                        placeholder="Enter your phone number"
                                                        value={formData.phone}
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Email Address</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name='email'
                                                        placeholder="Enter your email"
                                                        value={formData.email}
                                                        required
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Joining Date</label>
                                                    <input
                                                        type="text"
                                                        className="form-control flatpickr-input"

                                                        id="joiningDate"
                                                        name='joiningDate'

                                                        placeholder="Select date"
                                                        readOnly={true}
                                                        value={formData.joiningDate}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-lg-12">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button type="submit" className="btn btn-primary">
                                                        Update
                                                    </button>
                                                    <button type="button" className="btn btn-soft-success">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane " id="changePassword" role="tabpanel">
                                    <form action="javascript:void(0);">
                                        <div className="row g-2">
                                            <div className="col-lg-4">
                                                <div>
                                                    <label className="form-label">Old Password*</label>
                                                    <input type="password" className="form-control" id="oldpasswordInput" placeholder="Enter current password" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <label className="form-label">New Password*</label>
                                                    <input type="password" className="form-control" id="newpasswordInput" placeholder="Enter new password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div>
                                                    <label className="form-label">Confirm Password*</label>
                                                    <input type="password" className="form-control" id="confirmpasswordInput" placeholder="Confirm password" />
                                                </div>
                                            </div>


                                            <div className="col-lg-12">
                                                <div className="text-end">
                                                    <button type="submit" className="btn btn-success">Change Password</button>
                                                </div>
                                            </div>

                                        </div>

                                    </form>


                                </div>
                                <div  className="tab-pane " id="experience" role="tabpanel">
                                            <form>
                                                <div id="newlink">
                                                    <div id="1">
                                                        <div  className="row">




                                                            <div  className="col-lg-6">
                                                                <div  className="mb-3">

                                                                    <div  className="row">

                                                                        <div  className="col-2">
                                                                        <label  className="form-label">Start</label>
                                                                            <input type="time" name="starttime" id="" />
                                                                        </div>



                                                                        <div  className="col-2">
                                                                        <label className="form-label">End</label>
                                                                        <input type="time" name="starttime" id="" />
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>



                                                        </div>

                                                    </div>
                                                </div>

                                                <div  className="col-lg-12">
                                                    <div  className="hstack gap-2">
                                                        <button type="submit"  className="btn btn-success">Update</button>

                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Account;
