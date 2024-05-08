import React from "react"
import { clsx } from "clsx";
import AdminDrawer from "./AdminDrawer";
import CustomEditTable from "../../components/CustomEditTable";
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";

import { Main, DrawerHeader } from "../../styled";
import {
    randomTraderName,
    randomId,
    randomArrayItem,
    randomUserName,

} from '@mui/x-data-grid-generator';
import {
    GridRowModes,
    GridActionsCellItem,
} from '@mui/x-data-grid';

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


function TourManageDetail() {
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
                    // setRows(rows.filter((row) => row.id !== id));
                };

                const handleCancelClick = (id) => () => {
                    setRowModesModel({
                        ...rowModesModel,
                        [id]: { mode: GridRowModes.View, ignoreModifications: true },
                    });

                    // const editedRow = rows.find((row) => row.id === id);
                    // if (editedRow.isNew) {
                        // setRows(rows.filter((row) => row.id !== id));
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
            <div className="main-head d-flex flex-column">
                <div className="main-head-intro d-flex j-between align-center">
                    <div className="main-head--logo d-flex align-center j-start">
                        <img src="https://static.livescore.com/i2/fh/england.jpg" alt="" />
                        <div className="main-head--info d-flex flex-column">
                            <h2 className="main-head--team">Premier League</h2>
                            <h5 className="main-head--country text-secondary">England</h5>
                        </div>
                    </div>
                    <button className="main-head--action outline-btn">
                        Change Logo
                    </button>

                </div>
                <ul className="nav main-navbar">
                    <li className="nav-item" key={1}>
                        <a className="nav-link active" aria-current="page" href="#">TEAMS</a>
                    </li>
                    <li className="nav-item" key={2}>
                        <a className="nav-link" href="#">KNOCKOUT</a>
                    </li>
                    <li className="nav-item" key={3}>
                        <a className="nav-link" href="#">MATCHES</a>
                    </li>
                    <li className="nav-item" key={4}>
                        <a className="nav-link" href="#">OFFICAL TEAM</a>
                    </li>
                </ul>
            </div>
            <div className="main-body">
                <CustomEditTable columns={columns} data={initialRows} />
            </div>
            <AdminDrawer />
        </Main >
    );
}



export default TourManageDetail;
