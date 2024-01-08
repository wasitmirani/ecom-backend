import React from "react";


const ErrorComponent: React.FC = ((props) => {
    
    return (
        <>
            <div className="alert alert-danger alert-dismissible fade show material-shadow mb-xl-0" role="alert">
                <strong> Something is very wrong! </strong> A simple <b>Dismissible danger alert</b> —check
                it out!
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    );
});
