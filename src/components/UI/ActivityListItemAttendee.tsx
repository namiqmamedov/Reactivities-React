import { observer } from "mobx-react-lite"
import { Image, List } from "semantic-ui-react"
import { Profile } from "../../models/profile"
import { Link } from "react-router-dom"

interface Props {
    attendees: Profile[];
}

const ActivityListItemAttendee = ({attendees} : Props) => {
  return (
    <List horizontal>
        {attendees.map(attendee => (
            <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`}>
                <Image size="mini" circular src={attendee.image || '/assets/user.png' }/>
            </List.Item>
        ))}
    </List>
  )
}

export default observer(ActivityListItemAttendee)