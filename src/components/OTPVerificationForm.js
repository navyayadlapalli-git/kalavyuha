import React from "react"
import Typography from '@mui/material/Typography'
import PrimaryButton from '../ui/PrimaryButton'
import OTPInput from '../ui/OTPInput'

const OTPVerificationForm = () => {

    return (
        <div className='main-container'>
            <Typography variant='h5' color='primary' sx={{ fontWeight: 'bold' }}>Enter the Code</Typography>
            <div className='otp-text'>
                <Typography variant='subtitle2'>Enter the OTP code that we sent to your phone number +91 **********</Typography>
                <Typography variant='subtitle2'>Be careful not to share the code with anyone.</Typography>
            </div>
            <div className='otp-button'>
                <OTPInput />
            </div>
            <PrimaryButton 
                title="Verify OTP"
                onClick={() => console.log("call otp service")}
            />
            <div className='otp-text'>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>One more step to get started</Typography>
            </div>
        </div>
    )
}

export default OTPVerificationForm