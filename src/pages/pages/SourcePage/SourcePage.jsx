import React from 'react';
import { Button, Container } from '@mui/material';
import SourceTable from './components/SourceTable/SourceTable';
import SourceModal from './components/SourceModal/SourceModal';
import useSourcePage from './hooks/useSourcePage';

export default function SourcePage() {
    const {
        visible,
        handleOpenModal,
        handleCloseModal,
        sourceData,
    } = useSourcePage();

    return (
        <Container maxWidth="lg">
            <Button onClick={handleOpenModal} style={{ marginLeft: 25, marginTop: 10 }}>Добавить</Button>
            <SourceModal visible={visible} onClose={handleCloseModal} />
            <SourceTable sourceData={sourceData} />
        </Container>
    )
}