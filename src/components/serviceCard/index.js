import { Card } from '@mui/material'
import React from 'react'
import Text from 'components/commonTypography'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
export default function Default({ img, header, text, onClick }) {
    return (
        <Card sx={{
            padding: '50px 30px'
        }}>
            <img src={img} alt='WebIcon' height={'80px'} /><br /><br />
            <Text
                text={header}
                size='28px'
                weight='500'
            /><br />
            <Text
                text={text}
                size='16px'
            /><br />
            <PlayCircleOutlineRoundedIcon style={{
                height: '30px',
                width: '30px',
                cursor: 'pointer',
                ':hover': {
                    color: 'red',
                    backgroundColor: 'red',
                  },
            }} onClick={onClick} />
        </Card>
    )
}
