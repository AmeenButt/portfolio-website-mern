import { Button } from '@mui/material'
import { globalColor } from 'global'
import React from 'react'

export default function Default(props) {
    const { variant } = props
    return (
        <Button
            variant='contained'
            style={{
                fontSize: '12px',
                borderRadius: '10px',
                padding: variant == 'large' && '12px 25px',
                backgroundColor: globalColor,
                ':& hover': {
                    backgroundColor: globalColor
                }
            }}>{props.children}</Button>
    )
}
