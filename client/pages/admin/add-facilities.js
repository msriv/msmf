import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react"
import useSWR from "swr";


const AddFacilities = () => {

  const [submitForm, { data, loading, error }] = useSWR(SUBMIT_FORM);

  const [formData, setFormData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = Object.keys(formData).map(item => ({id: parseInt(item), value: formData[item]}))
    
    submitForm({ variables: {
      formData: body,
      formId: 4
    } });
  }

  return (
    <div className="container mx-auto">
      <FormBuilder 
        formId={"4"} 
        onSubmit={handleSubmit} 
        formData={formData} 
        setFormData={setFormData} 
        encType={"multipart/form-data"}
        submitError={error}
        submitLoading={loading}
        submitSuccess={data?.submitForm?.success}
        successMessage={"Facility added successfully."}
        errorMessage={"Something went wrong when submitting the form."}
      />
    </div>
  )
}

export default AddFacilities