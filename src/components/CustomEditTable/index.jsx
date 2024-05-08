import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';
import { Search, SearchIconWrapper, StyledInputBase, AppBar, TopToolbar } from "../../styled";


export default function CustomEditTable({customToolbar, columns,data}) {
  const [rows, setRows] = React.useState(data);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
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