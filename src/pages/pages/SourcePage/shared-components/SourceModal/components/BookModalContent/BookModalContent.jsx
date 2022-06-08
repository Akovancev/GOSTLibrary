import React from 'react';
import { Box, Typography } from '@mui/material';
import { TextField } from 'formik-mui';
import PersonFields from '../../shared-components/PersonFields/PersonFields';
import { Field } from 'formik';

const fieldStyle = {
    margin: 10,
}

export default function BookModalContent({ values, fromArticle }) {
    return (
        <React.Fragment>
            <Box sx={{ width: 600 }}>
                <Typography
                    style={fieldStyle}
                    variant="h6"
                    component="h2"
                >
                    Авторы
                </Typography>
                <PersonFields values={values.authors} name="authors" />
            </Box>
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

            <Box sx={{ width: 600 }}>
                <Typography
                    style={fieldStyle}
                    variant="h6"
                    component="h2"
                >
                    Переводчики
                </Typography>
                <PersonFields values={values.translators} name="translators" />

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
                label="Сведения о книге"
                name="titleInfo"
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
                label="Год издания"
                name="yearOfPublishing"
            />
            {Boolean(!fromArticle) && (
                <Field
                    component={TextField}
                    style={fieldStyle}
                    label="Количество страниц"
                    name="numberOfPages"
                />
            )}
        </React.Fragment>
    )
}