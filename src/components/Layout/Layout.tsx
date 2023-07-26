import Header from "./Header/Header"
import Routers from "../../routes/Routers"
import { Fragment, useEffect, useState } from "react"
import ActivityDashboard from "../UI/ActivityDashboard"
import { Activity } from "../../models/activity"
import agent from "../../api/agent"
import Loading from "../../common/Loading"
import { useStore } from "../../stores/store"
import { observer } from "mobx-react-lite"

const Layout = () => {
  const {activityStore} = useStore();

  const [activities, setActivities] = useState<Activity[]>([])
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])


  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x=>x.id !== id)])
      setSubmitting(false);
    })
  }

  if (activityStore.loadingInitial) return <Loading/>

  return (
  <Fragment>
     <Header />
   {/* <>
    <Routers/>
   </> */}
   <ActivityDashboard 
    activities={activityStore.activities} 
    deleteActivity={handleDeleteActivity}
    submitting={submitting}
    />
  </Fragment>

  )
}

export default observer(Layout)