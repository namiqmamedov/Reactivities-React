import Header from "./Header/Header"
import Routers from "../../routes/Routers"
import { Fragment, useEffect, useState } from "react"
import ActivityDashboard from "../UI/ActivityDashboard"
import axios from "axios"
import { Activity } from "../../models/activity"
 import {v4 as uuid} from 'uuid';
import agent from "../../api/agent"

const Layout = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false)


  useEffect(() => {
    agent.Activities.list().then(response => {
      setActivities(response)
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
    activity.id 
    ? setActivities([...activities.filter(x=>x.id !== activity.id), activity]) // remove the activity we're updating  and then replace it with the activity
    : setActivities([...activities, {...activity, id: uuid()}])

    setEditMode(false);
    setSelectedActivity(activity)
  }


  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x=>x.id !== id)])
  }

  
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
    />
  </Fragment>

  )
}

export default Layout