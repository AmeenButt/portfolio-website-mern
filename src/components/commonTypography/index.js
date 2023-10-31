import { Typography } from '@mui/material'
import React from 'react'

export default function Default({size,color, weight, text}) {
    return (
        <Typography sx={{
            fontSize: size,
            color: color || '#002D5B',
            fontWeight: weight,
            fontFamily: 'Roboto',
        }}>
            {text}
        </Typography>
    )
}
