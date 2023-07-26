import { Container, Grid } from '@mui/material'
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import ActivityForm from './ActivityForm/ActivityForm';
import { useEffect } from 'react';
import Loading from '../../common/Loading';


export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {selectedActivity,editMode} = activityStore

    useEffect(() => {
      activityStore.loadActivities();
    }, [activityStore])
  
    if (activityStore.loadingInitial) return <Loading/>

    return (
        <div className="activity-main mt-10">
        <Container>
         <Grid container spacing={2}>
            <Grid item xs={6}>
            <ActivityList/>
            </Grid>
            <Grid item xs={6}>
            {selectedActivity && !editMode &&
             <ActivityDetails />}
            {editMode && 
                <ActivityForm />
            }
            </Grid>
        </Grid>
       </Container>
    </div>
    )
})
