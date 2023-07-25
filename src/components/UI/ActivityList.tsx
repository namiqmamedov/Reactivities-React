import { Activity } from '../../models/activity'

interface Props {
    activities: Activity[];
}

const ActivityList = ({activities} : Props) => {
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
                    <label>{activity.category}</label>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default ActivityList