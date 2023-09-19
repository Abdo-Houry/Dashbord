import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { rows ,columns} from "./datainfo";

const Invoices = () => {
  return (

          <Box sx={{ height: 600, mx: "auto" }}>
            <DataGrid
            checkboxSelection
              rows={rows}
              // @ts-ignore
              columns={columns}
            />
          </Box>
  )
}

export default Invoices
