import React from "react"
import { clsx } from "clsx";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import AdminDrawer from "./AdminDrawer";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import CustomEditTable from "../../components/CustomEditTable";

import { Search, SearchIconWrapper, StyledInputBase, Main, DrawerHeader } from "../../styled";
import {
    randomTraderName,
    randomId,
    randomArrayItem,

} from '@mui/x-data-grid-generator';
import {
    GridRowModes,
    GridToolbarContainer,
    GridActionsCellItem,
} from '@mui/x-data-grid';




const roles = ['In Progress', 'Not Started', 'End'];
const randomRole = () => {
    return randomArrayItem(roles);
};


const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 25,
        joinDate: "Knock Out",
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 36,
        joinDate: "Knock Out",
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 19,
        joinDate: "Knock Out",
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 28,
        joinDate: "Knock Out",
        role: randomRole(),
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        age: 23,
        joinDate: "Knock Out",
        role: randomRole(),
    },
];


function TourManage() {
    const [rowModesModel, setRowModesModel] = React.useState({});
    // const [rows, setRows] = React.useState({});
    const columns = [
        {
            field: 'name', headerName: 'TOURNAMENT', width: 220, editable: true
        },
        {
            field: 'age',
            headerName: '#OF TEAM',
            type: 'number',
            width: 220,
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'joinDate',
            headerName: 'SYSTEM',
            // type: '',
            width: 200,
            editable: true,
        },
        {
            field: 'role',
            headerName: 'STATUS',
            width: 220,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['In Progress', 'Not Started', 'End'],
            renderCell: (params) => {
                return (
                    <span className={clsx(params.row.role == "In Progress" ? 
                    "text-success" : params.row.role == 'Not Started' ? 
                    "text-warning" : "text-light")}>
                        {params.row.role}
                    </span>
                )
            }
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {

                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
                const handleEditClick = (id) => () => {
                    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
                };

                const handleSaveClick = (id) => () => {
                    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
                };

                const handleDeleteClick = (id) => () => {
                    // setRows(rows.filter((row) => row.id !== id));
                };

                const handleCancelClick = (id) => () => {
                    setRowModesModel({
                        ...rowModesModel,
                        [id]: { mode: GridRowModes.View, ignoreModifications: true },
                    });

                    // const editedRow = rows.find((row) => row.id === id);
                    // if (editedRow.isNew) {
                    //     setRows(rows.filter((row) => row.id !== id));
                    // }
                };
                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];
    return (
        <Main open={true}>
            <DrawerHeader />
            <CustomBreadcrumbs />
            <div className="main-body" style={{ marginTop: 30 }}>
                <CustomEditTable customToolbar={EditToolbar} columns={columns} data={initialRows} />
            </div>
            <AdminDrawer />
        </Main >
    );
}

function EditToolbar(props) {
    // const { setRows, setRowModesModel } = props;
    const [searched, setSearched] = React.useState("");

    // const handleClick = () => {
    //     const id = randomId();
    //     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    //     setRowModesModel((oldModel) => ({
    //         ...oldModel,
    //         [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    //     }));
    // };

    // const requestSearch = (e) => {
    //     const searchedVal = e.target.value;
    //     const filteredRows = initialRows.filter((row) => {
    //         setSearched(searchedVal);
    //         return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    //     });
    //     // setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);

    //     setRows((oldRows) => [...filteredRows]);
    // };

    return (
        <GridToolbarContainer sx={{ display: "flex", justifyContent: "space-between", margin: "8px 0" }}>
            <Search sx={{ borderRadius: 25 }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searched}
                    // onChange={requestSearch}
                // onCancelSearch={() => cancelSearch()}
                />
            </Search>
            <button className='pull-btn' color="primary" 
            >
            {/* onClick={handleClick}> */}
                create New Tournament
            </button>
        </GridToolbarContainer>
    );
}


export default TourManage;
