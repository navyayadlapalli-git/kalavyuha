import React from "react"
import { TextField } from "@mui/material"

const InputNumberField = ({
    label,
    value,
    onChange,
    placeholder,
    variant = "outlined",
    inputMode = "numeric",
    fullWidth = true,
    maxLength,
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
            maxLength="1"
            InputProps={{
                style: {
                borderRadius: "5px",
                height: "56px",
                backgroundColor: "#F5F5F5",
                },
            }}
            {...props}
        />
    )
}

export default InputNumberField