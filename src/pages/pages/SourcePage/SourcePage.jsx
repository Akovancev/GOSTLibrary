import React from 'react';
import { Button, Container } from '@mui/material';
import SourceTable from './components/SourceTable/SourceTable';
import SourceModal from './shared-components/SourceModal/SourceModal';
import useSourcePage from './hooks/useSourcePage';
import useModal from './hooks/useModal';
import SourceListModal from './components/SourceListModal/SourceListModal';

export default function SourcePage() {
    const {
        visible: visibleSourceModal,
        handleOpenModal: handleOpenModalSourceModal,
        handleCloseModal: handleCloseModalSourceModal,
        sourceData,
    } = useSourcePage();

    const {
        visible: visibleSourceListModal,
        handleOpenModal: handleOpenModalSourceListModal,
        handleCloseModal: handleCloseModalSourceListModal,
    } = useModal();

    return (
        <Container maxWidth="lg">
            <Button onClick={handleOpenModalSourceModal} style={{ marginLeft: 25, marginTop: 10 }} variant="contained">Добавить</Button>
            <Button onClick={handleOpenModalSourceListModal} style={{ marginLeft: 25, marginTop: 10 }} variant="contained">Сформировать список</Button>
            <SourceModal visible={visibleSourceModal} onClose={handleCloseModalSourceModal} />
            <SourceListModal visible={visibleSourceListModal} onClose={handleCloseModalSourceListModal} />
            <SourceTable sourceData={sourceData} />
        </Container>
    )
}