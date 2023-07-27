import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import ActivityDashboard from '../components/UI/ActivityDashboard'
import ActivityForm from '../components/UI/ActivityForm/ActivityForm'
import ActivityDetails from '../components/UI/ActivityDetails'
import Error from '../errors/Error'
import NotFound from '../errors/NotFound'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'home'}/>} /> 
        <Route path='/home' element={<Home/>} />
        <Route path='/activities' element={<ActivityDashboard/>} />
        <Route path='/activities/:id' element={<ActivityDetails/>} />
        <Route path='/create-activity' element={<ActivityForm key='create'/>} />
        <Route path='/manage/:id' element={<ActivityForm key='manage'/> }/>
        <Route path='errors' element={<Error/> }/>
        <Route path='not-found' element={<NotFound/> }/>
        <Route path='*' element={<Navigate replace to='/not-found' /> }/>
    </Routes>
  )
}

export default Routers