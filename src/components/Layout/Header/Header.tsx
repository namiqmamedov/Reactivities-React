import { Container } from "@mui/material"
import { useStore } from "../../../stores/store";

const Header = () => {

  const {activityStore} = useStore();

  return (
    <div className="header-index py-1">
      <Container>
        <div className="header-wrapper flex items-center">
          <div className="item-index text-white flex items-center">
            <img src="../../../../public/assets/logo.png" height={40} width={40} alt="Logo" style={{marginRight: '10px'}} />
            Reactivities
          </div>
          <div className="main-index ml-5">
            <button onClick={() => activityStore.openForm()} className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
              Create Activity
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header