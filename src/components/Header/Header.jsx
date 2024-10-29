import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>

            <nav >
                <Link style={{ marginRight: '15px' }} to="/">Home</Link>
                <Link style={{ marginRight: '15px' }} to="/about">About</Link>
                <Link style={{ marginRight: '15px' }} to="/contract">contract</Link>
                <Link style={{ marginRight: '15px' }} to="/users">Users</Link>
                <Link style={{ marginRight: '15px' }} to="/posts">Posts</Link>
            </nav>

        </div>
    );
};

export default Header;