import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { numInArray } from "../ultis/ultis";

const ProtectedRoute = ({ children, role }) => {
    const { user } = useSelector(state => state.user)
    const isAuthen = user.id > 0 ? true : false
    const funCheck = (arr1, arr2) => {
        if (arr1) {
            const rs = [arr1]?.map((el) => {
                if (typeof (arr2) === 'string') return numInArray(el, [arr2])
                return numInArray(el, [...arr2])
            })
            return numInArray(true, rs)
        }
        return false
    }
    if (!isAuthen) {
        return <Navigate to="/" replace />;
    }
    else {
        if (!funCheck(user.role, role)) return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoute;