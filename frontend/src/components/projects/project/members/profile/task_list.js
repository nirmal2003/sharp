import React from "react";

const ProjectMemberProfileTaskList = () => {
    return (
        <div className="w-fit border border-border-color rounded-lg">
            <div className="px-4 py-2 w-96 bg-light-transparent rounded-tl-lg rounded-tr-lg" style={{ width: '850px' }}>
                <h3 className="text-gray">Tasks</h3>
            </div>
            <ul className="flex flex-col p-2">
                <li className="flex items-center p-2 border-b border-b-border-color justify-between border-t border-t-transparent hover:border-t-border-color py-3">
                    <div className="flex items-center">
                        <img src="/images/icons/my_tasks.svg" alt="complete" className="w-4 cursor-pointer hover:brightness-125" />
                        <p className="text-sm text-white ml-2 font-light tracking-wide">First task of the task list</p>
                    </div>
                    <span className="text-sm text-gray">jul 21 - 25</span>
                </li>
                <li className="flex items-center p-2 border-b border-b-border-color justify-between border-t border-t-transparent hover:border-t-border-color py-3">
                    <div className="flex items-center">
                        <img src="/images/icons/my_tasks.svg" alt="complete" className="w-4 cursor-pointer hover:brightness-125" />
                        <p className="text-sm text-white ml-2 font-light tracking-wide">First task of the task list</p>
                    </div>
                    <span className="text-sm text-gray">jul 21 - 25</span>
                </li>
                <li className="flex items-center p-2 border-b border-b-border-color justify-between border-t border-t-transparent hover:border-t-border-color py-3">
                    <div className="flex items-center">
                        <img src="/images/icons/my_tasks.svg" alt="complete" className="w-4 cursor-pointer hover:brightness-125" />
                        <p className="text-sm text-white ml-2 font-light tracking-wide">First task of the task list</p>
                    </div>
                    <span className="text-sm text-gray">jul 21 - 25</span>
                </li>
                <li className="flex items-center p-2 border-b border-b-border-color justify-between border-t border-t-transparent hover:border-t-border-color py-3">
                    <div className="flex items-center">
                        <img src="/images/icons/my_tasks.svg" alt="complete" className="w-4 cursor-pointer hover:brightness-125" />
                        <p className="text-sm text-white ml-2 font-light tracking-wide">First task of the task list</p>
                    </div>
                    <span className="text-sm text-gray">jul 21 - 25</span>
                </li>
            </ul>
        </div>
    )
}

export default ProjectMemberProfileTaskList;