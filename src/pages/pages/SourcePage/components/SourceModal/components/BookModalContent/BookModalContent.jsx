import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import PersonFields from '../../shared-components/PersonFields/PersonFields';

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

export default function BookModalContent({ values, ...restFormikProps }) {
    console.log('qq', values)
    return (
        <Box sx={boxStyle}>
            <PersonFields values={values.authors} name="authors" {...restFormikProps} />
            <PersonFields values={values.editors} name="editors" {...restFormikProps} />
            <PersonFields values={values.translators} name="translators" {...restFormikProps} />
            <Typography
                style={fieldStyle}
                variant="h6"
                component="h2"
            >
                Книга
            </Typography>
            <TextField
                style={fieldStyle}
                label="Заглавие"
                name="title"
            />
            <TextField
                style={fieldStyle}
                label="Сведения о книге"
                name="titleInfo"
            />
            <TextField
                style={fieldStyle}
                label="Место издания"
                name="place"
            />
            <TextField
                style={fieldStyle}
                label="Издательство"
                name="publishingHouse"
            />
            <TextField
                style={fieldStyle}
                label="Год издания"
                name="yearOfPublishing"
            />
            <TextField
                style={fieldStyle}
                label="Количество страниц"
                name="numberOfPages"
            />
        </Box>
    )
}