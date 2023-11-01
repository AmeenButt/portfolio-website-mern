import { globalColor } from 'global'
import React from 'react'

export default function Default() {
    return (
        <hr style={{
            width: '100px',
            height: '3px',
            backgroundColor: globalColor,
            marginTop: '10px'
        }} />
    )
}
