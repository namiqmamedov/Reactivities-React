import {  Button, Container, TextField } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../models/activity";
import Loading from "../../../common/Loading";
import {v4 as uuid} from 'uuid'
import { Link } from "react-router-dom";



export default observer(function ActivityForm() {

  const {activityStore} = useStore();
  const {createActivity, updateActivity, 
    loading, loadActivity,loadingInitial} = activityStore;

    const {id} = useParams();
    const navigate = useNavigate()

    const [activity,setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '' 
    });

    useEffect(() => {
      if(id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

  function handleSubmit(e:React.FormEvent<EventTarget>) {
    e.preventDefault()
    if(!activity.id) {
      activity.id = uuid();
      createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    }
    else{
      updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const {name,value} = event.target;
      setActivity({...activity, [name]: value})
  }

  if(loadingInitial) return <Loading/>
  
  return (
    <Container>
      <form onSubmit={handleSubmit} autoComplete="off" className="bg-white py-4 px-4 mt-10">
              <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth={true} value={activity.title} name='title' onChange={handleInputChange} className="!mb-5" />
              <TextField id="outlined-basic" label="Description" rows={2} multiline variant="outlined" fullWidth={true} value={activity.description} name='description' onChange={handleInputChange} className="!mb-5" />
              <TextField id="outlined-basic" label="Category" variant="outlined" fullWidth={true} value={activity.category} name='category' onChange={handleInputChange} className="!mb-5" />
              <TextField id="outlined-basic" label="Date" variant="outlined" fullWidth={true} value={activity.date} type="date" name='date' onChange={handleInputChange} className="!mb-5" />
              <TextField id="outlined-basic" label="City" variant="outlined" fullWidth={true} value={activity.city} name='city' onChange={handleInputChange}className="!mb-5" />
              <TextField id="outlined-basic" label="Venue" variant="outlined" fullWidth={true} value={activity.venue} name='venue' onChange={handleInputChange} className="!mb-5" />
              <div className="form-button flex justify-end gap-3">
                <Button component={Link} to='/activities'  variant="outlined" className="!bg-gray-500 !text-white !border-none" size="small">Cancel</Button>
                {/* <Button type="submit" variant="contained" className="!bg-green-600" size="small">Submit</Button> */}
              <LoadingButton loading={loading} type="submit" variant="contained" className="!bg-green-600" size="small">
              Submit
              </LoadingButton>
              </div>
          </form>
    </Container>
  )
})
