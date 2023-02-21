import { useEffect, useState } from "react";
import { getVersion } from "@tauri-apps/api/app";

const Navbar = () => {
    const [appVersion, setAppVersion] = useState("...");

    useEffect(() => {
        const AppVerHandler = async () => {
            const returnAppVersion = await getVersion();
            setAppVersion(returnAppVersion);
        };
        AppVerHandler();
    }, []);

    return (
        <div className="w-full z-10 bg-shiftcodePurple text-white px-2 py-2 flex fixed">
            <span className="font-light text-sm my-auto">
                Version: {appVersion}
            </span>

            <div className="ml-auto font-bold">TReact - ShiftCode</div>
        </div>
    );
};

export default Navbar;
