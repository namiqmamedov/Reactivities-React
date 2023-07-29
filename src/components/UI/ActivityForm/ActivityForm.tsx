import {  Button, Container } from "@mui/material"
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import { Link } from "react-router-dom";
import {  Formik } from "formik";
import * as Yup from 'yup'
import MyTextInput from "../../../common/form/MyTextInput";
import MyTextArea from "../../../common/form/MyTextArea";
import MySelectInput from "../../../common/form/MySelectInput";
import { categoryOptions } from "../../../common/options/categoryOptions";
import MyDateInput from "../../../common/form/MyDateInput";
import {  ActivityFormValues } from "../../../models/activity";
import { Header } from "semantic-ui-react";
import {v4 as uuid} from 'uuid'

export default observer(function ActivityForm() {

  const {activityStore} = useStore();
  const { createActivity,updateActivity,
    loadActivity,loadingInitial} = activityStore;

    const {id} = useParams();
    const navigate = useNavigate()

    const [activity,setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    const validationSchema = Yup.object({
      title: Yup.string().required('The activity title is required'),
      description: Yup.string().required('The activity title is required'),
      category: Yup.string().required(),
      date: Yup.string().required('Date is required').nullable(),
      venue: Yup.string().required(),
      city: Yup.string().required(),
    })

    useEffect(() => {
      if(id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)))
    }, [id, loadActivity]);

  function handleFormSubmit(activity: ActivityFormValues) {
    if(!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity).then(() => navigate(`/activities/${newActivity.id}`))
    } else{
      updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    }
  }

  if(loadingInitial) return <Loading/>
  
  return (
    <Container>
      <Header content='Activity Details' sub color="teal" />
      <Formik validationSchema={validationSchema} initialValues={activity} onSubmit={values => {
        return handleFormSubmit(values);
      }} enableReinitialize >
        {({handleSubmit,isValid,isSubmitting,dirty}) => (
       <form onSubmit={handleSubmit} autoComplete="off" className="bg-white py-4 px-4 mt-10 ui form">
              <MyTextInput placeholder="Title" name="title"  />
              <MyTextArea rows={3} placeholder="Description" name='description' />
              <MySelectInput options={categoryOptions} placeholder="Category" name='category'  />
              <MyDateInput placeholderText="Date" name='date' showTimeSelect timeCaption="time" dateFormat='MMMM d, yyyy h:mm aa'  />
              <Header content='Location Details' sub color="teal" />
              <MyTextInput placeholder="City" name='city' />
              <MyTextInput placeholder="Venue"  name='venue'  />
              <div className="form-button flex justify-end gap-3">
              <Button component={Link} to='/activities' className="!bg-gray-500 !text-white !border-none" size="small">Cancel</Button>
              <LoadingButton disabled={isSubmitting || !dirty || !isValid} loading={isSubmitting} type="submit" variant="contained" className="!bg-green-600 text-white" size="small">
              Submit
              </LoadingButton>
              </div>
      </form>
        )}
      </Formik>
    </Container>
  )
})
