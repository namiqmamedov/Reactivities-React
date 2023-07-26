import { Button } from '@mui/material';
import { Activity } from '../../models/activity'

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

const ActivityList = ({activities, selectActivity, deleteActivity} : Props) => {
  return (
    <div className="item-list">
        <div className="item-group">
            {activities.map(activity => (
                <div className="item-wrapper mb-5 py-4 px-4 bg-white" >
                    <h2>{activity.title}</h2>
                    <h2>{activity.city}</h2>
                    <h2>{activity.description}</h2>
                    <div className="bottom flex">
                    <h2>{activity.city},</h2> <h2>{activity.venue}</h2>
                    </div>
                    <div className="bottom-item flex justify-between pt-3">
                    <label>{activity.category}</label>
                        <div className="button-center flex gap-2">
                            <Button onClick={() => deleteActivity(activity.id)} variant='contained' color='error'>Delete</Button>
                            <Button onClick={() => selectActivity(activity.id)} variant='contained'>View</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default ActivityList