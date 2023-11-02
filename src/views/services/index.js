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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            img: WebIcon,
            onClick: () => { }
        },
        {
            header: 'Backend Development',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            img: WebIcon,
            onClick: () => { }
        },
        {
            header: 'Custom Solutions',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
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
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
