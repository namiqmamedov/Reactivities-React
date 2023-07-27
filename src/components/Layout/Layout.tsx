import Header from "./Header/Header"
import Routers from "../../routes/Routers"
import { Fragment } from "react"
import { observer } from "mobx-react-lite"
import { useLocation } from "react-router-dom"
import Home from "../../pages/Home"

const Layout = () => {
  const location = useLocation();

  return (
  <Fragment>
     {location.pathname === '/' ? <Home/> : (
        <>
        <Header/>
      <Fragment>
        <Routers/>
      </Fragment>
        </>
     )}
  </Fragment>

  )
}

export default observer(Layout)