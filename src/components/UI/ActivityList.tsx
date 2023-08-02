import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { Fragment } from 'react';

export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {groupedActivities} = activityStore;



  return (
    <Fragment>
        {groupedActivities.map(([group, activities]) => (
            <Fragment key={group}>
                <div className= 'text-cyan-500 font-bol mb-3'>
                    {group}
                </div>
                <div>
                <div className="item-list">
                    <div className="item-group">
                        {activities.map((activity) => (
                            <ActivityListItem key={activity.id} activity={activity} />
                        ))}
                    </div>
                </div>
                </div>
            </Fragment>
        ))}
    </Fragment>

  )
})
