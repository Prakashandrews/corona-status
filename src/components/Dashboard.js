import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Filter from './Filter';

export default function Dashboard(props) {
    const [user, setUser] = useState([]);

    async function fetchUserData() {
        fetch("https://coronavirus-19-api.herokuapp.com/countries").then(res => res.json()).then(data => {            
            return setUser(data.splice(1, data.length))
        });
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <React.Fragment>
            {/* <img src={image} alt="friends" width="20%" height="50%" /> */}
            <Container maxWidth="lg" style={{ backgroundColor: 'rgb(240 241 243)', height: '100%', minHeight: '100%' }}>

                <Box component="span" m={1} color="info.main">
                    {/* {user && user.length > 0 && <CustomizedTables details={user} />} */}
                    {user && user.length > 0 && <Filter details={user} />} 
                </Box>

            </Container>
        </React.Fragment>
    );
}


