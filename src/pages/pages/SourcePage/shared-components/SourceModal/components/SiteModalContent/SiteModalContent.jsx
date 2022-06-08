import React from 'react';
import { TextField } from 'formik-mui';
import { Field } from 'formik';



const fieldStyle = {
    margin: 10,
}

export default function SiteModalContent() {
    return (
        <React.Fragment>
            <Field
                component={TextField}
                style={fieldStyle}
                label="Заглавие сайта"
                name="title"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Сведения о сайте"
                name="titleInfo"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Ссылка"
                name="URL"
            />
            <Field
                component={TextField}
                style={fieldStyle}
                label="Дата посещения"
                name="date"
            />
        </React.Fragment>
    )
}