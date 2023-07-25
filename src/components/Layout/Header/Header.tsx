import { Container } from "@mui/material"

const Header = () => {
  return (
    <div className="header-index ">
      <Container>
        <div className="header-wrapper flex items-center">
          <div className="item-index text-white flex items-center">
            <img src="../../../../public/assets/logo.png" height={40} width={40} alt="Logo" style={{marginRight: '10px'}} />
            Reactivities
          </div>
          <div className="main-index">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Activity
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header