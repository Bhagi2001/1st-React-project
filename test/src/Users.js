import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    {
        id: 1,
        name: 'Kumara',
    },
    {
        id: 2,
        name: 'Kasun'
    }
];

const Users = () => {
    return (
        <Box 
            sx={{ 
                width: 'calc(100% - 100px)',
                margin: '0 auto',
                marginTop: '100px'
            }}
        >
            <UserForm />
            <UsersTable rows={users} />
        </Box>
    );
}

export default Users;
