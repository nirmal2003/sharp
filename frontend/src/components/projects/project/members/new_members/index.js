import React from "react";
import NewMemberList from "./member_list";

const NewMembers = ({open, onClose, setMember, memberList}) => {
    return (
        <div className="w-full h-screen bg-black-transparent absolute top-0 left-0 overflow-x-hidden" style={{ zIndex: open ? 50 : -1 }}>
            <div className="w-3/6 h-screen bg-dark absolute top-0 z-30 drop-shadow-xl window_box_shadow overflow-x-hidden transition-all" style={{ right: open ? '0' : '-51%' }}>
                <div className="flex items-center justify-between px-4 py-5 border-b border-border-color">
                    <h2 className="text-white text">Employees</h2>
                    <img src="/images/icons/close.svg" alt="close" onClick={onClose} className="w-7 cursor-pointer hover:brightness-150" />
                </div>
                <NewMemberList setMember={setMember} memberList={memberList} />
            </div>
        </div>
    )
}

export default NewMembers;