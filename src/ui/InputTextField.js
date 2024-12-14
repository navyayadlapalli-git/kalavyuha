import React from "react"
import { TextField } from "@mui/material"

const InputTextField = ({
    label,
    value,
    onChange,
    placeholder,
    variant = "outlined",
    fullWidth = true,
    ...props
  }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            variant={variant}
            fullWidth={fullWidth}
            InputProps={{
                style: {
                borderRadius: "8px",
                height: "35px",
                backgroundColor: "#F5F5F5",
                },
            }}
            {...props}
        />
    )
}

export default InputTextField