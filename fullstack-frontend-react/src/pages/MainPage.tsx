import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getCommon,  } from "../api/controllers/common-controller";

import {
  Box,
  Button,
} from "@mui/material";
import { dataDto } from "../types/common.type";


const MainPage = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState<dataDto>();

  useEffect(() => {
    getCommon()
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch(e => console.log(e))
  }, []);

  return <Box
    sx={{
      width: '1200px',
      m: '0 auto'
    }}
  >
    {data?.name}
    <ul>
      <li>id: {data?.id}</li>
      <li>name: {data?.name}</li>
      <li>age: {data?.age}</li>
    </ul>
    <Button onClick={() => navigate('/second')}>
      Second Page
    </Button>
  </Box>
};

export default MainPage;