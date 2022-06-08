import React from 'react';
import { Card, Checkbox } from '@mui/material';
import SourceModal from '../../../../shared-components/SourceModal/SourceModal';
import useSourcePage from '../../../../hooks/useSourcePage';
import { useSourceContext } from '../../../../../../../core/context/SourceContext/SourceContext';

const styles = {
    width: 325,
    height: 225,
    float: 'left',
    margin: 3
}

export default function SourceCardWithModal({ sourceData, children }) {
    const {
        visible,
        handleOpenModal,
        handleCloseModal,
    } = useSourcePage();

    const {
        selectedCards,
        handleAddCard,
        handleRemoveCard,
    } = useSourceContext();

    const checkBoxValue = Boolean(selectedCards.find(card => card.id === sourceData?.id));

    function handleChange({ target }) {
        if (target.checked) {
            return handleAddCard(sourceData);
        }

        handleRemoveCard(sourceData?.id);
    }

    return (
        <>
            <SourceModal visible={visible} onClose={handleCloseModal} sourceData={sourceData} />
            <Card sx={styles}>
                <Checkbox checked={checkBoxValue} onChange={handleChange} />
                <div onClick={handleOpenModal}>
                    {children}
                </div>
            </Card>
        </>
    )
}