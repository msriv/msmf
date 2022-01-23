import { SerializedError } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminLayout from "../../../components/Admin/AdminLayout";
import AssetsTable from "../../../components/Admin/Assets/AssetsTable";
import UploadAssetDialog from "../../../components/Admin/Assets/UploadAssetDialog";
import { RootState, useAppDispatch } from "../../../redux/store";
import { fetchAssets } from "../../../redux/thunk/assets";

const AssetManager = () => {
  const dispatch = useAppDispatch();
  const { isLoading, assets } = useSelector((store: RootState) => ({
    isLoading: store.assetsStore.isLoading,
    assets: store.assetsStore.assets,
  }));

  useEffect(() => {
    if (assets.length < 1) {
      dispatch(fetchAssets())
        .unwrap()
        .then((originalPromiseResult: any) => {
          // handle result here
          console.log(originalPromiseResult);
        })
        .catch((rejectedValueOrSerializedError: SerializedError | any) => {
          // handle error here
          console.error(rejectedValueOrSerializedError);
        });
    }
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between">
        <p className="font-avenir-book text-lg">Asset Manager</p>
        <UploadAssetDialog />
      </div>
      {isLoading ? <p>Loading Assets...</p> : <AssetsTable assets={assets} />}
    </AdminLayout>
  );
};

export default AssetManager;
