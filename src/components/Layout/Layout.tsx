import Header from "./Header/Header"
import Routers from "../../routes/Routers"
import { Fragment, useEffect, useState } from "react"
import ActivityDashboard from "../UI/ActivityDashboard"
import axios from "axios"
import { Activity } from "../../models/activity"
 


const Layout = () => {
  const [activities, setActivities] = useState<Activity[]>([])


  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      console.log(response);
      setActivities(response.data)
    })
  }, [])

  
  return (
  <Fragment>
     <Header/>
   {/* <>
    <Routers/>
   </> */}
   <ActivityDashboard activities={activities} />
  </Fragment>

  )
}

export default Layout