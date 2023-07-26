import Header from "./Header/Header"
import Routers from "../../routes/Routers"
import { Fragment } from "react"
import { observer } from "mobx-react-lite"

const Layout = () => {

  return (
  <Fragment>
     <Header />
   <Fragment>
    <Routers/>
   </Fragment>
  </Fragment>

  )
}

export default observer(Layout)