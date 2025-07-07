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

    const [data, setData] = React.useState<{
        id: number,
        message: string
    }>();

    useEffect(() => {
        getData()
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return <Box
    >
        <Typography>
            {
                data ? data.message : 'server disable'
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