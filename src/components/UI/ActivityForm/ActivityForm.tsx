import {  Button, Container } from "@mui/material"
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import { Link } from "react-router-dom";
import {  Formik } from "formik";
import * as Yup from 'yup'
import MyTextInput from "../../../common/form/MyTextInput";
import MyTextArea from "../../../common/form/MyTextArea";
import MySelectInput from "../../../common/form/MySelectInput";
import { categoryOptions } from "../../../common/options/categoryOptions";
import MyDateInput from "../../../common/form/MyDateInput";
import { Activity } from "../../../models/activity";


export default observer(function ActivityForm() {

  const {activityStore} = useStore();
  const {
    loading, loadActivity,loadingInitial} = activityStore;

    const {id} = useParams();
    // const navigate = useNavigate()

    const [activity,setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: null,
        city: '',
        venue: '' 
    });

    const validationSchema = Yup.object({
      title: Yup.string().required('The activity title is required'),
      description: Yup.string().required('The activity title is required'),
      category: Yup.string().required(),
      date: Yup.string().required(),
      venue: Yup.string().required(),
      city: Yup.string().required(),
    })

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
      <Formik validationSchema={validationSchema} initialValues={activity} onSubmit={values => console.log(values)} enableReinitialize >
        {({handleSubmit}) => (
       <form onSubmit={handleSubmit} autoComplete="off" className="bg-white py-4 px-4 mt-10 ui form">
              <MyTextInput placeholder="Title" name="title"  />
              <MyTextArea rows={3} placeholder="Description" name='description' />
              <MySelectInput options={categoryOptions} placeholder="Category" name='category'  />
              <MyDateInput placeholderText="Date" name='date' showTimeSelect timeCaption="time" dateFormat='MMMM d, yyyy h:mm aa'  />
              <MyTextInput placeholder="City" name='city' />
              <MyTextInput placeholder="Venue"  name='venue'  />
              <div className="form-button flex justify-end gap-3">
              <Button component={Link} to='/activities' className="!bg-gray-500 !text-white !border-none" size="small">Cancel</Button>
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
