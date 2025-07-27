import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getDataId } from "../../api/controllers/common-controller";
import { Box } from "@mui/material";




const EditData =() => {
    const { id } = useParams();
    const navigate = useNavigate()

    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);

    useEffect(() => {
        if (id) {
            getDataId(+id)
            .then((res) => {
                setName(res.data.name)
                setAge(res.data.name)
            })
            .catch((e) => console.log(e));
        }
        
    }, [id]);

    return <Box>
        asd
    </Box>
}

export default EditData;