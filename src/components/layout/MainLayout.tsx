import { ReactElement, useEffect } from "react";

import MenuBtn from "./_parts/menuBtn";
import Navbar from "./_parts/navBar";

const MainLayout = ({ children }: { children: ReactElement }) => {
    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key && e.key == "f5") {
                e.preventDefault();
                return false;
            }
        });
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            return false;
        });
    }, []);

    return (
        <>
            <Navbar />
            <main className="h-screen">{children}</main>
            <MenuBtn />
        </>
    );
};

export default MainLayout;
