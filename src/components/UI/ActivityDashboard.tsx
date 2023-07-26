import { Container, Grid } from '@mui/material'
import { Activity } from '../../models/activity'
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import ActivityForm from './ActivityForm/ActivityForm';

interface Props {
    activities: Activity[];
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default observer(function ActivityDashboard({activities,deleteActivity,submitting}: Props) {
    const {activityStore} = useStore();
    const {selectedActivity,editMode} = activityStore

    return (
        <div className="activity-main mt-10">
        <Container>
         <Grid container spacing={2}>
            <Grid item xs={6}>
            <ActivityList activities={activities} submitting={submitting} deleteActivity={deleteActivity}/>
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
