import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Activity } from '../../models/activity';


interface Props {
    activity: Activity
}

export default function ActivityDetails({activity} : Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`/assets/categoryImages/${activity.category}.jpg`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {activity.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {activity.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {activity.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  );
}
