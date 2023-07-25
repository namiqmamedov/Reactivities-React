import {Routes,Route,Navigate} from 'react-router-dom'


const Routers = () => {
  return (
    <Routes>
    {/* <Route element={<RequireAuth/>}>
      <Route path='/checkout' element={<CheckoutWrapper/>} />
      <Route path='/orders' element={<Orders/>} />
    </Route>
    <Route element={<RequireAuth roles={['Admin']} />}>
      <Route path='/inventory' element={<Inventory/>} />
    </Route> */}
    {/* <Route path='/' element={<Navigate to={'home'}/>} />  */}
    {/* <Route path='/home' element={<Home/>} /> */}
</Routes>
  )
}

export default Routers