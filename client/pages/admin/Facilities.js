import { useState, useEffect } from "react"
import FileInput from "../../design-system/FileInput";
import { FormGroup } from "../../design-system/Form"
import Select from "../../design-system/Select";
import TextField from "../../design-system/TextField"

const Facilities = () => {

  const [particulars, setParticulars] = useState("");
  const [category, setCategory] = useState("");
  const [charges, setCharges] = useState("0");
  const [duration, setDuration] = useState("");
  const [remarks, setRemarks] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    return () => {
      setParticulars("")
      setCategory("")
      setCharges("0")
      setDuration("")
      setRemarks("")
      setImage("")
    }
  }, [])

  const handleSubmit = () => {

  }

  const categoryOptions = [{
    value: "space",
    label: "Space"
  }, {
    value: "storage",
    label: "Storage"
  }, {
    value: "instruments",
    label: "Instruments"
  },{
    value: "cell-culture-facility",
    label: "Cell Culture Facility"
  }]

  const durationOptions = [{
    value: "per-run",
    label: "Per Run"
  }, {
    value: "per-hour",
    label: "Per Hour"
  }, {
    value: "per-day",
    label: "Per Day"
  },{
    value: "per-month",
    label: "Per Month"
  }]

  return (
    <div className="w-full">
      <p className="text-2xl text-shark-500">Add Facilities</p>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormGroup>
          <TextField 
            label="Particulars"
            autoFocus
            formHelperText="Name of the Equipment/Facilitiy"
            required
            type="text"
            value={particulars}
            onChange={(event) => setParticulars(event.target.value)}
            name="particulars"
          />
        </FormGroup>
        <FormGroup>
          <Select 
            label="Category"
            formHelperText="Category of the facility"
            required
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            name="category"
            options={categoryOptions}
          />
        </FormGroup>
        <FormGroup>
          <TextField 
            label="Charges (in ₹)"
            required
            type="text"
            value={charges}
            onChange={(event) => setCharges(event.target.value)}
            name="charges"
            pattern={/^[0-9]*$/}
          />
        </FormGroup>
        <FormGroup>
          <Select 
            label="Duration"
            formHelperText="Minimum duration of Booking"
            required
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            name="duration"
            options={durationOptions}
          />
        </FormGroup>
        <FormGroup>
          <TextField 
            label="Remarks"
            multiline
            required
            type="text"
            value={remarks}
            onChange={(event) => setRemarks(event.target.value)}
            name="remarks"
          />
        </FormGroup>
        <FormGroup>
          <FileInput 
            label="Image"
            required
            value={image}
            onChange={(event) => setImage(event.target.files[0])}
            name="image"
          />
        </FormGroup>
      </form>
    </div>
  )
}

export default Facilities