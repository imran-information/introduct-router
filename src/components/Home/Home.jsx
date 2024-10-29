import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is Home Components</h1>
            <Outlet></Outlet>
            <footer>This is footer</footer>
        </div>
    );
};

export default Home;