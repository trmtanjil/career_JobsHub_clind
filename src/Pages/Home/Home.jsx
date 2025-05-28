import React from 'react'
import Banner from './Banner'
import HotJobs from './HotJobs';
 

const jobPromis = fetch('http://localhost:3000/jobs').then(res=>res.json());
function Home() {
    console.log(jobPromis)
  return (

    <div>
      <Banner></Banner>
    <HotJobs jobPromis={jobPromis}></HotJobs>
    </div>
  )
}

export default Home