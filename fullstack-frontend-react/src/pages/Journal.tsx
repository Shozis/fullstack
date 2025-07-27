import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";



const Journal = () => {

    const navigate = useNavigate();

    return <Box>
        <Button
        variant='contained'
            color='primary'
            onClick={() => navigate('/first')}
        >
            1 курс
        </Button>
    </Box>
}

export default Journal;