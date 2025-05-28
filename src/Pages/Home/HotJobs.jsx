import { use } from "react"
import JobCard from "../../Sheared/JobCard"

 
 
 function HotJobs({jobPromis}) {
    const jobs = use(jobPromis)
    console.log(jobs)
   return (
     <div>
        
        <div className="grid md:grid-cols-3  lg:grid-cols-4  gap-4">
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
     </div>
   )
 }
 
 export default HotJobs