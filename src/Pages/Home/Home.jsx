import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import { useLoaderData } from 'react-router-dom';
import SingleJobCatagory from '../../components/singleJobCatagory';
import SingleFeaturedJobs from '../../components/SingleFeaturedJobs';

const Home = () => {
    const data = useLoaderData();
    const [jobCatagorys, setJobCatagorys] = useState(data)
    const [featuredJobs, setFeaturedJobs] = useState([])
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch("/featuredJobs.json")
          .then((res) => res.json())
          .then((data) => setFeaturedJobs(data));
      }, []);
    return (
        <div>
            <Banner/>
            <div className=' mt-6 text-center'>
                <h1 className='text-5xl font-semibold'>Job Catagory</h1>
                <p className='mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='my-8 grid grid-cols-1 sm:grid-cols-4 gap-5 '>
                {
                    jobCatagorys.map(jobCatagory => <SingleJobCatagory
                    key={jobCatagory.id}
                    jobCatagory = {jobCatagory}
                    ></SingleJobCatagory>)
                }
            </div>

            <div>
                <div  className=' mt-6 text-center'>
                    <h1  className='text-5xl font-semibold'>Featured Jobs</h1>
                    <p className='mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='my-8 grid grid-cols-1 sm:grid-cols-2 gap-5'>
                   {showAll
                    ? featuredJobs.map((featuredJob) => <SingleFeaturedJobs featuredJob={featuredJob} />)
                        : featuredJobs
                            .slice(0, 4)
                            .map((featuredJob) => <SingleFeaturedJobs featuredJob={featuredJob} />)}
                                
                </div>
                    <div className="text-center">
                        {!showAll && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="btn btn-sm btn-secondary my-4"
                          >
                            Show All
                        </button>
                )}
                </div>
            </div>
        </div>
    );
};

export default Home;