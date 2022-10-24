import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./ROUTES";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
    return (
        <Router>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    {ROUTES.map((route, index) => {
                        if (!route.role) {
                            return <Route key={index} path={route.path} element={route.component} />
                        } else {
                            return <Route key={index} path={route.path} element={<ProtectedRoute role={route.role}>{route.component}</ProtectedRoute>} />
                        }
                    })}
                </Routes>
            </Suspense>
        </Router>
    )
}

export default Routing;