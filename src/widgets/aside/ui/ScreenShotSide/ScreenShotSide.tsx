import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

type ScreenShotSidePropsType = {
    nessessaryShots: any
    update: any
    mainShot: any
}

function ScreenShotSide(props: ScreenShotSidePropsType) {
    return (
        <>
            <Box
                sx={{
                    width: '384px',
                    height: '216px',
                    borderRadius: '10px',
                    marginBottom: '15px',
                }}
            >
                <img
                    src={props.mainShot}
                    alt="#"
                    style={{ borderRadius: '5px' }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    marginBottom: '40px',
                }}
            >
                {props.nessessaryShots &&
                    props.nessessaryShots.map((s: any) => (
                        <Box
                            sx={{
                                width: '184px',
                                height: '102px',
                                borderRadius: '10px',
                            }}
                        >
                            <img
                                src={s?.image}
                                alt="#"
                                style={{ borderRadius: '5px' }}
                            />
                        </Box>
                    ))}
            </Box>
            <Button
                variant="text"
                fullWidth
                sx={{
                    textTransform: 'capitalize',
                    bgcolor: 'white',
                    color: 'black',
                    padding: '15px 0',
                    marginBottom: '10px',
                    '&:hover': {
                        bgcolor: 'grey',
                        transition: 'bgcolor 0.3s ease',
                    },
                }}
                startIcon={<EditIcon />}
            >
                Edit the game info
            </Button>
            <Typography
                sx={{
                    color: 'grey',
                    textAlign: 'center',
                    fontSize: '14px',
                    mb: '30px',
                }}
            >
                Last Modified: {props.update}
            </Typography>
            <Typography
                sx={{
                    color: 'grey',
                    // textAlign: 'center',
                    fontSize: '20px',
                    mb: '20px',
                }}
            >
                Where to buy
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Button
                    sx={{
                        width: '11.35rem',
                        backgroundColor: '#ffffff1a',
                        color: 'grey',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'black',
                            transition: 'background-color 0.3s ease',
                        },
                    }}
                >
                    qwe
                </Button>
                <Button style={{ width: '11.35rem', background: '#ffffff1a' }}>
                    qwe
                </Button>
                <Button style={{ width: '11.35rem', background: '#ffffff1a' }}>
                    qwe
                </Button>
                <Button style={{ width: '11.35rem', background: '#ffffff1a' }}>
                    qwe
                </Button>
            </Box>
        </>
    )
}

export default ScreenShotSide
