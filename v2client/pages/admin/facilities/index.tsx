import { SerializedError } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminLayout from "../../../components/Admin/AdminLayout";
import AddFacilityDialog from "../../../components/Admin/Facilities/AddFacilitiyDialog";
import FacilitiesTable from "../../../components/Admin/Facilities/FacilityTable";
import { RootState, useAppDispatch } from "../../../store/store";
import { getFacility } from "../../../store/thunk/facility";

const Facilities = () => {
  const dispatch = useAppDispatch();

  const { facilities } = useSelector((store: RootState) => ({
    facilities: store.facilitiesStore.facilities,
  }));

  const fetchFacilties = () => {
    dispatch(getFacility())
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

  useEffect(() => {
    fetchFacilties();
  }, [fetchFacilties]);


  return (
    <AdminLayout>
      <div className="flex justify-between">
        <p className="font-avenir-book text-lg">Facilities</p>
        <AddFacilityDialog />
      </div>
      <FacilitiesTable facilities={facilities} />
    </AdminLayout>
  );
};

export default Facilities;
