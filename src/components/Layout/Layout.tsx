import Header from "./Header/Header"
import Routers from "../../routes/Routers"
import { Fragment, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ScrollRestoration, useLocation } from "react-router-dom"
import Home from "../../pages/Home"
import { ToastContainer } from "react-toastify"
import { useStore } from "../../stores/store"
import Loading from "../../common/Loading"
import ModalContainer from "../../common/modals/ModalContainer"

const Layout = () => {
  const location = useLocation();
  const {commonStore,userStore} = useStore();

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore,userStore])

  if(!commonStore.appLoaded) return <Loading/>

  return (
    <Fragment>
    <ScrollRestoration/>
    <ModalContainer/>
    <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
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