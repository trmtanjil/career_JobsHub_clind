import React from 'react'
import { Link } from 'react-router';

function JobCard({job}) {
    const {title,company, company_logo, description,_id,jobType,location,requirements,salaryRange
} =job;
  return (
   <div className="card bg-base-100   shadow-sm   border-2 border-gray-500">
  <div>
 <div className='flex justify-start'>
        <div><img className='w-2/2' src={company_logo} alt="" /></div>
        <div>
        <p>{company}</p>
        <p>{location}</p>
        </div>
    </div>
  </div>
  <div className="card-body">
    
    <h2 className="card-title">
      {title}

      <div className="badge badge-secondary">{jobType}</div>
    </h2>
    <h2 className="card-title">
     sasllery :{salaryRange.min}-{salaryRange.max} {salaryRange.currency}
      
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      {
        requirements.map(requr=> <div className="badge badge-outline">{requr}</div>)
      }
      <div className="badge badge-outline">Products</div>
    </div>
    <div>
        <Link to={`/jobDetail/${_id}`}>
       <button className='btn btn-primary'> Job Details</button>
        </Link>
    </div>
  </div>
</div>
  )
}

export default JobCard