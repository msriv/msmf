import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Grid,
  Snackbar,
} from "@mui/material";
import { Add, Cancel as CloseIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { BookingDuration, Categories } from "../../../utils/FacilitiesUtils";
import { API_ROUTES } from "../../../lib/apiRoutes";
import axios from "axios";

import FileInput from "../../../design-system/FileInput";
import { FormGroup } from "../../../design-system/Form";
import Select from "../../../design-system/Select";
import TextField from "../../../design-system/TextField";
import Button from "../../../design-system/Button";

const useStyles = makeStyles({
  closeButton: {
    float: "right",
  },
  content: {
    overflow: "hidden",
    padding: "2rem",
  },
});

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const FacilityForm = (props) => {
  const { type, heading, mutate } = props;

  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  useEffect(() => {
    return () => {
      mutate();
    };
  }, []);

  const classes = useStyles();
  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <Add />
      </IconButton>
      <Dialog open={open} maxWidth={"lg"} fullWidth>
        <DialogTitle>
          <span className="font-inter-bold text-3xl">{`${heading}`}</span>
          <IconButton
            className={classes.closeButton}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <Grid spacing={6} alignContent="center" alignItems="center" container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Formik
                initialValues={() => {
                  if (type === "edit") {
                    return {
                      particulars: "",
                      category: "",
                      charges: "",
                      duration: "",
                      remarks: "",
                      image: "",
                    };
                  } else {
                    return {
                      particulars: "",
                      category: "",
                      charges: "",
                      duration: "",
                      remarks: "",
                      image: "",
                    };
                  }
                }}
                validationSchema={Yup.object({
                  particulars: Yup.string()
                    .min(5, "Must be 5 characters or more")
                    .required("Required"),
                  category: Yup.mixed()
                    .oneOf(Categories, "Select appropriate category")
                    .required("Required"),
                  charges: Yup.number().required("Required"),
                  duration: Yup.mixed().oneOf(
                    BookingDuration,
                    "Select from given duration"
                  ),
                  remarks: Yup.string()
                    .min(5, "Must be 5 characters or more")
                    .required("Required"),
                  image: Yup.mixed()
                    .required("An image is required")
                    .test(
                      "fileSize",
                      "File is too large",
                      (value) => value && value.size <= FILE_SIZE
                    )
                    .test(
                      "fileFormat",
                      "Unsupported Format",
                      (value) => value && SUPPORTED_FORMATS.includes(value.type)
                    ),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  let formData = new FormData();

                  formData.append("particulars", values.particulars);
                  formData.append("category", values.category);
                  formData.append("charges", values.charges);
                  formData.append("duration", values.duration);
                  formData.append("remarks", values.remarks);
                  formData.append("image", values.image);
                  axios
                    .post(API_ROUTES.FACILITIES, formData, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    })
                    .then((response) => {
                      console.log(response.data);
                      setSubmitting(false);
                      setOpenSnack(true);
                      resetForm({
                        particulars: "",
                        category: "",
                        charges: "",
                        duration: "",
                        remarks: "",
                        image: "",
                      });
                    })
                    .catch((error) => console.error(error.toString()));
                }}
              >
                {(formik) => {
                  return (
                    <Form
                      id="facilitiesForm"
                      onSubmit={formik.handleSubmit}
                      encType="multipart/form-data"
                    >
                      <FormGroup>
                        <TextField
                          label="Particulars"
                          autoFocus
                          formHelperText="Name of the Equipment/Facility"
                          required
                          type="text"
                          value={formik.values.particulars}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.particulars &&
                            Boolean(formik.errors.particulars)
                          }
                          errorText={
                            formik.touched.particulars &&
                            formik.errors.particulars
                          }
                          name="particulars"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Select
                          label="Category"
                          formHelperText="Category of the facility"
                          required
                          value={formik.values.category}
                          onChange={formik.handleChange}
                          name="category"
                          options={Categories}
                          error={
                            formik.touched.category &&
                            Boolean(formik.errors.category)
                          }
                          errorText={
                            formik.touched.category && formik.errors.category
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          label="Charges (in ₹)"
                          required
                          type="text"
                          value={formik.values.charges}
                          onChange={formik.handleChange}
                          name="charges"
                          error={
                            formik.touched.charges &&
                            Boolean(formik.errors.charges)
                          }
                          errorText={
                            formik.touched.charges && formik.errors.charges
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Select
                          label="Duration"
                          formHelperText="Minimum duration of Booking"
                          required
                          value={formik.values.duration}
                          onChange={formik.handleChange}
                          name="duration"
                          options={BookingDuration}
                          error={
                            formik.touched.duration &&
                            Boolean(formik.errors.duration)
                          }
                          errorText={
                            formik.touched.duration && formik.errors.duration
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          label="Remarks"
                          multiline
                          required
                          type="text"
                          value={formik.values.remarks}
                          onChange={formik.handleChange}
                          name="remarks"
                          error={
                            formik.touched.remarks &&
                            Boolean(formik.errors.remarks)
                          }
                          errorText={
                            formik.touched.remarks && formik.errors.remarks
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <FileInput
                          label="Image"
                          required
                          value={formik.values.image}
                          onChange={(event) => {
                            formik.setFieldValue(
                              "image",
                              event.target.files[0]
                            );
                          }}
                          error={
                            formik.touched.image && Boolean(formik.errors.image)
                          }
                          errorText={
                            formik.touched.image && formik.errors.image
                          }
                          name="image"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button
                          type="submit"
                          submitLoading={formik.isSubmitting}
                        >
                          {" "}
                          Add Facility{" "}
                        </Button>
                      </FormGroup>
                    </Form>
                  );
                }}
              </Formik>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
        message={"Facility created"}
      />
    </div>
  );
};

export default FacilityForm;
