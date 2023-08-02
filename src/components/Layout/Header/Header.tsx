import { Container } from "@mui/material"
import { Link } from "react-router-dom";
import { useStore } from "../../../stores/store";
import { Dropdown } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

export default observer(function  Navbar() {
  const {userStore: {user,logout}} = useStore()
  return (
    <div className="header-index py-2"> 
      <Container>
        <div className="header-wrapper flex gap-3 items-center">
          <Link to='/' className="item-index text-white flex gap-2 items-center">
           <div className="image">
           <img src='/assets/logo.png' width={170} height={100} alt="Logo" style={{marginRight: '10px'}} />
           </div>
            Reactivities
          </Link>
          <div className="main-index ml-10 flex items-center w-full">
          {/* <Link to='/errors' className="text-white font-bold mr-4">
              Errors
            </Link> */}
            <Link to='/activities' className="text-white font-bold mr-4">
              Activities
            </Link>
            <Link to='/create-activity' className="w-100 block">
            <button  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">
              Create Activity
            </button>
            </Link>
          </div>
          <div className="w-full justify-end items-center flex gap-2">
              <img width={33} height={33} src={user?.image || '/assets/user.png'} className="rounded-full" alt="User Avatar" />
                <Dropdown pointing='top left'  className="!text-white"  text={user?.displayName} >
                  <Dropdown.Menu>
                      <Dropdown.Item as={Link} to={`/profiles/${user?.username}`}text='My Profile' icon='user' />
                      <Dropdown.Item onClick={logout} text='logout' icon='power' />
                  </Dropdown.Menu>
                </Dropdown>
          </div>
        </div>
      </Container>
    </div>
  )
})
