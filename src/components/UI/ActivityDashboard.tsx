import { Box, Container, Grid } from '@mui/material'
import { Activity } from '../../models/activity'
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';

interface Props {
    activities: Activity[];
}

const ActivityDashboard = ({activities}: Props) => (
    <div className="activity-main mt-10">
               <Container>
         <Grid container spacing={2}>
            <Grid item xs={6}>
            <ActivityList activities={activities}/>
            </Grid>
            <Grid item xs={6}>
            {activities[0] && <ActivityDetails activity={activities[0]} /> }
            </Grid>
        </Grid>
       </Container>
    </div>
)

export default ActivityDashboard