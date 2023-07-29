import { observer } from "mobx-react-lite";
import { Profile } from "../../../models/profile";
import { CardMedia, Typography, Card, CardContent, Link } from "@mui/material";


interface Props {
    profile: Profile;
}

const ProfileCard = ({profile} : Props) => {
  return (
    <Link>
        <Card >
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
                20 followers
            </Typography>
        </CardContent>
        </Card>
    </Link>
  )
}

export default observer(ProfileCard)