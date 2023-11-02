import { Box, Button, Container, MenuItem } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo.png'
import CommonButton from 'components/commonButton'
export default function Default() {
    return (
        <Box style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            padding: '10px 0px',
            background: 'linear-gradient(to right, rgba(247, 226, 256, 1), rgba(247, 226, 256, 1))',
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
