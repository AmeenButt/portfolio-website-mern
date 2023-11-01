import { Button } from '@mui/material'
import { globalColor } from 'global'
import React from 'react'

export default function Default({text, onClick}) {
    return (
        <Button variant='contained' style={{
            backgroundColor: globalColor,
            padding:'10px 30px',
            fontSize: '16px',
            fontWeight: '100',
            ':& hover': {
                backgroundColor: globalColor,
            },
        }} onClick={onClick}>{text}</Button>
    )
}
