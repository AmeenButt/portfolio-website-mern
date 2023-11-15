import { Box, Card, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import Text from 'components/commonTypography'
import Header from 'components/header'
import WebIcon from 'assets/web-development-icon.png'
import ServiceCard from 'components/serviceCard'
import { globalGradient1 } from 'global'
import { globalGradient2 } from 'global'
export default function Default() {
    const [services, setServices] = useState([
        {
            header: 'Web Development',
            text: 'Elevate your digital presence with our comprehensive web development services. We specialize in crafting responsive, scalable, and visually stunning websites tailored to your unique needs.',
            img: WebIcon,
            onClick: () => { }
        },
        {
            header: 'Backend Development',
            text: 'Empower your applications with our robust backend development services. We specialize in creating scalable, secure, and efficient server-side solutions, optimizing performance and ensuring seamless functionality.',
            img: WebIcon,
            onClick: () => { }
        },
        {
            header: 'Custom Solutions',
            text: 'Unlock tailored excellence with our custom solutions service. We specialize in crafting unique, innovative solutions to address your specific challenges, ensuring efficiency and optimal performance for your business.',
            img: WebIcon,
            onClick: () => { }
        },
    ])
    return (
        <Box id='#services' sx={{
            background: globalGradient1,
        }}>
            <Box sx={{
                background: globalGradient2,
                borderRadius: '0px 80% 0% 0px',
                paddingTop: '50px'
            }}>
                <center>
                    <Header
                        header="What Services I'm Providing"
                        text='Tailored Solutions, Infinite Possibilities: Your Vision, Our Expertise - Crafting Custom Solutions for Your Unique Business Needs.'
                    />

                </center>
                <Container sx={{
                    padding: '70px 0px'
                }}>
                    <Grid container spacing={4}>
                        {services.map((item, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                            <center>
                                <ServiceCard
                                    onClick={item.onClick}
                                    img={item.img}
                                    header={item.header}
                                    text={item.text}
                                />
                            </center>
                        </Grid>)}

                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}
