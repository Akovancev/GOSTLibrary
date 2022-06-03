import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1025,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const fieldStyle = {
    margin: 10,
}

export default function SiteModalContent() {
    return (
        <Box sx={boxStyle}>
            <Typography
                style={fieldStyle}
                variant="h6"
                component="h2"
            >
                Сайт
            </Typography>
            <TextField
                style={fieldStyle}
                label="Заглавие сайта"
                name="title"
            />
            <TextField
                style={fieldStyle}
                label="Сведения о сайте"
                name="titleInfo"
            />
            <TextField
                style={fieldStyle}
                label="Ссылка"
                name="URL"
            />
            <TextField
                style={fieldStyle}
                label="Дата посещения"
                name="date"
            />
        </Box>
    )
}