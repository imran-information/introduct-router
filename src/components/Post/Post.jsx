import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, body, title } = post
    const postStyle = {
        border: '2px solid green',
        padding: '20px',
        borderRadius: '15px'

    }

    return (
        <div style={postStyle}>
            <h2>Post {id}</h2>
            <h3>{body}</h3>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Post details</Link>
        </div>
    );
};

export default Post;