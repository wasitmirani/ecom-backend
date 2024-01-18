import React, { useEffect, useState }  from "react";
import EmptyDataComponent from "@/components/EmptyDataComponent";
import { axios_request } from "@/bootstrap";
import Helper from "@/utils/helpers";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import PaginationComponent from "@/components/PaginationComponent";
import LoadingComponent from "@/components/LoadingComponent";
import { BreadcrumbComponent } from "@/components/BreadCrumbComponent";


const Users: React.FC = ()=>{
    const helper = new Helper();
    const [users ,setUsers] =useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [edit_user ,setEditUser] = useState([]);
    const [edit_mode, setEditMode] = useState(false);
    const [formData, setFormData] = useState<any>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
      });

     // Define your API endpoint with filter parameters
     const apiUrl = `/users?page=${currentPage}&query=${searchTerm}&date=${selectedDate}&status=${selectedStatus}`;
   const getuser=async (page?:string)=>{
        setLoading(true);
        if(page){
            setCurrentPage(1);
        }
        await axios_request.get(apiUrl).then((res)=>{
            setUsers(res.data.users);
        });

        setTimeout(() => {
            setLoading(false);
        }, 300);

    }
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
      };
      const handleChange = (e: any) => {
        const { name, value } = e.target;

        setFormData((prevData:any) => ({ ...prevData, [name]: value }));
        console.log(formData,"formData");

      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        axios_request.post('/user',formData).then((res)=>{

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


        }).catch((err)=>{
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
    const deleteUser =  (id:string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {
                try {
                     axios_request.delete(`/user/${id}/delete`).then((res) => {

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
                         getuser();

                   }).catch((err) => {
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

                 } catch (error) {

                 }

            }
          });


      };

    const EditUser = (user:any)=>{
        setEditMode(true);
        setEditUser(user);
        console.log(edit_user,"edit_user");
        let data={
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            phone: user.phone,
          };
        setFormData(data);
        console.log(edit_mode);
    }
    const createUser = ()=>{
        setEditMode(false);
        setEditUser([]);
        setFormData(
            {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: '',
              }
        );
    }


    useEffect(()=>{
        getuser();
    }, [currentPage]);
    return (
        <>
          <BreadcrumbComponent active_name="users"  />
        <div className="row">
                        <div className="col-lg-12">
                            <div className="card" id="userList">
                                <div className="card-header border-bottom-dashed">

                                    <div className="row g-4 align-items-center">
                                        <div className="col-sm">
                                            <div>
                                                <h5 className="card-title mb-0">Users List</h5>


                                            </div>

                                        </div>
                                        <div className="col-2">
                                        <button onClick={() => createUser()}
                                                to="javascript:void(0);"
                                                data-bs-toggle="modal"
                                                data-bs-target="#showModal"
                                                title="Edit" type="button"
                                                 className="btn btn-primary w-100 ">


                                                 Create</button>
                                        </div>
                                        <div className="col-sm-auto">
                                            <div className="d-flex flex-wrap align-items-start gap-2">


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body border-bottom-dashed border-bottom">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-xl-6">
                                                <div className="search-box">
                                                    <input type="search" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className="form-control search" placeholder="Search for user, email, phone, status or something..."/>
                                                    <i className="ri-search-line search-icon"></i>
                                                </div>
                                            </div>

                                            <div className="col-xl-6">
                                                <div className="row g-3">
                                                    <div className="col-sm-4">
                                                        <div className="">
                                                            <input type="date"  value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)} className="form-control flatpickr-input" placeholder="Select date" />
                                                        </div>
                                                    </div>

                                                    {/* <div className="col-sm-4">
                                                        <div>

                                                                <select value={selectedStatus}
                                                                 onChange={(e) => setSelectedStatus(e.target.value)} className="form-select" aria-label="Default select example">
                                                                    <option selected disabled >Select Status</option>
                                                                    <option value="">All</option>
                                                                    <option value="1">Active</option>
                                                                    <option value="0">InActive</option>
                                                                    </select>
                                                                </div>

                                                    </div> */}http://ecom-backend.test/app/orders


                                                    <div className="col-sm-4">
                                                        <div>
                                                            <button type="button"  onClick={()=>getuser("1")} className="btn btn-primary w-100"> <i className="ri-equalizer-fill me-2 align-bottom"></i>Filters</button>
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
                                            <table className="table align-middle" id="userTable">
                                                <thead className="table-light text-muted">
                                                    <tr>


                                                        <th className="sort" data-sort="user_name">Name</th>
                                                        <th className="sort" data-sort="email">Email</th>
                                                        <th className="sort" data-sort="phone">Phone</th>
                                                        <th className="sort" data-sort="date">Joining Date</th>
                                                        <th className="sort" data-sort="status">Status</th>
                                                        <th className="sort" data-sort="action">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">
                                                {loading ?
                                                            (
                                                                <tr >
                                                                    <td colSpan={7} style={{ textAlign: 'center' }}>
                                                                        <LoadingComponent />
                                                                    </td>

                                                                </tr>

                                                            ) : (
                                                                <>
                                                    {users?.data?.map((user:any) =>(
                                                          <tr>

                                                          {/* style="display:none;" */}

                                                          <td className="user_name">{user.name}</td>
                                                          <td className="email">{user.email}</td>
                                                          <td className="phone">{user.phone}</td>
                                                          <td className="date">{helper.timeformat(user.created_at)}</td>
                                                          <td className="status">

                                                            {user.deleted_at  ? (

                                                                <span className="badge bg-danger-subtle text-danger text-uppercase">InActive
                                                                </span>
                                                            )  : (
                                                                <span className="badge bg-success-subtle text-success text-uppercase">Active
                                                                </span>
                                                            )}
                                                          </td>
                                                          <td>
                                                              <ul className="list-inline hstack gap-2 mb-0">

                                                                  <li className="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                      <Link  onClick={() => EditUser(user)} to="javascript:void(0);"   data-bs-toggle="modal" data-bs-target="#showModal"  title="Edit" className="text-primary d-inline-block edit-item-btn">
                                                                      <i className="fa-solid fa-edit"></i>
                                                                      </Link>
                                                                  </li>

                                                                  <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove">
                                                                     <Link  onClick={() => deleteUser(user.id)} data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Block"  className="text-danger d-inline-block remove-item-btn" to="#deleteRecordModal">
                                                                     <i className="ri-delete-bin-5-fill fs-16"></i>
                                                                      </Link>
                                                                  </li>

                                                              </ul>
                                                          </td>
                                                      </tr>
                                                    ))}
                                                    </>
                                                            ) }

                                                   </tbody>
                                            </table>
                                            {/* style="display: none" */}
                                            {users.total < 1 && (
                                                  <EmptyDataComponent/>
                                            )}



                                        </div>

                                                 {/* Pagination */}
                                                 { users?.data?.length > 0 &&
                                                    ( <PaginationComponent items={users}
                                                        currentPage={currentPage} onPageChange={handlePageChange}
                                                    />

                                                    )
                                                }
                                    </div>
                                    {/* style="display: none;" */}




                                </div>
                            </div>

                        </div>

                    </div>


            <div className="modal fade zoomIn" id="showModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-info-subtle">
                                    <h5 className="modal-title" id="exampleModalLabel">{edit_mode == true ? ' Update User' :' Create User' }</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                                </div>
                                {/*  onSubmit={updateAddress} */}
                                <form className="tablelist-form" onSubmit={handleSubmit}>
      <div className="modal-body">
        <div className="row g-3">
          <div className="col-lg-6">
            <div>
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}

                required={!edit_mode}

              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label htmlFor="password_confirmation" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.password_confirmation}
                onChange={handleChange}
                required={!edit_mode}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="hstack gap-2 justify-content-end">
          <button type="button" className="btn btn-light" data-bs-dismiss="modal">
            Close
          </button>
          <button type="submit" className="btn btn-success" id="add-btn">
          {edit_mode == true ?  'Update' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
                            </div>
                        </div>
        </div>
        </>
    );
}

export default Users;
