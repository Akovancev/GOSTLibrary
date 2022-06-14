import { Box, Typography } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import React from 'react';
import PersonFields from '../../shared-components/PersonFields/PersonFields';

const fieldStyle = {
    margin: 10,
}

export default function ConferenceModalContent({ values }) {
    return (
        <React.Fragment>
            <Box sx={{ width: 600 }}>
                <Typography
                    style={fieldStyle}
                    variant="h6"
                    component="h2"
                >
                    Редакторы
                </Typography>
                <PersonFields values={values.editors} name="editors" />
            </Box>
            <Field
                component={TextField}
                style={fieldStyle}
                label="Заглавие"
                name="title"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Сведения о заглавии"
                name="titleInfo"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Город проведения"
                name="city"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Дата проведения"
                name="date"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Место издания"
                name="place"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Издательство"
                name="publishingHouse"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Количество страниц"
                name="numberOfPages"
            />
        </React.Fragment>
    )
}