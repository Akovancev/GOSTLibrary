import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, Modal } from '@mui/material';
import BookModalContent from './components/BookModalContent/BookModalContent';
import { SOURCE_CODES } from '../../../../../core/constants/SOURCE_CODES';
import SiteModalContent from './components/SiteModalContent/SiteModalContent';
import SourceAPI from '../../../../../core/api/SourceAPI';
import SourceTypeSelect from './components/SourceTypeSelect/SourceTypeSelect';

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

const initialValues = {
    authors: [
        {
            surname: '',
            initials: '',
        }
    ],
    editors: [],
    translators: [],
}

const componentsConfig = {
    [SOURCE_CODES.BOOK_CODE]: BookModalContent,
    [SOURCE_CODES.ARTICLE_BOOK_CODE]: BookModalContent,
    [SOURCE_CODES.ARTICLE_MAGAZINE_CODE]: BookModalContent,
    [SOURCE_CODES.ARTICLE_NEWSPAPER_CODE]: BookModalContent,
    [SOURCE_CODES.CONFERENCE_CODE]: BookModalContent,
    [SOURCE_CODES.SITE_CODE]: SiteModalContent,
}

export default function SourceModal({ visible, onClose }) {
    const [activeTypeValue, setActiveTypeValue] = useState(SOURCE_CODES.BOOK_CODE);
    const handleChangeActiveType = ({ target }) => setActiveTypeValue(target.value);

    async function onSubmit(values) {
        await SourceAPI.saveSources({
            code: activeTypeValue,
            obj: values,
        })
        onClose()
    }

    return (
        <Modal open={visible} onClose={onClose}>
            <Box sx={boxStyle}>
                <SourceTypeSelect value={activeTypeValue} onChange={handleChangeActiveType} />
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({ values }) => {
                        const Component = componentsConfig[activeTypeValue];
                        const renderComnonent = () => <Component values={values} />;

                        return (
                            <Form>
                                {renderComnonent()}
                                <Button type="submit" fullWidth>
                                    Сохранить
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </Box>
        </Modal>
    )
}