import { IAsset } from "../../../utils/Interfaces";

interface AssetTableProps {
  assets: IAsset[];
}
const AssetsTable = (props: AssetTableProps) => {
  const { assets } = props;

  const copyToClipboard = async (uri: string) => {
    await navigator.clipboard.writeText(uri);
    alert("URI Copied");
  };

  return assets && assets.length ? (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((item, key) => (
          <tr>
            <td>
              <img src={item.uri} className="w-8 h-8" alt={item.originalName} />
            </td>
            <td>{item.fileName}</td>
            <td>
              <button onClick={() => copyToClipboard(item.uri)}>
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
