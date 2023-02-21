import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { MdOutlinePreview } from "react-icons/md";

const ListItem = ({ title }: { title: string }) => {
    const [statusBasedStyle, setStatusBasedStyle] = useState("bg-white");

    return (
        <>
            <div
                className={
                    statusBasedStyle +
                    " py-4 px-2 border rounded-md w-full mx-auto shadow-md border-slate-300 flex max-w-7xl"
                }
            >
                <span className="my-auto ml-2">{title}</span>

                <button
                    type="button"
             
                    className="ml-auto mr-2 border flex border-slate-300 bg-gray-100 px-2 py-1 rounded-md w-10 h-10"
                >
                    <span className="m-auto text-lg">
                        <AiOutlineReload />
                    </span>
                </button>

                {statusBasedStyle !== "bg-red-100" &&
                    statusBasedStyle !== "bg-blue-100 animate-pulse" &&
                    statusBasedStyle !== "bg-white" && (
                        <button
                            type="button"
                      
                            className="mr-2 border flex border-slate-300 bg-gray-100 px-2 py-1 rounded-md w-10 h-10"
                        >
                            <span className="m-auto text-2xl">
                                <MdOutlinePreview />
                            </span>
                        </button>
                    )}
                <a
                    href={`#`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-1 border flex border-slate-300 bg-gray-100 px-2 py-1 rounded-md w-10 h-10"
                >
                    <span className="m-auto text-2xl">
                        <GoBrowser />
                    </span>
                </a>
            </div>
        </>
    );
};

export default ListItem;
