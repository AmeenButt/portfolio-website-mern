import { Button } from '@mui/material'
import React from 'react'

export default function Default({text, onClick}) {
    return (
        <Button variant='contained' style={{
            backgroundColor: '#cf332b',
            padding:'10px 30px',
            fontSize: '16px',
            fontWeight: '100',
            ':& hover': {
                backgroundColor: '#ec5b53',
            },
        }} onClick={onClick}>{text}</Button>
    )
}
