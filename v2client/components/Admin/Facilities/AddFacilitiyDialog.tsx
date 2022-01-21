import { useState } from "react";
import Dialog from "../../Common/Dialog";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { createAssets } from "../../../redux/thunk/assets";
import { SerializedError } from "@reduxjs/toolkit";
import { IFacility } from "../../../utils/Interfaces";
import { BookingDuration, FacilityCategories } from "../../../utils/Enums";
import { createFacility } from "../../../redux/thunk/facility";

const AddFacilityDialog = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFacility>({
    uid: "",
    particulars: "",
    category: FacilityCategories.Space,
    charges: "",
    duration: BookingDuration.PerDay,
    remarks: "",
    image: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeData = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleCreateFacility = (event: any) => {
    event.preventDefault();
    dispatch(createFacility(formData))
      .unwrap()
      .then((originalPromiseResult: any) => {
        // handle result here
        console.log(originalPromiseResult);
      })
      .catch((rejectedValueOrSerializedError: SerializedError | any) => {
        // handle error here
        console.error(rejectedValueOrSerializedError);
      });
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
          <p className="text-xl font-medium">Create New Facility</p>
          <button
            onClick={handleClose}
            className="rounded-full p-2 hover:bg-neutral-200 flex items-center"
          >
            <span className="material-icons-round self-center">clear</span>
          </button>
        </div>
        <div id="dialog-content" className="mt-6">
          <section className="container">
            <form>
              <label className="block mt-2" htmlFor="particulars">
                <span className="text-gray-700">Particulars</span>
                <input
                  type="text"
                  name="particulars"
                  id="particulars"
                  placeholder="Enter Particulars"
                  value={formData.particulars}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleChangeData}
                />
              </label>
              <label className="block mt-2" htmlFor="categories">
                <span className="text-gray-700">Categories</span>
                <select
                  name="categories"
                  id="categories"
                  onChange={handleChangeData}
                  className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {(
                    Object.keys(FacilityCategories) as Array<
                      keyof typeof FacilityCategories
                    >
                  ).map((key, id) => (
                    <option key={id} value={key}>
                      {FacilityCategories[key]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block mt-2" htmlFor="charges">
                <span className="text-gray-700">Charges</span>
                <input
                  type="text"
                  name="charges"
                  id="charges"
                  placeholder="Enter Charges"
                  value={formData.charges}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={handleChangeData}
                />
              </label>
              <label className="block mt-2" htmlFor="duration">
                <span className="text-gray-700">Duration</span>
                <select
                  name="duration"
                  id="duration"
                  onChange={handleChangeData}
                  className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {(
                    Object.keys(BookingDuration) as Array<
                      keyof typeof BookingDuration
                    >
                  ).map((key, id) => (
                    <option key={id} value={key}>
                      {BookingDuration[key]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Remarks</span>
                <textarea
                  id="remarks"
                  name="remarks"
                  onChange={handleChangeData}
                  className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={3}
                ></textarea>
              </label>
            </form>
          </section>
        </div>
        <div id="dialog-actions" className="flex justify-end mt-4">
          <button
            type="submit"
            onClick={handleCreateFacility}
            className="flex items-center bg-blue-600 shadow rounded px-4 py-2 text-white ring-1 ring-blue-900/5"
          >
            <span className="material-icons-round">add</span> Create New
            Facility
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default AddFacilityDialog;
