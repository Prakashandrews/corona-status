import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import image from "../images/pp.jpeg";
import CustomizedTables from './Corona-table';

export default function Dashboard(props) {
    const [user, setUser] = useState([]);

    async function fetchUserData() {
        fetch("https://coronavirus-19-api.herokuapp.com/countries").then(res => res.json()).then(data => setUser(data));
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <React.Fragment>
            <img src={image} width="20%" height="50%" />
            <Container maxWidth="lg" style={{ backgroundColor: 'rgb(240 241 243)', height: '100vh' }}>

                <Box component="span" m={1} color="info.main">
                    {user && user.length > 0 && <CustomizedTables details={user} />}
                </Box>

            </Container>
        </React.Fragment>
    );
}


