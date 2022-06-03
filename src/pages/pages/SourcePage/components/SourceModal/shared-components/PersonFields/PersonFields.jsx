import React from 'react';
import { Button } from '@mui/material';
import { FieldArray, Field } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from 'formik-mui';


export default function PersonFields({ name, values }) {
    return (
        <FieldArray name={name}>
            {({ remove, push }) => (
                <React.Fragment>
                    {values.map((_, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Field
                                    style={{ margin: 10 }}
                                    component={TextField}
                                    label="Фамилия"
                                    name={`${name}.${index}.surname`}
                                />
                                <Field
                                    style={{ margin: 10 }}
                                    component={TextField}
                                    label="Инициалы"
                                    name={`${name}.${index}.initials`}
                                />
                                <Button
                                    style={{ margin: 10 }}
                                    onClick={() => remove(index)}
                                >
                                    <DeleteIcon />
                                </Button>
                            </React.Fragment>
                        )
                    })}
                    <Button
                        style={{ margin: 10 }}
                        onClick={() => push({ surname: '', initials: '' })}
                    >
                        Добавить
                    </Button>
                </React.Fragment>
            )}
        </FieldArray>
    )
}