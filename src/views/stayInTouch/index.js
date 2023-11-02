import { Box, Container, TextField } from '@mui/material'
import React from 'react'
import Header from 'components/header'
import CommonButton from 'components/commonButton'
export default function Default() {
  return (
    <Box id='contact' style={{
      margin: '50px 0px'
    }}>
      <center>
        <Header
          header="Stay In Touch"
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        />
      </center>
      <Container>
        <center><br /><br /><br />
          <TextField label='Enter emil address' sx={{
            width:{
              xs:'90%',
              sm:'90%',
              md:'40%',
              lg:'40%',
            }
          }} /><br /><br /><br />
          <CommonButton text='Subscribe' />
        </center>
      </Container>
    </Box>
  )
}
