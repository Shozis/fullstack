import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getData, deleteDataId } from "../api/controllers/common-controller";

import { dataMain } from "../types/common.type";
import { Box, Button, List, ListItem, Typography } from "@mui/material";




const FirstCourse = () => {
    const navigate = useNavigate();

    const [data, setData] = React.useState<dataMain[]>();

    useEffect(() => {
        getData()
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return <Box>

    <List
    sx={{
        width: '400px',
        display: 'flex',
    }}>
        {data?.map((item, key) => (
        <ListItem
        key={`listItem-${key}`}
        sx={{
            border: '1px solid #111111',
            margin: 'auto 10px 0 10px'
        }}>

            <Box
            sx={{
                width: '150px',
                display: 'flex',
                flexDirection: 'column',
                
            }}>
                <Typography
                sx={{
                    marginBottom: '5px'
                }}>
            Имя: {item.name}
                </Typography>
                <Typography 
                sx={{
                    marginBottom: '20px'
                }}>
            возраст: {item.age}
                </Typography>

                
            <Button
            sx={{
                    marginBottom: '5px'
                }}
            color="info"
            variant='contained'
            onClick={() => navigate('/Edit')}>
                изменить
            </Button>

            <Button
                color="warning"
                variant="outlined"
                onClick={() => deleteDataId(Number(item.id))}>
                    Удалить
            </Button>
            </Box>

        </ListItem>
        ))
    }
    </List>

    </Box>


}

export default FirstCourse;