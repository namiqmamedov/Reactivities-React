import { observer } from "mobx-react-lite";
import { Profile } from "../../../models/profile";
import { CardMedia, Typography, Card, CardContent, Link } from "@mui/material";
import FollowButton from "./FollowButton";


interface Props {
    profile: Profile;
}

const ProfileCard = ({profile} : Props) => {
  return (
    <Link top={`/profiles/${profile.username}`}>
        <Card style={{width: '220px'}} >
        <CardMedia
            sx={{ height: 140 }}
            image={profile.image || '/assets/user.png'}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {profile.displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Bio is here
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {profile.followersCount} followers
            </Typography>
        </CardContent>
        <FollowButton profile={profile} />
        </Card>
    </Link>
  )
}

export default observer(ProfileCard)