import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import ActivityDashboard from '../components/UI/ActivityDashboard'
import ActivityForm from '../components/UI/ActivityForm/ActivityForm'
import ActivityDetails from '../components/UI/ActivityDetails'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'home'}/>} /> 
        <Route path='/home' element={<Home/>} />
        <Route path='/activities' element={<ActivityDashboard/>} />
        <Route path='/activities/:id' element={<ActivityDetails/>} />
        <Route path='/create-activity' element={<ActivityForm key='create'/>} />
        <Route path='/manage/:id' element={<ActivityForm key='manage'/> }/>
    </Routes>
  )
}

export default Routers