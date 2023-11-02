import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Text from 'components/commonTypography'
import logo from 'assets/logo.png'
import { Phone, Email, GitHub, Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
export default function Default() {
    return (
        <Box sx={{
            padding: '50px 0px',
            backgroundColor: 'rgba(0,0,0,0.8)'
        }}>
            <Container>
                <Grid container>
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                        <Box sx={{ display: 'inline-flex' }}>
                            <Email sx={{
                                color: 'white',
                                marginRight: '10px'
                            }} /><Text
                                text='ameenullahkhalid1@gmail.com'
                                size='16px'
                                color='white'
                            />
                        </Box><br /><br />
                        <Box sx={{ display: 'inline-flex' }}>
                            <Phone sx={{
                                color: 'white',
                                marginRight: '10px'
                            }} /><Text
                                text='+92 349 9703431'
                                size='16px'
                                color='white'
                            />
                        </Box><br /><br />
                        <Box sx={{ display: 'inline-flex' }}>
                            <GitHub sx={{
                                color: 'white',
                                marginRight: '10px'
                            }} /><Text
                                text={<a href={'https://github.com/AmeenButt'} style={{
                                    color: 'white'
                                }}>Github</a>}
                                size='16px'
                                color='white'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4} align='center'>
                        <img src={logo} alt='logo' /><br /><br />
                        <Text
                            text='Copyright © 2023 Personal Portfolio'
                            size='16px'
                            color='white'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box sx={{
                            display: 'flex',
                            width:'100%',
                            flexDirection:{
                                xs:'row',
                                sm:'row',
                                md:'row-reverse',
                                lg:'row-reverse',
                            },
                            alignItems: {
                                xs: 'center',
                                sm: 'center',
                                md: 'right',
                                lg: 'right',
                            }
                        }}>
                            <LinkedIn sx={{
                                color: 'white',
                                marginRight: '10px'
                            }} />
                            <Instagram sx={{
                                color: 'white',
                                marginRight: '10px'
                            }} />
                            <Facebook sx={{
                                color: 'white',
                                marginRight: '10px'
                            }} />
                            <Twitter sx={{
                                color: 'white',
                                marginRight: '10px'
                            }} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
