import React, { use } from 'react'

function MyJob({jobCratedByPromis}) {
    const myjob = use(jobCratedByPromis)
  return (
    <div>
        <h1 className='text-4xl'> jobs created by you :{myjob.length} </h1>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    {
        myjob.map((job, index)=>
      <tr>
        <th>{index +1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td>Blue</td>
      </tr>
        )
    }
   
    </tbody>
  </table>
</div>
    </div>
  )
}

export default MyJob