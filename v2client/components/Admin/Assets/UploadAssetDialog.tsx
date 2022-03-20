import { useState } from "react";
import Dialog from "../../Common/Dialog";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { createAssets } from "../../../store/thunk/assets";
import { SerializedError } from "@reduxjs/toolkit";

const UploadAssetDialog = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<any>([]);

  const { isLoading, assets } = useSelector((store: RootState) => ({
    isLoading: store.assetsStore.isLoading,
    assets: store.assetsStore.assets,
  }));

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file: any) => (
    <div
      className=" inline-flex rounded border border-[#eaeaea] p-[4px] w-[100px] h-[100px] mr-2 mb-2"
      key={file.name}
    >
      <div className="flex overflow-hidden min-w-0">
        <img src={file.preview} className="block w-auto h-full" />
      </div>
    </div>
  ));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploadFiles = (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    acceptedFiles.forEach((file: File) => formData.append("assets", file));
    dispatch(createAssets(formData))
      .unwrap()
      .then((originalPromiseResult: any) => {
        // handle result here
        console.log(originalPromiseResult);
        revokePreviews();
      })
      .catch((rejectedValueOrSerializedError: SerializedError | any) => {
        // handle error here
        console.error(rejectedValueOrSerializedError);
      });
  };

  const revokePreviews = () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    setFiles([]);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center bg-sky-100 shadow rounded p-2"
      >
        <span className="material-icons-round">add</span>
      </button>
      <Dialog open={open}>
        <div id="dialog-header" className="flex justify-between items-center">
          <p className="text-xl font-medium">Upload Media</p>
          <button
            onClick={handleClose}
            className="rounded-full p-2 hover:bg-neutral-200 flex items-center"
          >
            <span className="material-icons-round self-center">clear</span>
          </button>
        </div>
        <div id="dialog-content" className="mt-6">
          <section className="container">
            <div
              {...getRootProps({
                className: `bg-gray-100 border-2 border-gray-300 border-dashed rounded px-4 py-6`,
              })}
            >
              <input {...getInputProps()} />
              <p>Drag &lsquo;n&rsquo; drop some files here, or click to select files</p>
            </div>
            <aside className="flex flex-wrap mt-[16px]">{thumbs}</aside>
          </section>
        </div>
        <div id="dialog-actions" className="flex justify-end">
          <button
            type="submit"
            onClick={uploadFiles}
            className="flex items-center bg-blue-600 shadow rounded px-4 py-2 text-white ring-1 ring-blue-900/5"
          >
            <span className="material-icons-round">file_upload</span> Upload
            Files
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default UploadAssetDialog;
