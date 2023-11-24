import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {InputBase, styled} from "@mui/material";


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        width: 150,
        borderRadius: 4,
        position: 'relative',
        backgroundColor: "rgba(255,255,255,0.05)",
        border: '1px solid rgba(255,255,255,0.05)',
        fontSize: 12,
        outline: 'none',
        padding: '5px',
        color: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            outline: 'none',
            borderRadius: 4,
            borderColor: 'rgba(255,255,255,0.05)',
        },
    },
}));


const SelectTag = ({data}) => {
    return (
        <Select
            value={name}
            onChange={(event) => setName(event.target.value)}
            defaultValue={name}
            input={<BootstrapInput />}
            inputProps={{'aria-label': 'Without label'}}
        >
            {data?.map((item, index) => (
                <MenuItem value={item} key={index}>{item}</MenuItem>
            ))}
        </Select>
    )
}

export default SelectTag;