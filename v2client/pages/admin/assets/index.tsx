import AdminLayout from "../../../components/Admin/AdminLayout";
import AssetsTable from "../../../components/Admin/Assets/AssetsTable";
import UploadAssetDialog from "../../../components/Admin/Assets/UploadAssetDialog";

const AssetManager = () => {
  return (
    <AdminLayout>
      <>
        <div className="flex justify-between">
          <p className="font-avenir-book text-lg">Asset Manager</p>
          <UploadAssetDialog />
        </div>
        <AssetsTable assets={[]} />
      </>
    </AdminLayout>
  );
};

export default AssetManager;
