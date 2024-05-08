import React, { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
import { clsx } from "clsx";
import UserDrawer from "./UserDrawer";
import CustomTab from "../../components/CustomTabs"
import CustomEditTable from "../../components/CustomEditTable";
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CancelIcon from '@mui/icons-material/Close';
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";

import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, AppBar, TopToolbar, Main, DrawerHeader } from "../../styled";
import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
    randomUserName,
    randomCountry,
    randomInt

} from '@mui/x-data-grid-generator';
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { randomNumberBetween } from "@mui/x-data-grid/internals";




const roles = ['Active', 'Request Approval'];
const randomRole = () => {
    return randomArrayItem(roles);
};


const initialRows = [
    {
        id: randomId(),
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: randomTraderName(),
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: randomTraderName(),
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: randomTraderName(),
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: randomTraderName(),
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: randomTraderName(),
        status: randomRole(),
        ofplayer: 19
    },
    {
        id: randomId(),
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        manager: randomTraderName(),
        status: randomRole(),
        ofplayer: 19
    },

];


function Matches() {
    const [rowModesModel, setRowModesModel] = React.useState({});
    const columns = [
        {
            field: 'team', headerName: 'TEAM', width: 220, editable: false, renderCell: (params) => {
                return (
                    <div className='d-flex'>
                        <Avatar src={params.row.avatar} sx={{ margin: "10px 3px", width: "30px", height: "30px" }} />
                        <span>
                            {params.row.team}
                        </span>
                    </div>
                )
            }
        },
        {
            field: 'manager',
            headerName: 'MANAGER',
            type: 'text',
            width: 180,
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'status',
            headerName: 'STATUS',
            width: 150,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Active', 'Request Approval'],
            renderCell: (params) => {
                return (
                    <span className={clsx(params.row.status == "Active" ? "text-success" : "text-warning")}>
                        {params.row.status}
                    </span>
                )
            }
        },
        {
            field: 'ofplayer',
            headerName: '#OF PLAYER',
            type: 'text',
            width: 180,
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
    const contentMenu = [
        { text: "All Squad" },
        { text: "Tournament A" },
        { text: "Tournament B" }];
    return (
        <Main open={true}>
            <DrawerHeader />
            <CustomBreadcrumbs />
            <div className="main-head d-flex flex-column">
                <div className="main-head-intro d-flex j-between align-center">
                    <div className="main-head--logo d-flex align-center j-start">
                        <img src="https://static.livescore.com/i2/fh/england.jpg" alt="" />
                        <div className="main-head--info d-flex flex-column">
                            <h2 className="main-head--team">Premier League</h2>
                            <h5 className="main-head--country text-secondary">England</h5>
                        </div>
                    </div>

                </div>
                <ul className="nav main-navbar">
                    <li className="nav-item" key={1}>
                        <a className="nav-link" aria-current="page" href="#">OVERVIEW</a>
                    </li>
                    <li className="nav-item" key={2}>
                        <a className="nav-link active" href="#">MATCHES</a>
                    </li>
                    <li className="nav-item" key={3}>
                        <a className="nav-link" href="#">STANDINGS</a>
                    </li>
                </ul>
            </div>
            <p style={{margin:"20px 0 2px 0"}}>ROUND 28</p>
            <div className="main-body">
                <div className="d-flex match-item align-center">
                    <div className="d-flex">
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                        <div>
                            10/20/2024
                        </div>
                    </div>
                    <div>
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8633.png" />
                        <span>Leral Madrid</span>
                    </div>
                </div>
                <div className="d-flex match-item align-center">
                    <div className="d-flex">
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                        <div>
                            10/20/2024
                        </div>
                    </div>
                    <div>
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8633.png" />
                        <span>Leral Madrid</span>

                    </div>
                </div>
                <div className="d-flex match-item align-center">
                    <div className="d-flex">
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                        <div>
                            10/20/2024
                        </div>
                    </div>
                    <div>
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8633.png" />
                        <span>Leral Madrid</span>

                    </div>
                </div>
            </div>
            <p style={{margin:"20px 0 2px 0"}}>ROUND 29</p>
            <div className="main-body">

                <div className="d-flex match-item align-center">
                    <div className="d-flex">
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                        <div>
                            10/20/2024
                        </div>
                    </div>
                    <div>
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8633.png" />
                        <span>Leral Madrid</span>
                    </div>
                </div>
                <div className="d-flex match-item align-center">
                    <div className="d-flex">
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                        <div>
                            10/20/2024
                        </div>
                    </div>
                    <div>
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8633.png" />
                        <span>Leral Madrid</span>

                    </div>
                </div>
                <div className="d-flex match-item align-center">
                    <div className="d-flex">
                        <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
                        <div>
                            10/20/2024
                        </div>
                    </div>
                    <div>
                        <img src="https://lsm-static-prod.livescore.com/medium/enet/8633.png" />
                        <span>Leral Madrid</span>

                    </div>
                </div>
            </div>
            <UserDrawer />
        </Main >
    );
}



export default Matches;
