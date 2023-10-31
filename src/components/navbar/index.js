import { Box, Button, Container, MenuItem } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo.png'
import CommonButton from 'components/commonButton'
export default function Default() {
    return (
        <Box style={{
            position:'fixed',
            top:'0',
            left:'0',
            width:'100%',
            padding:'10px 0px',
            background: 'linear-gradient(to right, rgba(247, 226, 256, 1), rgba(247, 226, 256, 1))',
            zIndex:'9999999'

        }}>
            <Container sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <Box>
                    <img src={logo} alt='logo' />
                </Box>
                <Box sx={{
                    display:'flex'
                }}>
                    <MenuItem>
                        Home
                    </MenuItem>
                    <MenuItem>
                        About
                    </MenuItem>
                    <MenuItem>
                        Portfolio
                    </MenuItem>
                    <MenuItem>
                        Contact
                    </MenuItem>
                </Box>
                <Box>
                    <CommonButton text='Hire Me'/>
                </Box>
            </Container>
        </Box>
    )
}
