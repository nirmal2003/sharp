import React from "react";

const Popup = ({ children, onClose, title }) => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 z-20 flex justify-center items-center">
            <div className="w-screen h-screen bg-black-transparent fixed top-0 left-0 z-20 cursor-default"></div>
            <div className="popup bg-popup-background-color z-30 rounded-md border-2 border-popup-border-color cursor-default">
                <div className="head flex justify-between items-center p-2 border-b-2 border-popup-border-color">
                    <h4 className="text-sm text-light-gray ml-2">{title}</h4>
                    <img src="/images/icons/close.svg" alt="close" className="w-7 cursor-pointer hover:brightness-150" onClick={onClose} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Popup;