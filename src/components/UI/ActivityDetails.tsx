import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStore } from '../../stores/store';
import Loading from '../../common/Loading';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from '@mui/material';


export default observer(function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity,loadingInitial} = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity])

  if(loadingInitial || !activity) return <Loading/> ;

  return (
    <Container>
    <Card className='mt-8'>
      <CardMedia
        sx={{ height: 440 }}
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
        <Button component={Link} to={`/manage/${activity.id}`} size="small">Edit</Button>
        <Button component={Link} to='/activities' size="small">Cancel</Button>
      </CardActions>
    </Card>
    </Container>
  );
})
