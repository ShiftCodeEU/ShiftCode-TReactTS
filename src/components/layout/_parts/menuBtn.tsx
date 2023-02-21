import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBuildingBridge2 } from "react-icons/tb";

const MenuBtn = () => {
    const [ShowMenu, setShowMenu] = useState(false);

    const ShowMenuHanlder = () => {
        setShowMenu(!ShowMenu);
    };

    const handleOnClick = async () => {
        console.log("clicked")
    }; 

    return (
        <>
            <div data-dial-init className="fixed bottom-6 right-6 group">
                <div
                    id="speedDialMenu"
                    className={`flex-col mb-4 space-y-2 rounded-xl w-full items-center ${
                        ShowMenu ? "flex" : "hidden"
                    }`}
                >
                    <button
                        type="button"
                        onClick={handleOnClick}
                        className="relative w-[52px] h-[52px] text-gray-900 bg-shiftcodePurple hover:bg-gray-800 rounded-full border border-gray-200 hover:text-gray-900 hover:shadow-lg shadow-sm focus:outline-none"
                    >
                        <div className="w-full h-full flex mx-auto mt-px text-gray-200 text-3xl">
                            <TbBuildingBridge2 className="m-auto" />
                        </div>
                        <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 -left-28 top-1/2">
                            item 1
                        </span>
                    </button>
                </div>
                <button
                    type="button"
                    data-dial-toggle="speedDialMenu"
                    aria-controls="speedDialMenu"
                    aria-expanded="false"
                    onClick={ShowMenuHanlder}
                    className="flex items-center justify-center text-white bg-shiftcodePurple rounded-full text-2xl w-14 h-14 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                >
                    <GiHamburgerMenu />
                    <span className="sr-only">Open actions menu</span>
                </button>
            </div>
        </>
    );
};

export default MenuBtn;
