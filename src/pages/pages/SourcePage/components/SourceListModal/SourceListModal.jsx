import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import RulesSelect from './components/RulesSelect/RulesSelect';
import { useSourceContext } from '../../../../../core/context/SourceContext/SourceContext';
import { DocumentCreator } from '../../../../../generator/DocumentCreator';
import { GOST_2018 } from '../../../../../core/constants/RULES_CODES';
import { saveAs } from "file-saver";
import { Packer } from "docx";

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
    const { selectedCards } = useSourceContext();
    const documentCreator = new DocumentCreator();

    const generateWordDocument = () => {
        const doc = documentCreator.createWordFormat({
            sources: selectedCards,
            ruleCode: GOST_2018,
        })

        Packer.toBlob(doc).then(blob => {
            saveAs(blob, "Список используемой литературы.docx");
            console.log("Document created successfully");
        });
    }

    const generateTexDocument = () => {
        const doc = documentCreator.createWordFormat({
            sources: selectedCards,
            ruleCode: GOST_2018,
        })

        Packer.toBlob(doc).then(blob => {
            saveAs(blob, "Список используемой литературы.bib");
            console.log("Document created successfully");
        });
    }

    return (
        <Modal open={visible} onClose={onClose}>
            <Box sx={boxStyle}>
                <RulesSelect />
                <Typography sx={{ marginTop: 3 }}>
                    {selectedCards.map((source, index) => (
                        <React.Fragment key={source.id}>
                            {`${index + 1}. ${documentCreator.getFormatStringByCode({
                                source,
                                ruleCode: GOST_2018
                            })}`}
                            <br />
                        </React.Fragment>
                    ))}
                </Typography>
                <br />
                <Button onClick={generateWordDocument}>
                    Сгенерировать word-файл
                </Button>
                <Button onClick={generateTexDocument}>
                    Сгенерировать tex-файл
                </Button>
                <Button onClick={onClose}>
                    Закрыть
                </Button>
            </Box>
        </Modal>
    )
}