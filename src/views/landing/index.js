import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import mainBg from 'assets/main-bg.png'
import CommonButton from 'components/commonButton'
import Text from 'components/commonTypography'
import { globalGradient1 } from 'global'
export default function Default() {
    return (
        <Box sx={{
            background: globalGradient1,
            paddingTop: '100px'
        }}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={7} lg={7} sx={{
                        paddingTop: {
                            xs: '10px',
                            sm: '10px',
                            md: '200px',
                            lg: '200px',
                        }
                    }}>
                        <Text
                            text="I'm Web Developer Ameen Ullah Khalid"
                            size={'68px'}
                        />
                        <Text
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum."
                            size={'28px'}
                        />
                        <Box sx={{
                            marginTop: '50px'
                        }}>
                            <CommonButton text='Learn More' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <img src={mainBg} alt='mainBg' width={'100%'} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
