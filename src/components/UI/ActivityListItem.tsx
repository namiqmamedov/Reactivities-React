import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { Activity } from "../../models/activity"
import { useState, SyntheticEvent } from "react"
import { useStore } from "../../stores/store"
import {BsFillBalloonFill} from 'react-icons/bs'
import {BiSolidTimeFive} from 'react-icons/bi'

interface Props { 
    activity: Activity
}

const ActivityListItem = ({activity} : Props) => {

    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    
  return (
    <div key={activity.id} className="item-wrapper mb-5  bg-white" >
            <div className="item-body border border-slate-200"> 
            <div className="card-header flex gap-3 p-3">
            <div className="image">
                <img className="rounded-full" src='/assets/user.png' width={65} height={65} alt="Profile" />
            </div>
            <div className="body">
            <h2 className="font-bold ">{activity.title}</h2>
            <span w-full>Hosted by Bob</span>
            </div>
        </div>
            <div className="center flex gap-2 border border-slate-200 border-y-1 p-2">
            <h2 className="flex items-center">
                <BiSolidTimeFive/>
                {activity.date}
            </h2>
            <h2 className="flex items-center">
                <BsFillBalloonFill/>
                {activity.city}
            </h2>
        </div>
        <div className="bg-gray-100 p-2">
            <span>Attendees go here</span>
        </div>

    {/* <div className="bottom flex">
    <h2>{activity.city},</h2> <h2>{activity.venue}</h2>
    </div> */}
    <div className="bottom-item flex justify-between p-2">
    {/* <label>{activity.category}</label> */}
    <label>{activity.description}</label>
        <div className="button-center flex gap-2">
            {/* <LoadingButton name={activity.id} loading={loading && target === activity.id} 
            onClick={(e) => handleActivityDelete(e, activity.id)} variant='contained' color='error'>Delete</LoadingButton> */}
            <Button component={Link} style={{textTransform: 'none'}} to={`/activities/${activity.id}`} className=" !bg-cyan-500"  variant='contained'>View</Button>
        </div>
            </div>
    </div>
</div>
  )
}

export default ActivityListItem