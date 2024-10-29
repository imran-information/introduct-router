import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetail = useLoaderData()
    const { id, body, title } = postDetail
    return (
        <div>
            <h3>Post {id}</h3>
            <h3>{body}</h3>
            <h3>{title}</h3>
        </div>
    );
};

export default PostDetails;