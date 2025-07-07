import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getData } from "../api/controllers/common-controller";

import { dataMain } from "../types/common.type";

import { Box, Button } from "@mui/material";



const Journal = () => {

    const navigate = useNavigate();

    return <Box>
        <Button
        variant='contained'
            color='primary'
            onClick={() => navigate('/')}
        >
            1 курс
        </Button>
                <Button
        variant='contained'
            color='primary'
            onClick={() => navigate('/')}
        >
            2 курс
        </Button>
                <Button
        variant='contained'
            color='primary'
            onClick={() => navigate('/')}
        >
            3 курс
        </Button>
                <Button
        variant='contained'
            color='primary'
            onClick={() => navigate('/')}
        >
            4 курс
        </Button>
        
    </Box>
}

export default Journal;