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
        <UserForm />
    );
}

export default Users;
