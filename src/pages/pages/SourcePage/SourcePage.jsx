import React from 'react';
import { Button, Container } from '@mui/material';
import SourceTable from './components/SourceTable/SourceTable';
import SourceModal from './components/SourceModal/SourceModal';
import useModal from './hooks/useModal';

export default function SourcePage() {
    const {
        visible,
        handleOpenModal,
        handleCloseModal,
    } = useModal()
    return (
        <Container maxWidth="lg">
            <Button onClick={handleOpenModal}>Добавить</Button>
            <SourceModal visible={visible} onClose={handleCloseModal} />
            <SourceTable />
        </Container>
    )
}