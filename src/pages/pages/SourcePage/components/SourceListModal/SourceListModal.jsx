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
                <RulesSelect />
                <Typography sx={{ marginTop: 3 }}>

                    1. Браун Э. Изучаем JavaScript. Руководство по созданию современных веб-сайтов / Э. Браун. – Москва : Альфа-книга, 2017. – 364 с.
                    <br />
                    2. Резиг Д. Секреты JavaScript ниндзя / Д. Резиг, Бибо Б. – Москва : Вильямс, 2016. – 416 с.
                    <br />
                    3. Современный учебник JavaScript : [сайт]. – URL: https://learn.javascript.ru/ (дата обращения: 14.05.2021).

                </Typography>
                <br />
                <Button>Сгенерировать word-файл</Button>
                <Button>Сгенерировать tex-файл</Button>
                <Button>Закрыть</Button>
            </Box>
        </Modal>
    )
}