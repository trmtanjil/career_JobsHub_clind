import React from 'react'
import { useParams } from 'react-router'
import AuthUser from '../../Iinfo/AuthUser'
import axios from 'axios'
import Swal from 'sweetalert2'

function JobApply() {
    const {id: jobId} =useParams()
    const {user} =AuthUser()

    const handleapplyjob=e=>{
        e.preventDefault()
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn,github,resume)
        const application={
            jobId,
            applicant:user.email,
            linkedIn,
            github,
            resume,
        }
        axios.post('http://localhost:3000/applications',application)
        .then(res=>{
            console.log(res.data)
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: " your applyed hase been succecfully ",
  showConfirmButton: false,
  timer: 1500
});
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <form onSubmit={handleapplyjob}  className='mx-auto'>
        
        <h1 className='text-5xl text-center py-5'>job apply </h1>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">

  <label className="label">LinkedIn Link</label>
  <input type="url" name='linkedIn' className="input"  placeholder="LinkedIn URL" />

  <label className="label">GitHub Link</label>
  <input type="url" name='github' className="input" placeholder="GitHub url" />

  <label className="label">Resume Link</label>
  <input type="url" name='resume' className="input" placeholder="Resume Link" />
<button className='btn btn-primary my-2' type='submit'>Apply</button>
</fieldset>
    </form>
  )
}

export default JobApply