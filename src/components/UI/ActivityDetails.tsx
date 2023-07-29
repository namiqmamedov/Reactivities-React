import { useStore } from '../../stores/store';
import Loading from '../../common/Loading';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Grid } from '@mui/material';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';


export default observer(function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity,loadingInitial} = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity])

  if(loadingInitial || !activity) return <Loading/> ;

  return (
      <Container className='mt-5'>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat />
            </Grid>
            <Grid item xs={6}>
              <ActivityDetailedSidebar activity={activity} />
            </Grid>
          </Grid>
      </Container>
  );
})

