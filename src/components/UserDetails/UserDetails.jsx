import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userDetail = useLoaderData();
    const { id, name, email } = userDetail


    return (
        <div>
            <h3>User Details:  {id}</h3>
            <h3>  {name}</h3>
            <h3>  {email}</h3>
        </div>
    );
};

export default UserDetails;