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
        id: 1,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },
    {
        id: 2,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },
    {
        id: 3,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },
    {
        id: 4,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },
    {
        id: 5,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },
    {
        id: 6,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },
    {
        id: 7,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },
    {
        id: 8,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },
    {
        id: 9,
        team: randomUserName(),
        avatar: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
        P:"20",W:"23",D:"23",L:"28",F:"54",A:"3",GO:"34",PTS:"23"
    },

];


function Standing() {
    const [rowModesModel, setRowModesModel] = React.useState({});
    var NoFrame = <span>ok</span>;
    const columns = [
        {
            field: 'id', headerName: '#', width: 30, editable: false, renderCell: (params) => {
                if (params.row.id < 4) return <button className="btn btn-success">{params.row.id}</button>
                else if (params.row.id >= 4 && params.row.id < 6) return <button className="btn btn-warning">{params.row.id}</button>
                else return <span>{params.row.id}</span>
            }
        },
        {
            field: 'team', headerName: 'TEAM', width: 420, editable: false, renderCell: (params) => {
                return (
                    <div className='d-flex'>
                        <img src={params.row.avatar} style={{ margin: "10px 3px", width: "30px", height: "30px" }} />
                        <span>
                            {params.row.team}
                        </span>
                    </div>
                )
            }
        },
        {
            field: 'P',
            headerName: 'P',
            align: 'left',
            headerAlign: 'left',
            editable: false,
        },
        {
            field: 'W',
            headerName: 'W',
            align: 'left',
            headerAlign: 'left',
            editable: false,
        },
        {
            field: 'D',
            headerName: 'D',
            align: 'left',
            headerAlign: 'left',
            editable: false,
        },
        {
            field: 'L',
            headerName: 'L',
            align: 'left',
            headerAlign: 'left',
            editable: false,
        },
        {
            field: 'F',
            headerName: 'F',
            align: 'left',
            headerAlign: 'left',
            editable: false,
        },
        {
            field: 'A',
            headerName: 'A',
            align: 'left',
            headerAlign: 'left',
            editable: false,
        },
        {
            field: 'GO',
            headerName: 'GO',
            align: 'left',
            headerAlign: 'left',
            editable: false,
        },
        {
            field: 'PTS',
            headerName: 'PTS',
            align: 'left',
            headerAlign: 'left',
            editable: false,
        }
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
                        <a className="nav-link" href="#">MATCHES</a>
                    </li>
                    <li className="nav-item" key={3}>
                        <a className="nav-link active" href="#">STANDINGS</a>
                    </li>
                </ul>
            </div>
            <div className="main-body">
                <CustomEditTable columns={columns} data={initialRows} />
            </div>
            <UserDrawer />
        </Main >
    );
}



export default Standing;
