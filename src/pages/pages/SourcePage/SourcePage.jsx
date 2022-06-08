import React from 'react';
import { Button, Container } from '@mui/material';
import SourceTable from './components/SourceTable/SourceTable';
import SourceModal from './shared-components/SourceModal/SourceModal';
import useSourcePage from './hooks/useSourcePage';
import useModal from './hooks/useModal';
import SourceListModal from './components/SourceListModal/SourceListModal';
import { useSourceContext } from '../../../core/context/SourceContext/SourceContext';
import FilterPanel from './components/FilterPanel/FilterPanel';

const buttonStyles = {
    marginLeft: 25,
    marginTop: 10
}

const buttonProps = {
    variant: 'contained',
    style: buttonStyles,
}

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

    const { selectedCards } = useSourceContext();

    return (
        <>
            <FilterPanel />
            <Container maxWidth="lg">
                <Button
                    onClick={handleOpenModalSourceModal}
                    {...buttonProps}
                >
                    Добавить
                </Button>
                <Button
                    disabled={selectedCards.length === 0}
                    onClick={handleOpenModalSourceListModal}
                    {...buttonProps}
                >
                    Сформировать список
                </Button>
                <SourceModal visible={visibleSourceModal} onClose={handleCloseModalSourceModal} />
                <SourceListModal visible={visibleSourceListModal} onClose={handleCloseModalSourceListModal} />
                <SourceTable sourceData={sourceData} />
            </Container>
        </>
    )
}