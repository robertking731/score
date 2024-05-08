import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation, Switch } from "react-router-dom";

import Loading from "../pages/Landing";

import Landing from "../pages/Landing";
import Appbar from "../components/Layout/Appbar"
import Test from "../pages/Test";
import NotFound from "../pages/Errors/NotFound";
import {SquadPage, OfficalPage} from "../pages/ManagerPage";
import {TourManage, TourManageDetail} from "../pages/AdminPage";
import {Matches, Standing} from "../pages/UserPage";

// import AuthRoutes from "./AuthRoutes.jsx";

// const ManagerRoutes = React.lazy(() =>
//     import("./ManagerRoutes.jsx")
// );
// const CommonRoutes = React.lazy(() =>
//     import("./CommonRoutes.jsx")
// );
// const AdminRoutes = React.lazy(() =>
//     import("./AdminRoutes.jsx")
// );
const BanRoutes = ["/", "/not-found"]
function MainRoutes() {
    const [open, setOpen] = useState(true);
    const url = useLocation();
    const pathName = url.pathname;
    console.log(pathName)
    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 2200);
    })
    //   const authenticated = useSelector((store) => store.auth.authenticated);
    //   const isAdmin = useSelector((store) => store.auth.Admin.IsAdmin);
    // const isAdmin = false;

    return (
        <div>
            {open && <Landing></Landing>}
            {
                !open &&
                <div>
                    {!BanRoutes.includes(pathName) && <Appbar />}
                    <React.Suspense fallback={<Loading></Loading>}>
                        <Routes>
                            {/* <CommonRoutes /> */}
                            {/* <ManagerRoutes /> */}
                            {/* <AdminRoutes /> */}
                            <Route exact path="/" element={<Test></Test>}></Route>
                            <Route exact path="/user1" element={<Matches></Matches>}></Route>
                            <Route exact path="/user2" element={<Standing></Standing>}></Route>
                            <Route exact path="/manager1" element={<SquadPage></SquadPage>}></Route>
                            <Route exact path="/manager2" element={<OfficalPage></OfficalPage>}></Route>
                            <Route exact path="/admin1" element={<TourManage></TourManage>}></Route>
                            <Route exact path="/admin2" element={<TourManageDetail></TourManageDetail>}></Route>

                            <Route exact path="/not-found" element={<NotFound></NotFound>}></Route>
                            <Route exact path="*" element={<Navigate to="/not-found" />} />
                        </Routes>
                    </React.Suspense>

                </div>
            }
        </div>
        //   {/* {!authenticated && <AuthRoutes></AuthRoutes>}
        //   {authenticated && !isAdmin && <AuthenticatedRoutes></AuthenticatedRoutes>}
        //   {authenticated && isAdmin && <AdminRoutes></AdminRoutes>} */}
        // </React.Suspense>
    );
}

export default MainRoutes;
