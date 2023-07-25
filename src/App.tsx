import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from './components/Layout/Layout'
import { Activity } from './models/activity'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      console.log(response);
      setActivities(response.data)
    })
  }, [])

  return (
    <>
    <Layout/>
    <ul>
      {activities.map(activity => (
        <li key={activity.id}>
          {activity.title}
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
