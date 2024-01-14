import React from 'react';

const EmptyDataComponent: React.FC  =  (props:any)=>{

    return (
        <>
         <div className="noresult" >
                                                <div className="text-center">
                                                   
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">{props?.massage}</p>
                                                </div>
                                            </div>
        </>
    );
}

export default EmptyDataComponent ;