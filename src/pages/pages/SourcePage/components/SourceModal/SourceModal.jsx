import React from 'react';
import { Formik, Form } from 'formik';
import { Modal } from '@mui/material';
import BookModalContent from './components/BookModalContent/BookModalContent';

const initialValues = {
    authors: [
        {
            surname: '123',
            initials: '123',
        }
    ],
    editors: [],
    translators: [],
}

export default function SourceModal({ visible, onClose }) {
    async function onSubmit(values) {
        console.log('qq', values);
    }
    return (
        <Modal open={visible} onClose={onClose}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ values, ...restFormikProps }) => (
                    <Form>
                        <BookModalContent values={values} {...restFormikProps} />
                    </Form>)
                }
            </Formik>
        </Modal>
    )
}