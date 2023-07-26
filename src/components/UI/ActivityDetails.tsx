import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStore } from '../../stores/store';
import Loading from '../../common/Loading';


export default function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity} = activityStore;

  if(!activity) return <Loading/> ;

  return (
    <Card>
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
        <Button  size="small">Edit</Button>
        <Button  size="small">Cancel</Button>
      </CardActions>
    </Card>
  );
}
