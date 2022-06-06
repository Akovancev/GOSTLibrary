import React from 'react';
import { CardContent, Typography } from '@mui/material';
import SourceCardWithModal from '../../shared-components/SourceCardWithModal/SourceCardWithModal';
import { getPersonSurnameWithInitials } from '../../../../../../../core/services/personService';

export default function ArticleMagazineCard({ cardData }) {
    return (
        <SourceCardWithModal>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Статья из журнала
                </Typography>
                <Typography variant="h5" component="div">
                    {cardData.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {`${getPersonSurnameWithInitials(cardData.authors)} ${cardData.magazineTitle} №${cardData.magazineNumber}`}
                </Typography>
            </CardContent>
        </SourceCardWithModal>
    )
}