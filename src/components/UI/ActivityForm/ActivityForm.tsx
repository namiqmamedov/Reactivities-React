import {  TextField } from "@mui/material"

export const ActivityForm = () => {
  return (
    <div className="bg-white py-4 px-4 mt-10">
        <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth={true} className="!mb-5" />
        <TextField id="outlined-basic" label="Description" rows={2} multiline variant="outlined" fullWidth={true} className="!mb-5" />
        <TextField id="outlined-basic" label="Category" variant="outlined" fullWidth={true} className="!mb-5" />
        <TextField id="outlined-basic" label="Date" variant="outlined" fullWidth={true} className="!mb-5" />
        <TextField id="outlined-basic" label="City" variant="outlined" fullWidth={true} className="!mb-5" />
        <TextField id="outlined-basic" label="Venue" variant="outlined" fullWidth={true} className="!mb-5" />
    </div>
  )
}
