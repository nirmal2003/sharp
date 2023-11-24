import React from "react";
import ProjectMemberProfileTaskList from "./task_list";
import ProjectMemberProfileRecentProject from "./recent_projects";

const ProjectMemberProfile = () => {
    return (
        <div className="w-fit container mx-16 px-3 mt-9">
            <div className="flex items-end ml-8 justify-between" style={{ width: '800px' }}>
                <div className="flex items-center">
                    <div className="w-24 h-24 rounded-full bg-purple flex items-center justify-center">
                        <h3 className="text-gray text-2xl font-bold">NS</h3>
                    </div>
                    <div className="flex flex-col ml-5">
                        <h2 className="text-xl text-gray">Nirmal salinda</h2>
                        <p className="mt-2 text-sm text-gray font-light">Backend developer</p>
                    </div>
                </div>
                <div>
                    <button className="bg-purple text-sm text-white py-1.5 px-2.5 rounded cursor-pointer">Edite profile</button>
                </div>
            </div>
            <div className="mt-11 overflow-x-auto pb-10">
                <ProjectMemberProfileTaskList />
                <ProjectMemberProfileRecentProject />
            </div>
        </div>
    )
}

export default ProjectMemberProfile;