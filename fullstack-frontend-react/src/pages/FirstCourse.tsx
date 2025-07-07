import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../api/controllers/course-controller";




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






}