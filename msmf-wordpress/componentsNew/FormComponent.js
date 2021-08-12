import PropTypes from "prop-types"
import { FormControl } from "../design-system/Form"
import Button from "../design-system/Button";
import TextField from "../design-system/TextField";
import Select from "../design-system/Select";
import { useEffect } from "react";

const FormComponent = (props) => {
  const {
    formData,
    setFormData,
    type, 
    name, 
    label, 
    options
  } = props;

  const inputElementTypes = ["firstname", "lastname", "email", "phone", "textbox"];

 

    const handleChange = (e) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: e.target.value
      }))
    }

    if( inputElementTypes.includes(type) ) {
      useEffect(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: ""
        }))
      }, [])
      return (
        <FormControl key={name}>
          <TextField 
            name={name} 
            id={`${label}-${name}`} 
            label={label} 
            type={"text"}
            value={formData[name]}
            onChange={handleChange}
            required
          />

          {/* <label htmlFor={`${label}-${name}`}> {label}</label>
          <input className="form-input" type={"text"} id={`${label}-${name}`} name={name} placeholder={label} value={formFieldState[name]} onChange={handleChange}/> */}
        </FormControl>
      )
    }else if ( type === "textarea" ) {
      useEffect(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: ""
        }))
      }, [])
      return (
        <FormControl key={name}>
          <TextField 
            name={name} 
            id={`${label}-${name}`} 
            label={label} 
            type={"text"}
            value={formData[name]}
            onChange={handleChange}
            multiline
            required
          />
        </FormControl>
      )
    }else if ( type === "submit" ) {
      return (
      <FormControl key={name}>
        <Button name={name} type={"submit"}>{label}</Button>
      </FormControl>)
    }else if ( type === "listselect") {
      useEffect(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: options[0].value
        }))
      }, [])
      return (
        <FormControl key={name}>
          <Select 
            name={name}
            id={`${label}-${name}`}
            value={formData[name]}
            onChange={handleChange}
            options={options}
            label={label}
          />
        </FormControl>
      )
    }else if ( type === "listimage" ) {
      useEffect(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: ""
        }))
      }, [])
      return (
        <FormControl key={name}>
          <label htmlFor={`${label}-${name}`}> {label}</label>
          <input id={`${label}-${name}`} name={name} type="file" value={formData[name]} onChange={handleChange}/>
        </FormControl>
      )
    }
}

FormComponent.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired, 
  name: PropTypes.number.isRequired, 
  label: PropTypes.string.isRequired, 
  options: PropTypes.array
}

export default FormComponent