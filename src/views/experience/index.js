import { Box, Card, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import Text from 'components/commonTypography'
import WebIcon from 'assets/web-development-icon.png'
import ServiceCard from 'components/serviceCard'
import Header from 'components/header'
import { globalColor } from 'global'
import { globalGradient2 } from 'global'
import { globalGradient1 } from 'global'
export default function Default() {
    const [services, setServices] = useState([
        {
            header: 'MERN Stack Lead',
            text: 'As a dedicated MERN Stack Developer at our service-based company, I not only lead the development of cutting-edge web solutions but also mentor and guide our talented MERN Stack interns. My role involves shaping the next generation of developers, fostering growth, and ensuring the success of our team in delivering top-notch services to our clients.',
            from: '06/2023',
            till: 'Currently Employeed',
        },
        {
            header: 'MERN Stack Developer',
            text: 'As a MERN Stack Developer at a dynamic service-based company, I contributed significantly to crafting web applications and mobile app backends. Leveraging MongoDB, Express.js, React, and Node.js, I played a key role in developing innovative solutions, enhancing the digital landscape for our clients and ensuring seamless integration across platforms.',
            from: '01/2023',
            till: '06/2023',
        },
        {
            header: 'MERN Stack Developer',
            text: "Drawing from my extensive experience as a MERN Stack Developer, I've played a pivotal role in enhancing company products. Spearheading projects, I've seamlessly integrated MongoDB, Express.js, React, and Node.js to elevate functionality and user experiences, ensuring the continuous evolution of our flagship products.",
            from: '06/2022',
            till: '01/2023',
        },
    ])
    return (
        <Box id='#experience' sx={{
            background: globalGradient1,
        }}>
            <Box sx={{
                background: globalGradient2,
                borderRadius: '80% 0% 0% 0px',
                paddingTop: '50px'
            }}>
                <center>
                    <Header
                        header='Work Experience'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                </center>
                <Container sx={{
                    padding: '70px 0px'
                }}>
                    <Grid container spacing={4}>
                        {services.map((item, index) => <Grid key={index} item xs={12} sm={12} md={6} lg={`${index == services.length - 1 ? 12 : 6}`}>
                            <Card sx={{
                                padding: '50px',
                            }}>
                                <Text
                                    text={item.header}
                                    size='22px'
                                    weight='600'
                                /><br />
                                <Box sx={{
                                    display: 'flex',
                                    color: 'red'
                                }}>
                                    <Text
                                        text={item.from}
                                        size='18px'
                                        weight='500'
                                        color={globalColor}
                                    />&nbsp;-&nbsp;<Text
                                        text={item.till}
                                        size='18px'
                                        weight='500'
                                        color={globalColor}
                                    />
                                </Box><br />
                                <Text
                                    text={item.text}
                                    size='14px'
                                    weight='500'
                                /><br />
                                <Box sx={{
                                    width: '100%',
                                    height: '30px',
                                    backgroundColor: 'rgba(0,0,0,0.1)',
                                    borderRadius: '16px',

                                }}>
                                    <Box sx={{
                                        width: '70%',
                                        height: '30px',
                                        backgroundColor: globalColor,
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0px 10px',
                                    }}>
                                        <Text
                                            text={item.header}
                                            size='12px'
                                            weight='500'
                                            color='white'
                                        />
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>)}

                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}
