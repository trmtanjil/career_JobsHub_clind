import React, { Suspense } from 'react'
import AuthUser from '../../Iinfo/AuthUser'
import MyJob from './MyJob'
import { jobCratedByPromis } from '../../Api/JobApi'

function MyPostedJob() {
    const {user} = AuthUser()
  return (
    <div>
        <h1>My Posted Job</h1>

    <Suspense fallback={'my job loading'}>
    <MyJob
    jobCratedByPromis={jobCratedByPromis(user.email)}
    ></MyJob>

    </Suspense>
    </div>
  )
}

export default MyPostedJob