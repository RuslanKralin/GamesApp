import { Box, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'

type SliderPropsType = {
    short_screenshots: string[]
    backGroundImg: string
}

function Slider(props: SliderPropsType) {
    const [activeImage, setActiveImage] = useState<string>(props.backGroundImg)
    console.log(props.short_screenshots)

    const handleMouseEnter = (src: string): void => {
        setActiveImage(src)
    }

    useEffect(() => {
        console.log('qwe')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.short_screenshots])

    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute' }}>
                <CardMedia
                    component="img"
                    image={activeImage}
                    sx={{ height: '180px' }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '5px',
                    minHeight: '170px',
                    padding: '0 10px',
                }}
            >
                {props.short_screenshots &&
                    props.short_screenshots.map((shot: any) => (
                        <Box
                            key={shot}
                            sx={{
                                zIndex: '99',
                                minHeight: '170px',
                                borderBottom: '4px solid grey',
                                flexGrow: 1,
                                '&:hover': {
                                    borderBottom: '4px solid green',
                                },
                            }}
                            onMouseEnter={() => {
                                handleMouseEnter(shot.image)
                            }}
                        ></Box>
                    ))}
            </Box>
        </Box>
    )
}

export default Slider
