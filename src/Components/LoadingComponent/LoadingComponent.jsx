import React from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingComponent = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <CircularProgress />
            </Box>
        </>
    )
}

export default LoadingComponent;