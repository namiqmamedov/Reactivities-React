import { Container } from "@mui/material"
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header-index py-1">
      <Container>
        <div className="header-wrapper flex items-center">
          <Link to='/' className="item-index text-white flex items-center">
            <img src="../../../../public/assets/logo.png" height={40} width={40} alt="Logo" style={{marginRight: '10px'}} />
            Reactivities
          </Link>
          <div className="main-index ml-10">
            <Link to='/activities' className="text-white font-bold mr-4">
              Activities
            </Link>
            <Link to='/create-activity'>
            <button  className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
              Create Activity
            </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header