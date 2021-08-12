import { useMutation } from "@apollo/client";
import { useState } from "react"
import useSWR from "swr";
import FormBuilder from "../../componentsNew/WPNinjaFormBuilder"
import { SUBMIT_FORM } from "../../lib/mutations"


const AddFacilities = () => {

  const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM);

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = Object.keys(formData).map(item => ({id: parseInt(item), value: formData[item]}))
    
    submitForm({ variables: {
      formData: body,
      formId: 4
    } });

    
  }

  const [formData, setFormData] = useState({})


  return (
    <div className="container mx-auto">
      <FormBuilder 
        formId={"4"} 
        onSubmit={handleSubmit} 
        formData={formData} 
        setFormData={setFormData} 
        encType={"multipart/form-data"}
      />
    </div>
  )
}

export default AddFacilities