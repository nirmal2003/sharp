import React, {useEffect, useState} from "react";
import {project_navbar_data} from "../../../../data/project/project_navbar_data";
import {Link, useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const ProjectNavbar = () => {

    const [currentLocation, setCurrentLocation] = useState('');

    const { id } = useParams();

    const location = useLocation();

    const project = useSelector(state => state.project);


    useEffect(() => {
        if (location && location.pathname) {
            if (location.pathname.split('/')[3]) setCurrentLocation('/' + location.pathname.split('/')[location.pathname.split('/').length - 1])
            else setCurrentLocation('/');
        }
    }, [location]);


    return (
        <div className="w-full border-b border-b-border-color flex items-center backdrop-blur-2xl sticky top-0 bg-dark-transparent z-10 mb-3" style={{ height: 80 }}>
            <div className="w-12 h-12 rounded-full bg-purple flex items-center justify-center ml-3">
                <h4 className="text-white">{project?.name.substr(0, 2)}</h4>
            </div>
            <div className="flex flex-col ml-3 h-full justify-between">
                <h2 className="text-gray ml-1 mt-2">{project?.name}</h2>
                <ul className="flex items-center mt-3">
                    {project_navbar_data.map((link, index) => (
                        <li key={index}>
                            <Link to={`/project/${id}${link.url}`} className={`mx-1 py-1 px-1.5 hover:bg-light-transparent ${currentLocation === link.url ? 'bg-light-transparent' : ''} text-gray cursor-pointer text-sm`}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectNavbar;