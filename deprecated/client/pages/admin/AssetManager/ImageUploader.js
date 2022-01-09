import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { API_ROUTES } from "../../../lib/apiRoutes";
import {
  baseStyle,
  activeStyle,
  rejectStyle,
  acceptStyle,
  thumb,
  thumbRejected,
  thumbInner,
  thumbsContainer,
  img,
} from "./styles";

const MAX_FILE_SIZE = 160 * 1024;

const ImageUploader = () => {
  function sizeValidator(file) {
    if (file.size > MAX_FILE_SIZE) {
      console.log("File is too large");
      return {
        code: "fileSize",
        message: `File is too large`,
      };
    }

    return null;
  }
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpg, image/jpeg, image/png",
    validator: sizeValidator,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  const uploadFiles = () => {
    setUploading(true);
    let formData = new FormData();
    acceptedFiles.forEach((file) => formData.append("files[]", file));
    axios
      .post(API_ROUTES.UPLOAD_FILES, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUploading(false);
        revokePreviews();
      })
      .catch((error) => console.error(error.toString()));
  };

  const revokePreviews = () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
    setFiles([]);
  };

  return (
    <div className="container m-5">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <p>Only Image Files Accepted - JPEG, JPG, PNG</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
      <Button
        onClick={uploadFiles}
        variant="contained"
        fullWidth
        disabled={uploading}
      >
        {uploading ? <CircularProgress size="small" /> : null} &nbsp;&nbsp;
        Upload
      </Button>
    </div>
  );
};

export default ImageUploader;
