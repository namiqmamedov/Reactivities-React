import {  Button, TextField } from "@mui/material"
import { Activity } from "../../../models/activity"
import { ChangeEvent, useState } from "react";
import Loading from "../../../common/Loading";
import { LoadingButton } from "@mui/lab";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}

export const ActivityForm = ({activity: selectedActivity,closeForm, createOrEdit,submitting}: Props) => {

  const initialState = selectedActivity ?? {
     id: '',
     title: '',
     category: '',
     description: '',
     date: '',
     city: '',
     venue: '' 
  }
 
  const [activity, setActivity] = useState(initialState)

  function handleSubmit(e:React.FormEvent<EventTarget>) {
    e.preventDefault()
   createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const {name,value} = event.target;
      setActivity({...activity, [name]: value})
  }
  
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="bg-white py-4 px-4 mt-10">
        <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth={true} value={activity.title} name='title' onChange={handleInputChange} className="!mb-5" />
        <TextField id="outlined-basic" label="Description" rows={2} multiline variant="outlined" fullWidth={true} value={activity.description} name='description' onChange={handleInputChange} className="!mb-5" />
        <TextField id="outlined-basic" label="Category" variant="outlined" fullWidth={true} value={activity.category} name='category' onChange={handleInputChange} className="!mb-5" />
        <TextField id="outlined-basic" label="Date" variant="outlined" fullWidth={true} value={activity.date} type="date" name='date' onChange={handleInputChange} className="!mb-5" />
        <TextField id="outlined-basic" label="City" variant="outlined" fullWidth={true} value={activity.city} name='city' onChange={handleInputChange}className="!mb-5" />
        <TextField id="outlined-basic" label="Venue" variant="outlined" fullWidth={true} value={activity.venue} name='venue' onChange={handleInputChange} className="!mb-5" />
        <div className="form-button flex justify-end gap-3">
          <Button onClick={closeForm} variant="outlined" className="!bg-gray-500 !text-white !border-none" size="small">Cancel</Button>
          {/* <Button type="submit" variant="contained" className="!bg-green-600" size="small">Submit</Button> */}
         <LoadingButton loading={submitting} type="submit" variant="contained" className="!bg-green-600" size="small">
         Submit
         </LoadingButton>
        </div>
    </form>
  )
}
