import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { SyntheticEvent, useState } from 'react';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {deleteActivity, activities, loading} = activityStore;

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }


  return (
    <div className="item-list">
        <div className="item-group">
            {activities.map(activity => (
                <div key={activity.id} className="item-wrapper mb-5 py-4 px-4 bg-white" >
                    <h2>{activity.title}</h2>
                    <h2>{activity.city}</h2>
                    <h2>{activity.description}</h2>
                    <div className="bottom flex">
                    <h2>{activity.city},</h2> <h2>{activity.venue}</h2>
                    </div>
                    <div className="bottom-item flex justify-between pt-3">
                    <label>{activity.category}</label>
                        <div className="button-center flex gap-2">
                            <LoadingButton name={activity.id} loading={loading && target === activity.id} 
                            onClick={(e) => handleActivityDelete(e, activity.id)} variant='contained' color='error'>Delete</LoadingButton>
                            <Button onClick={() => activityStore.selectActivity(activity.id)} variant='contained'>View</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  )
})
