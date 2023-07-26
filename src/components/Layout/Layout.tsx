import Header from "./Header/Header"
import Routers from "../../routes/Routers"
import { Fragment, useEffect, useState } from "react"
import ActivityDashboard from "../UI/ActivityDashboard"
import Loading from "../../common/Loading"
import { useStore } from "../../stores/store"
import { observer } from "mobx-react-lite"

const Layout = () => {
  const {activityStore} = useStore();


  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <Loading/>

  return (
  <Fragment>
     <Header />
   {/* <>
    <Routers/>
   </> */}
   <ActivityDashboard />
  </Fragment>

  )
}

export default observer(Layout)