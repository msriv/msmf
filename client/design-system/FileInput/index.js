import { useRef } from "react"
import Button from "../Button"
import TextField from "../TextField"
import Upload from "../../componentsNew/Icons/Upload.svg"
import { FormGroup } from "../Form"

const FileInput = (props) => {

  const {
    label,
    required,
    value,
    onChange,
    name
  } = props

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    console.log(event)
    hiddenFileInput.current.click();
  };
  console.log(label, name)
  return (
      <>

      <label htmlFor={`${label}-${name}`}> {label}</label>
      <div className="w-full">
        <TextField classes="w-full" value={value?.name}/>
        <Button type="button" onClick={handleClick}>
          <Upload className="w-5" />
        </Button>
      </div>
      
      <input 
        type="file" 
        name={name} 
        ref={hiddenFileInput}
        required={required} 
        onChange={onChange} 
        style={{display: 'none'}}
      />
      </>
  )
}

export default FileInput