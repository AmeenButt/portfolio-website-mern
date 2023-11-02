import { Box } from '@mui/material'
import React from 'react'
import Text from 'components/commonTypography'
export default function Default({ setImageIndex, data }) {
    console.log(data)
    return (
        <Box style={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '999999',
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: '100%',
            width: '100%'
        }} onClick={(e) => {
            if (e.currentTarget == e.target) {
                setImageIndex(null)
            }
        }}>
            <Box style={{
                maxHeight: '90vh',
                maxWith: '90vw',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '10px'
            }}>
                <img src={data.image} alt='preview' height={'100%'} width={'100%'} />
                <Text
                    text='Project Overview'
                    size='24px'
                />
                <Text
                    text={data.description}
                    size='14px'
                    align={true}
                />
                {data.url && <>
                    <Text
                        text='Project Url'
                        size='24px'
                    />
                    <Text
                        text={<a href={'http://localhost:3000'}>http://localhost:3000</a>}
                        size='16px'
                    />
                </>}
            </Box>

        </Box>
    )
}
