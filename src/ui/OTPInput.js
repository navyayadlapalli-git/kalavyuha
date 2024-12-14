import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

const OTPInput = ({ length = 6, onComplete }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''))
    const inputRef = useRef([])

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        if(value) {
            const newOTP = [...otp]
            newOTP[index] = value
            setOtp(newOTP)

            if(index < length - 1) {
                inputRef.current[index + 1].focus()
            }
            if (newOTP.every((val) => val.length > 0) && onComplete) {
                onComplete(newOTP.join(''))
            }
        }
    }

    const handleKeyDown = (e, index) => {
        if(e.key === 'Backspace') {
            const newOtp = [...otp]
            newOtp[index] = '' // Clear the current box
            setOtp(newOtp)
      
            // Move focus to the previous input
            if (index > 0) {
              inputRef.current[index - 1].focus()
            }
        }
    }

    const handleFocus = (e) => e.target.select()

    return (
        <div className='otp-input-container'>
            {otp.map((x, i) => (
                <input
                    key={i}
                    type='text'
                    maxLength='1'
                    value={otp[i]}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    onFocus={handleFocus}
                    ref={(ref) => (inputRef.current[i] = ref)}
                    className='otp-input'
                />
            ))}
        </div>
    )
}


OTPInput.prototype = {
    length: PropTypes.number,
    onComplete: PropTypes.func,
}

export default OTPInput