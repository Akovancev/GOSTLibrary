import React from 'react';
import { Box, Button } from '@mui/material';
import { FieldArray, Field } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from 'formik-mui';


export default function PersonFields({ name, values }) {
    return (
        <Box>
            <FieldArray name={name}>
                {({ remove, push }) => (
                    <React.Fragment>
                        {values.map((_, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Field
                                        component={TextField}
                                        label="Фамилия"
                                        name={`${name}.${index}.surname`}
                                    />
                                    <Field
                                        component={TextField}
                                        label="Инициалы"
                                        name={`${name}.${index}.initials`}
                                    />
                                    <Button onClick={() => remove(index)}><DeleteIcon /></Button>
                                </React.Fragment>
                            )
                        })}
                        <Button onClick={() => push({ surname: '', initials: '' })}>Добавить</Button>
                    </React.Fragment>
                )}
            </FieldArray>
        </Box>
    )
}