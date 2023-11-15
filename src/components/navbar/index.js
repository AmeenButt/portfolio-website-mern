import { Box, Button, Container, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import CommonButton from 'components/commonButton'
export default function Default() {
    const [navColor, setNavColor] = useState(false)
    const changeNavcolor = () => {
        if (window.scrollY > 600) {
            setNavColor(true)
        }
        else {
            setNavColor(false)
        }
    }
    window.addEventListener('scroll', changeNavcolor)
    return (
        <Box style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            padding: navColor ? '5px 0px ' : '10px 0px',
            background: navColor ? 'white' : 'transparent',
            boxShadow: navColor ? '0px 4px 25px 0px rgba(0, 0, 0, 0.10)' : 'none',
            zIndex: '9'

        }}>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <img src={logo} alt='logo' />
                </Box>
                <Box sx={{
                    display: 'flex'
                }}>
                    <MenuItem>
                        <a style={{
                            textDecoration: 'none',
                            color: 'black'
                        }} href='#home'>Home</a>
                    </MenuItem>
                    <MenuItem>
                        <a style={{
                            textDecoration: 'none',
                            color: 'black'
                        }} href='#about'>About</a>
                    </MenuItem>
                    <MenuItem>
                        <a style={{
                            textDecoration: 'none',
                            color: 'black'
                        }} href='#portfolio'>Portfolio</a>

                    </MenuItem>
                    <MenuItem>
                        <a style={{
                            textDecoration: 'none',
                            color: 'black'
                        }} href='#contact'>Contact</a>

                    </MenuItem>
                </Box>
                <Box>
                    <CommonButton text='Hire Me' />
                </Box>
            </Container>
        </Box>
    )
}
