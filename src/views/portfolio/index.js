import React, { useState } from 'react'
import img1 from 'assets/compCheck.png';
import img2 from 'assets/addPlatform.png';
import img3 from 'assets/adminRendoor.png';
import img4 from 'assets/jumboAI.png';
import img5 from 'assets/rendoor.png';
import img6 from 'assets/mianTravels.png';
import './index.css'
import { Box, Container } from '@mui/material';
import Header from 'components/header'
import Slider from 'components/slider'
import ImageView from 'components/imageView'
export default function Default() {
    const [imageIndex, setImageIndex] = useState(null)
    const [portfolio, setSortfolio] = useState([
        {
            image: img1,
            setImageIndex: setImageIndex,
            description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum`
        },
        {
            image: img2,
            setImageIndex: setImageIndex,
            description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum`
        },
        {
            image: img3,
            setImageIndex: setImageIndex,
            description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum`
        },
        {
            image: img4,
            setImageIndex: setImageIndex,
            description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum`
        },
        {
            image: img5,
            setImageIndex: setImageIndex,
            description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum`
        },
        {
            image: img6,
            setImageIndex: setImageIndex,
            description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum`
        },
    ])
    
    return (
        <>
            {imageIndex != null && <ImageView data={portfolio[imageIndex]} setImageIndex={setImageIndex} />}
            <Box id='portfolio' sx={{ padding: '50px 0px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
                <center>
                    <Header
                        header="My Portfolio"
                        text='Elevating Digital Experiences, One Line of Code at a Time: Unleashing Innovation and Craftsmanship in the World of Web Development.'
                    />
                </center><br /><br /><br />
                <Container>
                    <Slider data={portfolio} setImageIndex={setImageIndex} />
                </Container>
            </Box>
        </>
    )
}
