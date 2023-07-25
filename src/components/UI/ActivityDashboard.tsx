import { Container, Grid } from '@mui/material'
import { Activity } from '../../models/activity'
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import { ActivityForm } from './ActivityForm/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}

const ActivityDashboard = ({activities, selectedActivity, selectActivity,cancelSelectActivity}: Props) => (
    <div className="activity-main mt-10">
        <Container>
         <Grid container spacing={2}>
            <Grid item xs={6}>
            <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid>
            <Grid item xs={6}>
            {selectedActivity && <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} /> }
            <ActivityForm/>
            </Grid>
        </Grid>
       </Container>
    </div>
)

export default ActivityDashboard