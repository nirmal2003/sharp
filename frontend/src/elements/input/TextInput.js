import React, {useState} from "react";

const TextInput = ({ _setValue, placeHolder }) => {
    const [value, setValue] = useState("");

    const handle_changes = (val) => {
        setValue(val);
        _setValue(val);
    }

    return (
        <input
            type="text"
            placeholder={placeHolder}
            className="w-full rounded text-very-sm font-light tracking-wider text-light-gray py-3 px-5 bg-popup-border-color border border-border-color"
            onChange={(event) => handle_changes(event.target.value)}
            value={value}
        />
    )
}

export default TextInput;