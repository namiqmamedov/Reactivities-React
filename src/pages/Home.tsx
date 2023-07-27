import { Container } from "@mui/material"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Container style={{marginTop: '7em'}}>
      <h1 className="font-bold">Home page</h1>
      <h3 className="mt-5">Go to <Link className="text-blue-800 font-bold" to='/activities'>Activities</Link></h3>
    </Container>
  )
}

export default Home