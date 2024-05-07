import React,{useState, useEffect} from "react";
import { useSelector } from "react-redux";

// import Loading from "../pages/Landing";
import CommonRoutes from "./CommonRoutes";

import Landing from "../pages/Landing";
import Appbar from "../components/Layout/Appbar"
// import AuthRoutes from "./AuthRoutes.jsx";

// const AuthenticatedRoutes = React.lazy(() =>
//   import("./AuthenticatedRoutes.jsx")
// );
// const AdminRoutes = React.lazy(() => import("./AdminRoutes"));

function MainRoutes() {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 2000);
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
                    <Appbar></Appbar>
                    <CommonRoutes></CommonRoutes>
                </div>
            }
        </div>
        // <React.Suspense fallback={<Loading></Loading>}>
        //   {/* {!authenticated && <AuthRoutes></AuthRoutes>}
        //   {authenticated && !isAdmin && <AuthenticatedRoutes></AuthenticatedRoutes>}
        //   {authenticated && isAdmin && <AdminRoutes></AdminRoutes>} */}
        // </React.Suspense>
    );
}

export default MainRoutes;
