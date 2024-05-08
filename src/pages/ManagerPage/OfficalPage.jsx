import React, { useEffect, useState } from "react"
import ManagerDrawer from "./ManagerDrawer";
import CustomEditTable from "../../components/CustomEditTable";
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, AppBar, TopToolbar, Main, DrawerHeader } from "../../styled";
import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,

} from '@mui/x-data-grid-generator';
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
    return randomArrayItem(roles);
};

const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    {
        id: randomId(),
        name: randomTraderName(),
        avatar: "/images/avatar/player.jpg",
        pos:"Coach"
    },
    
];

function OfficalPage() {
    const [rowModesModel, setRowModesModel] = React.useState({});
    const columns = [
        {
            field: 'user', headerName: 'NAME', width: 300, editable: false, renderCell: (params) => {
                return (
                    <div className='d-flex'>
                        <Avatar src={params.row.avatar} sx={{ marginRight: 3 }} />
                        <span>
                            {params.row.name}
                        </span>
                    </div>
                )
            }
        },
        {
            field: 'pos',
            headerName: 'POSITION',
            type: 'number',
            width: 300,
            align: 'left',
            headerAlign: 'left',
            editable: true,
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

                // const handleDeleteClick = (id) => () => {
                //     setRows(rows.filter((row) => row.id !== id));
                // };

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
                        // onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];
    const contentMenu = [
        { text: "All Squad" },
        { text: "Tournament A" },
        { text: "Tournament B" }];
    return (
        <Main open={true}>
            <DrawerHeader />
            <div className="main-head d-flex flex-column">
                <div className="main-head-intro d-flex j-between align-center">
                    <div className="main-head--logo d-flex align-center j-start">
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8650.png" alt="" />
                        <div className="main-head--info d-flex flex-column">
                            <h2 className="main-head--team">Liverpool</h2>
                            <h5 className="main-head--country text-secondary">England</h5>
                        </div>
                    </div>
                    <button className="main-head--action outline-btn">
                        Change Logo
                    </button>
                </div>
                <ul className="nav main-navbar">
                    <li className="nav-item" key={1}>
                        <a className="nav-link" aria-current="page" href="#">squad</a>
                    </li>
                    <li className="nav-item" key={2}>
                        <a className="nav-link active" href="#">offical team</a>
                    </li>
                    <li className="nav-item" key={3}>
                        <a className="nav-link" href="#">jersey</a>
                    </li>
                    <li className="nav-item" key={4}>
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">match</a>
                    </li>
                    <li className="nav-item" key={5}>
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">transfers</a>
                    </li>
                </ul>
            </div>
            <div className="main-body">
                <CustomEditTable customToolbar={EditToolbar} columns={columns} data={initialRows} />
            </div>
            <ManagerDrawer />
        </Main >
    );
}

function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
    const [searched, setSearched] = React.useState("");

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    const requestSearch = (e) => {
        const searchedVal = e.target.value;
        const filteredRows = initialRows.filter((row) => {
            setSearched(searchedVal);
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        // setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);

        setRows((oldRows) => [...filteredRows]);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch("");
    };

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
                    onChange={requestSearch}
                // onCancelSearch={() => cancelSearch()}
                />
            </Search>
            <button className='pull-btn' color="primary" onClick={handleClick}>
                <PersonAddAltOutlinedIcon />
                &nbsp;&nbsp;Add New Offical
            </button>
        </GridToolbarContainer>
    );
}


export default OfficalPage;
