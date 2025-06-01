import React from 'react'

function AddJoob() {
  return (
    <form className='mx-auto'>
        
        <fieldset className="fieldset mx-auto   bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Basic info </legend>

  <label className="label">Job Title</label>
  <input type="text" className="input" placeholder=" Job Title" />

  <label className="label">Company</label>
  <input type="text" className="input" placeholder="Company Name" />

  <label className="label">Location</label>
  <input type="text" className="input" placeholder="Location" />

    <label className="label">Company Logo</label>
  <input type="text" className="input" placeholder="Company Logo url" />
</fieldset>

{/* job type */}

        <fieldset className="fieldset mx-auto   bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend"> Job type </legend>
  <div className="filter">
  <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
  <input className="btn" type="radio" name="jobType" aria-label="On-Site"/>
  <input className="btn" type="radio" name="jobType" aria-label="Remote"/>
  <input className="btn" type="radio" name="jobType" aria-label=" Hybrid"/>
</div>

</fieldset>
{/* job category  */}

        <fieldset className="fieldset mx-auto   bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Basic info </legend>
  <select defaultValue="job Category" name='category' className="select select-ghost">
  <option disabled={true}>job Category</option>
  <option>Engineering</option>
  <option>marketing</option>
  <option>Finance</option>
</select>

</fieldset>
{/*  Application dedline*/}

        <fieldset className="fieldset mx-auto   bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Application Dedline </legend>
  <input type="date" className="input" />

</fieldset>
{/*  Salary Range*/}

     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend"> Salary Range</legend>

<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    
<div>
      <label className="label">Minimum salary</label>
  <input type="text" className="input" placeholder="Minimum salary" />
</div>

  <div>
    <label className="label">Maximum Salary</label>
  <input type="text" className="input" placeholder="Maximum Salary" />
  </div>
 <div>
     
  <label className="label">Currency</label>
 <select defaultValue="Select a Currency" name='category' className="select select-ghost  border border-gray-500">
  <option  disabled={true}>Select a Currency</option>
  <option>BDT</option>
  <option>USD</option>
  <option>EU</option>
</select>
 </div>
</div>
</fieldset>

    </form>
  )
}

export default AddJoob