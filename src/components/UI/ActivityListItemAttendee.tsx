import { observer } from "mobx-react-lite"
import { Image, List, Popup } from "semantic-ui-react"
import { Profile } from "../../models/profile"
import { Link } from "react-router-dom"
import ProfileCard from "./Profiles/ProfileCard";

interface Props {
    attendees: Profile[];
}

const ActivityListItemAttendee = ({attendees} : Props) => {
  return (
    <List horizontal>
        {attendees.map(attendee => (
          <Popup
          hoverable
          key={attendee.username}
          trigger={
                  <List.Item key={attendee.username} as={Link} to={`/profiles/${attendee.username}`}>
                    <Image size="mini" circular src={attendee.image || '/assets/user.png' }/>
                  </List.Item>
              }
          >
            <Popup.Content style={{width: '220px'}}>
              <ProfileCard profile={attendee} />
            </Popup.Content>
          </Popup>
        ))}
    </List>
  )
}

export default observer(ActivityListItemAttendee)