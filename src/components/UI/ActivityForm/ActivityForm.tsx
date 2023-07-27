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
import { Field, Formik } from "formik";



export default observer(function ActivityForm() {

  const {activityStore} = useStore();
  const {
    loading, loadActivity,loadingInitial} = activityStore;

    const {id} = useParams();
    // const navigate = useNavigate()

    const [activity,setActivity] = useState({
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

  // function handleSubmit(e:React.FormEvent<EventTarget>) {
  //   e.preventDefault()
  //   if(!activity.id) {
  //     activity.id = uuid();
  //     createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
  //   }
  //   else{
  //     updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
  //   }
  // }

  // function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  //     const {name,value} = event.target; 
  //     setActivity({...activity, [name]: value})
  // }

  if(loadingInitial) return <Loading/>
  
  return (
    <Container>
      <Formik initialValues={activity} onSubmit={values => console.log(values)} enableReinitialize >
        {({handleSubmit}) => (
       <form onSubmit={handleSubmit} autoComplete="off" className="bg-white py-4 px-4 mt-10 ui form">
              <Field label="Title" variant="outlined"  name='title'  className="!mb-5" />
              <Field label="Description" rows={2} multiline variant='outlined' name='description' className="!mb-5" />
              <Field label="Category" variant="outlined" name='category'  className="!mb-5" />
              <Field label="Date" variant="outlined" valueype="date" name='date'  className="!mb-5" />
              <Field label="City" variant="outlined" valueame='city' className="!mb-5" />
              <Field label="Venue" variant="outlined"  name='venue'  className="!mb-5" />
              <div className="form-button flex justify-end gap-3">
              <Button component={Link} to='/activities'  variant="outlined" className="!bg-gray-500 !text-white !border-none" size="small">Cancel</Button>
              <LoadingButton loading={loading} type="submit" variant="contained" className="!bg-green-600" size="small">
              Submit
              </LoadingButton>
              </div>
      </form>
        )}
      </Formik>
    </Container>
  )
})
