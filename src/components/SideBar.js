import React from 'react'
import { useLocation } from 'react-router-dom'
import PlayDisabledIcon from '@mui/icons-material/PlayDisabled'
import Typography from '@mui/material/Typography'
import SecondaryButton from '../ui/SecondaryButton'
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined'
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined'

const SideBar = () => {
    const location = useLocation()
    const isAuth = location.pathname.includes('/otpVerify')
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="icon-text">
                    <PlayDisabledIcon color='primary' fontSize="large" />
                    <Typography variant='h6' color='primary' sx={{ fontWeight: 'bold' }}>Kalavyuha</Typography>
                </div>
                <div>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Chat with us</Typography>
                    <Typography variant='subtitle2' component="span">Speak to our friendly team via live chat.</Typography>
                </div>
                <div>
                    <div className='row-content'>
                        <InsertCommentOutlinedIcon />
                        <SecondaryButton
                            title="Start live chat"
                            onClick={() => console.log("initiate chat connection")}
                        />
                    </div>
                    <div className='row-content'>
                        <MarkAsUnreadOutlinedIcon />
                        <SecondaryButton
                            title="Shoot us an email"
                            onClick={() => console.log("call notification service")}
                        />
                    </div>
                </div>
                {isAuth && 
                    <div>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Your Details</Typography>
                        <div className='row-content'>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Full name:</Typography>
                            <Typography variant='body2'>Navya Yadlapalli</Typography>
                        </div>
                        <div className='row-content'>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Email:</Typography>
                            <Typography variant='body2'>navya.yadlapalli2000@gmail.com</Typography>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default SideBar