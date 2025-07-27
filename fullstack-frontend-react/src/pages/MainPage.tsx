import { useNavigate } from "react-router-dom";


import {
    Box,
    Button,
    Typography
} from "@mui/material";

const MainPage = () => {
    const navigate = useNavigate();

    return <Box
    >
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