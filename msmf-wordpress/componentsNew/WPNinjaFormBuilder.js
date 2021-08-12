import PropTypes from "prop-types"
import { useQuery } from "@apollo/client"
import { GET_FORM } from "../lib/queries";
import { useEffect, useState } from "react";
import FormComponent from "./FormComponent";

const FormBuilder = (props) => {
  const {
    formId,
    onSubmit,
    formData,
    setFormData,
    encType
  } = props;

  const { loading, error, data } = useQuery(GET_FORM, {
    variables: { formId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <form method={"post"} onSubmit={onSubmit} encType={encType}>
      {data.form.fields.nodes.map(item => {
        return <FormComponent 
                type={item.type}
                name={item.fieldId}
                label={item.label}
                options={item.options}
                formData={formData}
                setFormData={setFormData}
                />
      })}
    </form>
  )
}

FormBuilder.propTypes = {
  formId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  encType: PropTypes.string
}

export default FormBuilder