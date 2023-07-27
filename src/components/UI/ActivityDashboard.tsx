import { Container, Grid } from '@mui/material'
import ActivityList from './ActivityList';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Loading from '../../common/Loading';
import ActivityFilters from './ActivityFilters';


export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore

    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities])
  
    if (activityStore.loadingInitial) return <Loading/>

    return (
        <div className="activity-main mt-10">
        <Container>
         <Grid container spacing={2}>
            <Grid item xs={7}>
              <ActivityList/>
            </Grid>
            <Grid item xs={5}>
              <ActivityFilters/>
            </Grid>
        </Grid>
       </Container>
    </div>
    )
})
