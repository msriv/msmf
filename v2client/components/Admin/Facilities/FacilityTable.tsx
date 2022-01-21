import { IFacility } from "../../../utils/Interfaces";

interface FaciltiesTableProps {
  facilities: IFacility[];
}
const FacilitiesTable = (props: FaciltiesTableProps) => {
  const { facilities } = props;
  return facilities && facilities.length ? (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Particulars</th>
          <th>Category</th>
          <th>Charges</th>
          <th>Booking Duration</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {facilities.map((item, key) => (
          <tr>
            <td>
              <img
                src={item.image}
                className="w-4 h-4"
                alt={item.particulars}
              />
            </td>
            <td>{item.particulars}</td>
            <td>{item.category}</td>
            <td>{item.charges}</td>
            <td>{item.duration}</td>
            <td>{item.remarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

export default FacilitiesTable;
