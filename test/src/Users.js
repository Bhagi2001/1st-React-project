import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false); // submission status

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get("http://localhost:3002/api/users")
            .then((response) => {
                setUsers(response.data?.response || []);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    };

    const createUser = (data) => {
        setSubmitted(true); // set submitting to true

        const payload = {
            id: data.id,
            name: data.name
        };

        // backend router expects POST /api/createuser (see Backend/router.js)
        Axios.post("http://localhost:3002/api/createuser", payload)
            .then(() => {
                getUsers();
                setSubmitted(false); // reset submitting
            })
            .catch((error) => {
                console.error("Error adding user:", error);
            });
    };

    return (
        <Box 
            sx={{ 
                width: 'calc(100% - 100px)',
                margin: '0 auto',
                marginTop: '100px'
            }}
        >
            <UserForm 
                createUser={createUser}
                submitted={submitted}
            />
            <UsersTable rows={users} />
        </Box>
    );
}

export default Users;
