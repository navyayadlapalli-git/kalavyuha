import React from "react"
import Button from '@mui/material/Button'
import PropTypes from "prop-types"

const SecondaryButton = ({
    title,
    onClick,
    variant = "text",
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
                color: "#2C5B77",
                borderRadius: "6px",
                textTransform: "none",
                fontWeight: "600",
                fontSize: "16px",
                padding: "0px",
              }}
        >
            {title}
        </Button>
    )
}

SecondaryButton.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["contained", "outlined", "text"]),
    color: PropTypes.oneOf(["primary", "secondary", "success", "error", "info", "warning"]),
    onClick: PropTypes.func,
}

export default SecondaryButton