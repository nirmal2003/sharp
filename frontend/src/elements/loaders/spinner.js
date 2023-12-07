import React from "react";
import {CircularProgress} from "@mui/material";


const SpinLoader = () => {
    return (
        <div role="status">
            <CircularProgress
                sx={{
                    color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                }}
                size={40}
                thickness={4}
                value={100}
                disableShrink={false}
            />
        </div>
    )
}

export default SpinLoader;