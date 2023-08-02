import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { Activity } from "../../models/activity"
import {BsFillBalloonFill} from 'react-icons/bs'
import {BiSolidTimeFive} from 'react-icons/bi'
import { format } from "date-fns"
import ActivityListItemAttendee from "./ActivityListItemAttendee"
import { Label } from "semantic-ui-react"

interface Props { 
    activity: Activity
}

const ActivityListItem = ({activity} : Props) => {

  return (
    <div key={activity.id} className="item-wrapper mb-5 bg-white" >
        <div className="item-body relative border border-slate-200"> 
            {activity.isCancelled && 
                <Label attached="top" color="red" content='Cancelled' style={{textAlign: 'center'}}/>
            }
        <div className="card-header flex gap-3 p-3">
            <div className="image">
                <img style={{marginBottom: 3}} className="rounded-full" 
                src={activity.host?.image || '/assets/user.png'} width={65} height={65} alt="Profile" />
            </div>
            <div className="body">
            <h2 className="font-bold text-[18px]">{activity.title}</h2>
            <span>Hosted by 
                <Link className="ml-2" to={`/profiles/${activity.hostUsername}`}>
                {activity.host?.displayName}
                </Link>
            </span>
            {activity.isHost && (
                <span className="block mt-5">
                    <Label basic color="orange">
                        You are hosting this activity
                    </Label>
                </span>
            )}
            {activity.isGoing && !activity.isHost && (
                <span className="block mt-5">
                    <Label basic color="green">
                        You are going to this activity
                    </Label>
                </span>
            )}
            </div>
        </div>
        <div className="center flex gap-2 border border-slate-200 border-y-1 p-2">
            <h2 className="flex items-center mb-0 text-[16px]">
                <BiSolidTimeFive/>
                {format(activity.date!, 'dd MMM yyyy h:mm aa')}
            </h2>
            <h2 className="flex items-center mt-0 text-[16px]">
                <BsFillBalloonFill/>
                {activity.city}
            </h2>
        </div>
        <div className="bg-gray-100 p-2.5">
            <ActivityListItemAttendee attendees={activity.attendees!} />
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