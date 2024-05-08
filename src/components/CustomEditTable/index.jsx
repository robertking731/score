import * as React from 'react';
import Box from '@mui/material/Box';

import {
  DataGrid,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
export default function CustomEditTable({customToolbar, columns,data}) {
  const [rows, setRows] = React.useState(data);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };


  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };


  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: customToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        sx={{
          "border-top":"none",
          "--DataGrid-rowBorderColor":"transparent",
          border:"none",
          "& .MuiDataGrid-cell.MuiDataGrid-cell--editing:focus-within":{
            outline:"none",
            border:"solid #2b4561 1px",

          },
          "& .MuiDataGrid-row": {
            color: "grey",
            borderRadius:2,
            margin:"5px 0",
            backgroundColor:"#041421",
            "--rowBorderColor":"none"
          },
          "& .MuiDataGrid-row.Mui-selected":{
            backgroundColor:"#0F2A3F",
          },
          "& .MuiDataGrid-row.Mui-selected:hover":{
            backgroundColor:"#0F2A3F",
          },
          "& .MuiDataGrid-cell:focus":{
            border:"solid #2b4561 1px",
            outline:"none"
          }
        }}
      />
    </Box>
  );
}