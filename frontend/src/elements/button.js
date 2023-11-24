import React from "react";

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}
                className="w-full rounded text-very-sm font-light tracking-wider text-light-gray py-3 px-5 bg-popup-border-color mt-5 hover:bg-white hover:text-dark hover:font-semibold duration-300"
        >{text}</button>
    )
}

export default Button;