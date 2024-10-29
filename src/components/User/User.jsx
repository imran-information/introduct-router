import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid green',
        padding: '20px',
        borderRadius: '15px'

    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <Link to={`/user/${id}`}>Details</Link>
        </div>
    );
};

export default User;