import {
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Switch,
  Paper,
} from "@mui/material";

const FacilitesTable = (props) => {
  const { facilities } = props;

  return (
    <TableContainer components={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Particulars</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Charges</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Remarks</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {facilities.map((row) => (
            <TableRow
              key={row.particulars}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell components="th" scope="row">
                {row.particulars}
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.charges}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell>{row.remarks}</TableCell>
              <TableCell>
                {row.image ? (
                  <img
                    style={{ maxWidth: 150 }}
                    src={row.image}
                    alt={row.particulars}
                  />
                ) : (
                  <p>No Image</p>
                )}
              </TableCell>
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FacilitesTable;
