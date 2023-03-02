import { Outlet } from "react-router-dom";
import  Header from "../components/Header";


 const MainLayouts: React.FC = () => {
    return (

        <div className="wrapper">
            <div className="header">
                <Header />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>


    );


}

export default MainLayouts;
