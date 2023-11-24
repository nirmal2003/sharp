import React, {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {employees_navbar_data} from "../../data/employees/navbar_data";


const EmployeeNavbar = () => {

    const [currentLocation, setCurrentLocation] = useState('');

    const { id } = useParams();

    const location = useLocation();

    useEffect(() => {
        if (location && location.pathname) {
            if (location.pathname.split('/')[2]) setCurrentLocation('/' + location.pathname.split('/')[location.pathname.split('/').length - 1])
            else setCurrentLocation('/');
        }
    }, [location]);


    return (
        <div className="w-full border-b border-b-border-color flex items-center backdrop-blur-2xl sticky top-0 bg-dark-transparent z-10 mb-3" style={{ height: 80 }}>
            <div className="flex flex-col ml-3 h-full justify-between">
                <h2 className="text-gray ml-1 mt-2">Company employees</h2>
                <ul className="flex items-center mt-3">
                    {employees_navbar_data.map((link, index) => (
                        <li key={index}>
                            <Link to={`/employees${link.url}`} className={`mx-1 py-1 px-1.5 hover:bg-light-transparent ${currentLocation === link.url ? 'bg-light-transparent' : ''} text-gray cursor-pointer text-sm`}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EmployeeNavbar;