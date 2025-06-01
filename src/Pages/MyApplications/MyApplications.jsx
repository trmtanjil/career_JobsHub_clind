import React, { Suspense } from 'react'
import ApplicationStat from './ApplicationStat'
import ApplicationList from './ApplicationList'
import AuthUser from '../../Iinfo/AuthUser'
import { myApplicationsPromiss } from '../../Api/ApplicationApi'



function MyApplications() {
  const {user} =AuthUser()
  return (
    <div>
      <ApplicationStat></ApplicationStat>
      <Suspense fallback={'my application is running'}>
        <ApplicationList
        myApplicationsPromiss={myApplicationsPromiss(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  )
}

export default MyApplications