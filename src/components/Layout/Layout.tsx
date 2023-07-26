import Header from "./Header/Header"
import Routers from "../../routes/Routers"
import { Fragment, useEffect, useState } from "react"
import ActivityDashboard from "../UI/ActivityDashboard"
import { Activity } from "../../models/activity"
 import {v4 as uuid} from 'uuid';
import agent from "../../api/agent"
import Loading from "../../common/Loading"

const Layout = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    agent.Activities.list().then(response => {
      let activities: Activity[] = [];
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity);
      })
      setActivities(activities)
      setLoading(false);
    })
  }, [])

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id))
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined)
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
    if(activity.id){
      agent.Activities.update(activity).then(() => {
         setActivities([...activities.filter(x=>x.id !== activity.id), activity])
         setSelectedActivity(activity);
         setEditMode(false);
         setSubmitting(false);
      })
    }
    else{
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity])
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }


  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x=>x.id !== id)])
      setSubmitting(false);
    })
  }

  if (loading) return <Loading/>

  return (
  <Fragment>
     <Header openForm={handleFormOpen} />
   {/* <>
    <Routers/>
   </> */}
   <ActivityDashboard 
    activities={activities} 
    selectedActivity={selectedActivity}
    selectActivity={handleSelectedActivity} 
    cancelSelectActivity={handleCancelSelectActivity}
    editMode={editMode}
    openForm={handleFormOpen}
    closeForm={handleFormClose}
    createOrEdit={handleCreateOrEditActivity}
    deleteActivity={handleDeleteActivity}
    submitting={submitting}
    />
  </Fragment>

  )
}

export default Layout