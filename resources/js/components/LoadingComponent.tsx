

import React from "react";


const LoadingComponent: React.FC = ((props) => {
    
    return (
        <>
            <div className="spinner-grow text-dark " role="status">
                                                                    <span className="sr-only">Loading...</span>
                                                                </div>
        </>
    );
});

export default LoadingComponent;
