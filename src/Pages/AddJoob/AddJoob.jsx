import React from 'react'
import AuthUser from '../../Iinfo/AuthUser';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddJoob() {
  const {user} =AuthUser()

    const handleJobApply=e=>{
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
   
        //proces salary range data
        const {min,max,currency, ...newjob}=data;
        newjob.salaryRange = {min,max,currency}
      
        
        // process requirments 
        const requirementsString = newjob.requirements;
        const requirementsDirty = requirementsString.split(',');
        const requirementsClean = requirementsDirty.map(req=>req.trim())
         newjob.requirements = requirementsClean
         
         //process reaponsibilitys
         newjob.responsibilities= newjob.responsibilities.split(',').map(res=>res.trim())
         console.log(Object.keys(newjob).length)
         console.log(newjob)

         newjob.status = "active";
          
         //same job to the database 
         axios.post('http://localhost:3000/jobs',newjob)
         .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: " your job post hase been succesfully saved",
  showConfirmButton: false,
  timer: 1500
});
          }

         })
         .catch(error=>{
          console.log(error)
         })


        }


  return (
       <form onSubmit={handleJobApply} className="max-w-4xl mx-auto p-4 grid gap-6">
      {/* Basic Info */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Basic Info</legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Job Title</label>
            <input type="text" name="title" className="input w-full" placeholder="Job Title" />
          </div>
          <div>
            <label className="label">Company</label>
            <input type="text" name="company" className="input w-full" placeholder="Company Name" />
          </div>
          <div>
            <label className="label">Location</label>
            <input type="text" name="location" className="input w-full" placeholder="Location" />
          </div>
          <div>
            <label className="label">Company Logo</label>
            <input type="text" name="company_logo" className="input w-full" placeholder="Company Logo URL" />
          </div>
        </div>
      </fieldset>

      {/* Job Type */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Job Type</legend>
        <div className="filter">
  <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
  <input className="btn" type="radio" value='On-Site' name="jobType" aria-label="On-Site"/>
  <input className="btn" type="radio" value='Remote' name="jobType" aria-label="Remote"/>
  <input className="btn" type="radio" value='Hybrid' name="jobType" aria-label=" Hybrid"/>
</div>
      </fieldset>

      {/* Job Category */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Job Category</legend>
        <select defaultValue="job Category" name="category" className="select select-ghost w-full">
          <option disabled={true}>job Category</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
      </fieldset>

      {/* Application Deadline */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Application Deadline</legend>
        <input type="date" name="deadline" className="input w-full" />
      </fieldset>

      {/* Salary Range */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Salary Range</legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="label">Minimum Salary</label>
            <input type="text" name="min" className="input w-full" placeholder="Minimum salary" />
          </div>
          <div>
            <label className="label">Maximum Salary</label>
            <input type="text" name="max" className="input w-full" placeholder="Maximum Salary" />
          </div>
          <div>
            <label className="label">Currency</label>
            <select defaultValue="Select a Currency" name="currency" className="select select-ghost w-full border border-gray-500">
              <option disabled={true}>Select a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EU</option>
            </select>
          </div>
        </div>
      </fieldset>
        {/* Job description */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Job Description</legend>
        <textarea className="textarea w-full" name="description" placeholder="Job Description"></textarea>
      </fieldset>

      {/* Job Requirement */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Job Requirements</legend>
        <textarea className="textarea w-full" name="requirements" placeholder="Requirements (separate by comma)"></textarea>
      </fieldset>

      {/* Job Responsibilities */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">Job Responsibilities</legend>
        <textarea className="textarea w-full" name="responsibilities" placeholder="Responsibilities (separate by comma)"></textarea>
      </fieldset>

      {/* HR Info */}
      <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
        <legend className="fieldset-legend text-lg font-semibold mb-2">HR Info</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">HR Name</label>
            <input type="text" name="hr_name" className="input w-full" placeholder="HR Name" />
          </div>
          <div>
            <label className="label">HR Email</label>
            <input type="email" name="hr_email" defaultValue={user.email} className="input w-full" placeholder="HR Email" />
          </div>
        </div>
      </fieldset>

      <div className="text-center">
        <input type="submit" className="btn btn-primary w-full md:w-1/3" value="Submit Job" />
      </div>
    </form>
  )
}

export default AddJoob