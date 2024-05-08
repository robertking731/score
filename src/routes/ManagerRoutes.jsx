import * as React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ManagerPage from "../pages/ManagerPage";

function ManagerRoutes() {
    return (
        <Routes>
            <Route exact path="/teamManagerPage" element={<ManagerPage></ManagerPage>}></Route>
        </Routes>
    );
}

export default ManagerRoutes;
