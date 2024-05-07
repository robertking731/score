import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserPage from "../pages/UserPage";

function CommonRoutes() {
    return (
        <Routes>
            <Route path="/" element={<UserPage></UserPage>}></Route>
            {/* <Route path="/login" element={<Login></Login>}></Route> */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
    );
}

export default CommonRoutes;
