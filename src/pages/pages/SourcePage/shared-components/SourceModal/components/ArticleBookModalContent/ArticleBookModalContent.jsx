import React from 'react';
import { Box, Typography } from '@mui/material';
import { TextField } from 'formik-mui';
import PersonFields from '../../shared-components/PersonFields/PersonFields';
import { Field } from 'formik';
import BookModalContent from '../BookModalContent/BookModalContent';

const fieldStyle = {
    margin: 10,
}

export default function ArticleBookModalContent({ values }) {
    return (
        <React.Fragment>
            <Box sx={{ width: 600 }}>
                <Typography
                    style={fieldStyle}
                    variant="h6"
                    component="h2"
                >
                    Авторы статьи
                </Typography>
                <PersonFields values={values.authors} name="authors" />
            </Box>
            <Field
                component={TextField}
                style={fieldStyle}
                label="Заглавие статьи"
                name="title"
            />
            <Typography
                style={fieldStyle}
                variant="h6"
                component="h2"
            >
                Информация о книге
            </Typography>
            <BookModalContent values={values} fromArticle />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Страницы"
                name="numberOfPages"
            />
        </React.Fragment>
    )
}