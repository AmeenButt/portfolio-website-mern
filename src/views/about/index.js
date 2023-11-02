import { Box, Container, Grid } from '@mui/material';
import Text from 'components/commonTypography'
import LineBreak from 'components/lineBreak'
import CommonButton from 'components/commonButton'
import aboutBg from 'assets/about-bg.jpg'
import Header from 'components/header'
import { globalColor } from 'global';
export default function Default() {
    return (
        <Box id='about' sx={{
            marginTop: '40px'
        }}>
            <center>
                <Header
                    header="About Me"
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
            </center>
            <Container sx={{
                marginTop: '70px'
            }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Text
                            text='Developing With a Passion While Exploring The World.'
                            size='30px'
                        />
                        <LineBreak />
                        <br />
                        <Text
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                            size='16px'
                        /><br />
                        <Text
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            size='16px'
                        /><br /><br />
                        <CommonButton text='Contact Me' />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%', // Add this line to make sure the container takes up the full height
                        }}>
                            <Box><br />
                                <Text
                                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                                    size='16px'
                                /><br />
                                <Text
                                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                                    size='16px'
                                /><br />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box sx={{
                            marginLeft: '5%',
                            width: '100%',
                            borderRadius: '16px',
                            backgroundColor: globalColor,
                            display: 'flex',
                            alignItems: 'center',
                            paddingBottom: '5%',
                        }}>
                            <img src={aboutBg} alt='' width={'100%'} style={{ marginTop: '5%', marginLeft: '-5%' }} />
                        </Box><br /><br />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
