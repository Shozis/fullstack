import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { deleteDataId, getData,  } from "../api/controllers/common-controller";

import {
  Box,
  Button,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import { dataMain } from "../types/common.type";


const MainPage = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState<dataMain[]>();

  useEffect(() => {
    getData()
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch(e => console.log(e))
  }, []);

     return <Box
        sx={{
            width: '900px',
            m: '0 auto'
        }}
    >
        <Button
            variant='contained'
            color='success'
            onClick={() => navigate('/change-backend/new/')}
            sx={{
                my: 1
            }}
        >
            Создать новую запись
        </Button>
        <List>
            {
                data?.map((item, key) => (
                    <ListItem
                        key={`listItem-${key}`}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            border: '1px solid #007dea'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Typography
                                component={'h3'}
                            >
                                Имя: {item.name}
                            </Typography>
                            <Typography
                                component={'h4'}
                            >
                                Возраст: {item.age}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Button
                                color='info'
                                variant='contained'
                                onClick={() => navigate(`/change-backend/edit/${item.id}`)}
                            >
                                Изменить
                            </Button>
                            <Button
                                color='error'
                                variant='contained'
                                onClick={() => deleteDataId(Number(item.id))}
                                sx={{
                                    mt: 1
                                }}
                            >
                                Удалить
                            </Button>
                        </Box>
                    </ListItem>
                ))
            }
        </List>
    </Box>
}


export default MainPage;