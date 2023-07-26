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
    editMode: boolean;
    openForm: (id: string) => void ;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

const ActivityDashboard = ({activities, selectedActivity, selectActivity,deleteActivity,cancelSelectActivity,editMode,openForm,closeForm,createOrEdit,submitting}: Props) => (
    <div className="activity-main mt-10">
        <Container>
         <Grid container spacing={2}>
            <Grid item xs={6}>
            <ActivityList activities={activities} submitting={submitting} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
            </Grid>
            <Grid item xs={6}>
            {selectedActivity && !editMode &&
             <ActivityDetails 
             activity={selectedActivity}
             cancelSelectActivity={cancelSelectActivity} 
             openForm={openForm}
             />}
            {editMode && 
                <ActivityForm submitting={submitting} closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />
            }
            </Grid>
        </Grid>
       </Container>
    </div>
)

export default ActivityDashboard