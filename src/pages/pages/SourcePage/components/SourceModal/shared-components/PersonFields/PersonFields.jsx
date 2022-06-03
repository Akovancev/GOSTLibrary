import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { FieldArray, Field } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormikTextField } from 'formik-material-fields';


export default function PersonFields({ name, values }) {
    return (
        <Box>
            <FieldArray name={name}>
                {({ remove, push }) => (
                    <React.Fragment>
                        {values.map((_, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <FormikTextField
                                        label="Фамилия"
                                        name={`${name}.${index}.surname`}
                                    />
                                    <FormikTextField
                                        label="Инициалы"
                                        name={`${name}.${index}.initials`}
                                    />
                                    {/* <TextField name={`${name}.${index}.surname`} value={value.surname} />
                                    <TextField label="Инициалы" name={`${name}.${index}.initials`} value={value.initials} /> */}
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