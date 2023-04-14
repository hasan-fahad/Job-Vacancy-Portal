import React from 'react';
const SingleJobCatagory = ({jobCatagory}) => {
    const {id, img, jobs, title} = jobCatagory;
    return (
        <div className='my-8'>
            <div className="card card-compact w-auto bg-base-100 shadow-xl">
                <figure><img  src={img} alt="" /></figure>
                <div className="card-body ">
                    <h2 className="text-center text-xl">{title}</h2>
                    <p className="text-center ">{jobs}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleJobCatagory;