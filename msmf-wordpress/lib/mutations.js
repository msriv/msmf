import { gql } from "@apollo/client";

export const SUBMIT_FORM = gql`
mutation submitForm($formData: [InputField]!, $formId: Int!) {
  submitForm(input: {formId: $formId, data: $formData}) {
    errors {
      message
      fieldId
    }
    message
    success
  }
}
`
