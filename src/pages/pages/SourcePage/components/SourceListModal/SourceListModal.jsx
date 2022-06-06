import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import RulesSelect from './components/RulesSelect/RulesSelect';

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SourceListModal({ visible, onClose }) {
    return (
        <Modal open={visible} onClose={onClose}>
            <Box sx={boxStyle}>
                <Typography>Список литературы</Typography>
                <RulesSelect />
                <br />
                <Button>Сгенерировать word-файл</Button>
                <Button>Сгенерировать tex-файл</Button>
                <Button>Закрыть</Button>
            </Box>
        </Modal>
    )
}