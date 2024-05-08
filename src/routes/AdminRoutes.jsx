import * as React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import UserPage from "../pages/ManagerPage";

function AdminRoutes() {
    return (
            <Route exact path="/adminPage" element={<UserPage></UserPage>}></Route>
    );
}

export default AdminRoutes;
