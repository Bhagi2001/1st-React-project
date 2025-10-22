import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false); // submission status
    const [selectedUser, setselectedUser] = useState({});
    const [isEdit, setisEdit] = useState(false);

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

    const addUser = (data) => {
        setSubmitted(true); // set submitting to true

        const payload = {
            id: data.id,
            name: data.name,
        };

        // backend router expects POST /api/createuser (see Backend/router.js)
        Axios.post("http://localhost:3002/api/createuser", payload)
            .then(() => {
                getUsers();
                setSubmitted(false); // reset submitting
                isEdit(false);
            })
            .catch((error) => {
                console.error("Error adding user:", error);
            });
    };

    const updateUser = (data) => {
        setSubmitted(true); // set submitting to true

        const payload = {
            id: data.id,
            name: data.name,
        };

        // backend router expects POST /api/updateuser (see Backend/router.js)
        Axios.post("http://localhost:3002/api/updateuser", payload)
            .then(() => {
                getUsers();
                setSubmitted(false); // reset submitting
                isEdit(false);
            })
            .catch((error) => {
                console.error("Error adding user:", error);
            });
    };

    const deleteUser = (data) =>{
        Axios.post("http://localhost:3002/api/deleteuser", data)
            .then(() => {
                getUsers();
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
                addUser={addUser}
                updateUser={updateUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable 
                rows={users} 
                selectedUser={data => {
                    setselectedUser(data);
                    setisEdit(true);
                }}
                deleteUser={data => window.confirm('Are you sure?') && deleteUser(data)}
            />
        </Box>
    );
}

export default Users;
