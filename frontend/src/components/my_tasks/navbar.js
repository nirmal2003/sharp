import React, {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {my_tasks_navbar_data} from "../../data/my_task_navbar";

const MyTasksNavbar = () => {

    const [currentLocation, setCurrentLocation] = useState('');

    const location = useLocation();

    useEffect(() => {
        if (location && location.pathname) {
            if (location.pathname.split('/')[2]) setCurrentLocation('/' + location.pathname.split('/')[location.pathname.split('/').length - 1])
            else setCurrentLocation('/');
        }
    }, [location]);

    return (
        <div className="w-full h-16 border-b border-b-border-color flex items-center sticky top-14 bg-dark-transparent z-10 backdrop-blur">
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center ml-3">
                <h4 className="text-white">P1</h4>
            </div>
            <div className="flex flex-col ml-3 h-full justify-between">
                <h2 className="text-gray ml-1 mt-1">Project 01</h2>
                <ul className="flex items-center mt-1">
                    {my_tasks_navbar_data.map((link, index) => (
                        <li key={index}>
                            <Link to={`/my_tasks${link.url}`} className={`mx-1 py-1 px-1.5 hover:bg-light-transparent ${currentLocation === link.url ? 'bg-light-transparent' : ''} text-gray cursor-pointer text-sm`}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MyTasksNavbar;