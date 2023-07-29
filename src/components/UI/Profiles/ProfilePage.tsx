import { Grid } from "semantic-ui-react"
import ProfileHeader from "./ProfileHeader"
import ProfileContent from "./ProfileContent"
import { Container } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { useStore } from "../../../stores/store"
import { useEffect } from "react"
import Loading from "../../../common/Loading"

const ProfilePage = () => {
  const {username} = useParams<{username: string}>();
  const {profileStore} = useStore();
  const {loadingProfile,loadProfile,profile} = profileStore;

  useEffect(() => {
      if(username) {
        loadProfile(username)
      }
  }, [loadProfile,username])

  if(loadingProfile) return <Loading/>

  return (
    <Container>
          <Grid>
            <Grid.Column width={16}>
                {profile && 
                  <ProfileHeader profile={profile!} 
                />}
                <ProfileContent/>
            </Grid.Column>
          </Grid>
    </Container>
  )
}

export default observer(ProfilePage)