import Flags from "react-world-flags"

export const CountryOptions = [
    {
        value: "+91",
        label: (
            <div style={{ display: "flex", alignItems: "center" }}>
                <Flags code="IN" className='menu-flag' />
            </div>
        ),
    },
    {
        value: "+1",
        label: (
            <div style={{ display: "flex", alignItems: "center" }}>
                <Flags code="US" className='menu-flag' />
            </div>
        ),
    },
    {
        value: "+34",
        label: (
            <div style={{ display: "flex", alignItems: "center" }}>
                <Flags code="ES" className='menu-flag' />
            </div>
        ),
    },
]
