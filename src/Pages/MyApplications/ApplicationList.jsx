import React, { use } from 'react'
import TableRow from './TableRow'

function ApplicationList({myApplicationsPromiss}) {
const applications = use(myApplicationsPromiss)

  return (
    <div>
      <h1>application length : {applications.length}</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
        #
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
      applications.map((application, index)=><TableRow 
      index={index}
      application={application}
    
      ></TableRow>)
    }
  
  
    
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ApplicationList