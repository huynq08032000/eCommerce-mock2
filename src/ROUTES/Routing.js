import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./ROUTES";

const Routing = () => {
    return(
        <Router>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    {ROUTES.map((route,index)=>{
                        return <Route key={index} path={route.path} element={route.component}/>
                    })}
                </Routes>
            </Suspense>
        </Router>
    )
}

export default Routing;