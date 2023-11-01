import { Box } from '@mui/material'
import React from 'react'
import Text from 'components/commonTypography'
import LineBreak from 'components/lineBreak'
export default function Default({header,text}) {
    return (
        <Box>
            <Text
                text={header}
                size='48px'
            />
            <Text
                text={text}
                size='16px'
            />
            <LineBreak />
        </Box>
    )
}
