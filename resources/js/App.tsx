import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  MasterComponent  from "./layouts/master";

function App() {
 
  return (
    <>
    <ToastContainer />
    <MasterComponent />
    </>
  )
}

export default App;
