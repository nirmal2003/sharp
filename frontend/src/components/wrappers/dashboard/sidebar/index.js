import React, {useEffect, useRef, useState} from "react";
import {sidebar_links} from "../../../../data/sidebar";
import {Link} from "react-router-dom";
import SelectProject from "./select_project";

const Sidebar = () => {

    const [openProjects, setOpenProjects] = useState(false);
    const selectProjectsRef = useRef(null);

    const handleClickOutside = (event) => {
        if (selectProjectsRef.current && !selectProjectsRef.current.contains(event.target)) setOpenProjects(false);
    }

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);


    return (
        <div className="sidebar fixed top-0 w-20 min-h-screen bg-dark-transparent z-50 border-r border-r-border-color backdrop-blur-2xl">
            <div className="select_project cursor-pointer mt-6 ml-3 flex items-center py-1 px-2 hover:bg-light-transparent mr-3 rounded relative" ref={selectProjectsRef}>
                <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center text-white" onClick={() => setOpenProjects(!openProjects)}>P</div>
                {/*<h4 className="text-white ml-2" onClick={() => setOpenProjects(!openProjects)}>Project 01 - social...</h4>*/}
                {openProjects && (
                    <SelectProject onClose={() => setOpenProjects(false)} />
                )}
            </div>
            <div style={{ width: '100%', marginTop: '15px' }}>
                <div style={{ width: 'calc(100% - 20px)', height: '1px', backgroundColor: 'rgba(255, 255, 255,0.1)', margin: 'auto' }}></div>
            </div>
            <div>
                <ul className="w-20 flex flex-col justify-center align-center">
                    {sidebar_links.map((link, index) => (
                        <li key={index} className="flex justify-center items-center">
                            <Link to={link.url} className="flex justify-center items-center w-5 h-8 hover:bg-light-transparent px-2 py-1.5 m-3 rounded" style={{ width: 'fit-content' }}>
                                <img src={link.image} alt={link.name} className="w-5" />
                                {/*<p className="text-light-gray ml-3 text-sm">{link.name}</p>*/}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;