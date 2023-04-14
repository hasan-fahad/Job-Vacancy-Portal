import React from 'react';
import { Link } from 'react-router-dom';

const SingleFeaturedJobs = ({featuredJob}) => {
    const {id, job_title, image, company_name, time, work_area, address, salary} = featuredJob;
    return (
        <div>
            <div className="card w-[550px] h-[100%] border-solid border-2 border-state-500	">
                <div className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <h2 className="text-xl">{company_name}</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-0'>
                        <button className="btn btn-outline btn-info w-28 h-12">{work_area}</button>
                        <button className="btn btn-outline  btn-success w-28 h-12">{time}</button>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 m-0'>
                        <h3>{address}</h3> 
                        <p>$Salary:{salary}</p>
                    </div>
                    <div className="card-actions justify-left">
                    <Link to={`/featuredJob/${id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFeaturedJobs;