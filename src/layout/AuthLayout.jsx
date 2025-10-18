import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
      <div className="bg-base-200 min-h-screen">
        <header className="w-11/12 mx-auto py-3 sticky top-0 h-fit">
          <Navbar />
        </header>

        <main className="w-11/12 mx-auto py-5">
        <Outlet/>
        </main>
      </div>
    );
};

export default AuthLayout;