import React from "react"
import UserDrawer from "./UserDrawer";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs";
import { Main, DrawerHeader } from "../../styled";
function Matches() {
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
