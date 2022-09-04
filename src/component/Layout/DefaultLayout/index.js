import Header from "./Header";
import Sidebar from "./Silebar";

function DefaultLayout({ children }) {
    return (

        <div>
            <Header />

            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>

    );
}

export default DefaultLayout;