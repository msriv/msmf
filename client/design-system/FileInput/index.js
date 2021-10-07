import { useRef } from "react";
import { Grid } from "@mui/material";
import TextField from "../TextField";
import Button from "../Button";
import { FileUpload } from "@mui/icons-material";
import { FormGroup } from "../Form";

const FileInput = (props) => {
  const { label, required, value, onChange, name, error, errorText } = props;
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <>
      <label htmlFor={`${label}-${name}`}> {label}</label>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={11}>
          <FormGroup>
            <TextField type="text" value={value?.name} name={name} />
          </FormGroup>
        </Grid>
        <Grid item xs={1}>
          <Button type={"button"} onClick={handleClick}>
            <FileUpload />
          </Button>
        </Grid>
      </Grid>
      {error ? (
        <p className=" text-caption text-red-500 font-bold">{errorText}</p>
      ) : null}

      <input
        type="file"
        name={name}
        ref={hiddenFileInput}
        required={required}
        onChange={onChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default FileInput;
