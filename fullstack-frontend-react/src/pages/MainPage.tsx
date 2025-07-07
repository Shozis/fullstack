import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getData } from "../api/controllers/common-controller";

import {
    Box,
    Button,
    Typography
} from "@mui/material";

const MainPage = () => {
    const navigate = useNavigate();

    const [data, setData] = React.useState();

    useEffect(() => {
        getData()
            .then((response) => {
                console.log(response);
                setData(response.data.message);
            })
            .catch((e) => console.log(e));
    }, []);

    return <Box
    >
        <Typography>
            {
                data ? data : 'server disable'
            }
        </Typography>
        <Button
            variant='contained'
            color='primary'
            onClick={() => navigate('/Journal')}
            >
            Journal
        </Button>
    </Box>
}


export default MainPage;