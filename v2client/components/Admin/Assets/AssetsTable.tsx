import { IAsset } from "../../../utils/Interfaces";

interface AssetTableProps {
  assets: IAsset[];
}
const AssetsTable = (props: AssetTableProps) => {
  const { assets } = props;
  return assets && assets.length ? (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Name</th>
          <th>Dimensions</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((item, key) => (
          <tr>
            <td>
              <img src={item.uri} className="w-4 h-4" alt={item.alt} />
            </td>
            <td>{item.name}</td>
            <td>{`${item.width} x ${item.height}`}</td>
            <td>
              <button>
                <span className="material-icons-round">link</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

export default AssetsTable;
