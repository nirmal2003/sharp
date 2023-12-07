import React, {useEffect, useState} from "react";
import Member from "./member";
import axios_config from "../../../../utils/axios_config";
import {useSelector} from "react-redux";

const MemberList = ({memberList}) => {

    return (
        <div className="container mt-9">
            <ul className="flex flex-wrap">
                {memberList?.map(member =>  (
                    <Member key={member.id} data={member} />
                ))}
            </ul>
        </div>
    )
}

export default MemberList;