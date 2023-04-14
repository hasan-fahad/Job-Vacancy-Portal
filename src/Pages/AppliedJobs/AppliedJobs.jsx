import React, { useEffect, useState } from 'react';
import SingleFeaturedJobs from '../../components/SingleFeaturedJobs';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filterJob, setFilterJob] = useState([]);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("jobs"));
        if (storedData) {
            setJobs(storedData);
          setFilterJob(storedData);
        }
      }, []);

    const handleFilterJob = (event) => {
        const value = event.target.value;
        const filterData = jobs.filter((item) => item.work_area == value );
        setFilterJob(filterData)
      }
    return (
        <div>
            <div className="my-3">
                <label htmlFor="">Filter Order: </label>
                <select onChange={handleFilterJob} className="select select-bordered w-full max-w-xs ml-2">
                <option disabled selected>
                    Choose Here
                </option>
                <option value="Remote">Remote</option>
                <option value="Onsite">On site</option>
                </select>
            </div>
            <div className='w-full'>
            {filterJob.length > 0 ? (
                filterJob?.map((jobs) => (
                <div className="my-4 w-full">

                        <SingleFeaturedJobs featuredJob ={jobs}/>

                </div>
                ))
            ) : (
        <h1 className="text-xl text-center text-red-500">No Order Found</h1>
      )}
            </div>
        </div>
    );
};

export default AppliedJobs;