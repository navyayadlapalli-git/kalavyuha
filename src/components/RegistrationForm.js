import React, { useState } from 'react'
import Select, { components } from "react-select"
import Flags from "react-world-flags"
import Typography from '@mui/material/Typography'
import PrimaryButton from '../ui/PrimaryButton'
import SecondaryButton from '../ui/SecondaryButton'
import InputTextField from '../ui/InputTextField'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'
import Checkbox from '@mui/material/Checkbox'
import { CountryOptions } from '../utils/CountryOptions'

const CustomDropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <div>▼</div>
        </components.DropdownIndicator>
    )
}

const RegistrationForm = () => {
    const [selectedCountry, setSelectedCountry] = useState({
        value: "+91",
        label: (
            <div className='selected-flag'>
                <Flags code="IN" className='menu-flag' />
            </div>
        ),
    })

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption)
    }

    return (
        <div className='main-container'>
            <div>
                <Typography variant='h5' color='primary' sx={{ fontWeight: 'bold' }}>Create an Account :)</Typography>
                <Typography variant='subtitle2' component="span">Let's get started your 90 days free trial</Typography>
            </div>
            <div className='textField'>
                <div className='nameField'>
                    <InputTextField
                        placeholder="First Name"
                        type="text"
                        onChange={() => {}}
                    />
                    <InputTextField
                        placeholder="Last Name"
                        type="text"
                        onChange={() => {}}
                    />
                </div>
                <InputTextField 
                    placeholder="Enter your EmailId"
                    type="email"
                    onChange={() => {}}
                />
                <div>
                    <div className='row-content'>
                        <Select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            options={CountryOptions}
                            components={{ DropdownIndicator: CustomDropdownIndicator }}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minWidth: "80px",
                                    borderRadius: "8px",
                                    height: "35px",
                                    backgroundColor: "#F5F5F5",
                                }),
                            }}
                        />
                        <InputTextField
                            placeholder="Enter Phone Number"
                            type="phone"
                            onChange={() => {}}
                        />
                    </div>
                    <Typography variant='caption'>We will send verification number to +91 **********</Typography>
                </div>
                <div>
                    <InputTextField
                        placeholder="Enter your password"
                        type="password"
                        onChange={() => {}}
                    />
                    <div className='check-box-text'>
                        <Checkbox size="small" sx={{padding: '0px 8px 0px 0px'}} />
                        <Typography variant='caption' sx={{ fontWeight: 'bold' }}>Yes, I understand and agree to the Kalavyuha. Terms of services </Typography>
                    </div>
                </div>
            </div>
            <PrimaryButton 
                title="Create Account"
                onClick={() => console.log("call register service")}
            />
            <div className='hrRow'>
                <div className='hrLine'></div>
                <div className='hrOr'>or</div>
                <div className='hrLine'></div>
            </div>
            <div className='row-content'>
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>Already have an account?</Typography>
                <SecondaryButton 
                    title="Sign In"
                    onClick={() => console.log("call login service")}
                />
            </div>
            <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                className='google-button'
                onClick={() => console.log("call google API's")}
            >
                Continue with Google
            </Button>
        </div>
    )
}

export default RegistrationForm