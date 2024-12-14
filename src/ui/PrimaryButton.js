import React from "react"
import Button from '@mui/material/Button'
import PropTypes from "prop-types"

const PrimaryButton = ({
    title,
    onClick,
    variant = "contained",
    color = "primary",
    ...props
}) => {
    return (
        <Button
            variant={variant} 
            color={color} 
            onClick={onClick}
            {...props} 
            sx={{
                backgroundColor: "#2C5B77",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#1E3F55"
                },
                borderRadius: "6px",
                textTransform: "none",
                fontWeight: "600",
                width: "45%",
                fontSize: "20px",
                padding: "0px",
              }}
        >
            {title}
        </Button>
    )
}

PrimaryButton.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["contained", "outlined", "text"]),
    color: PropTypes.oneOf(["primary", "secondary", "success", "error", "info", "warning"]),
    onClick: PropTypes.func,
}

export default PrimaryButton