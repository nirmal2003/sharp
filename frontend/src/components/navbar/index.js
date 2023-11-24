import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-14 flex justify-between items-center bg-black-transparent z-10 border-b border-b-border-color backdrop-blur fixed top-0 left-0">
            <div className="relative mb-11 ml-4">
                <section className="w-8 h-8 bg-light-gray absolute"></section>
                <section className="w-8 h-8 bg-white absolute mt-2 ml-2 flex justify-center items-center">
                    <h2>S</h2>
                </section>
            </div>
            <div className="mr-4 w-10 h-10 bg-purple flex items-center justify-center rounded-full">
                <h4 className="text-white">NS</h4>
            </div>
        </div>
    )
}

export default Navbar;