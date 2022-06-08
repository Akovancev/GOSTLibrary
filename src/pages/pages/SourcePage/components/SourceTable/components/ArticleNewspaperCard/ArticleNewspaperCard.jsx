import React from 'react';
import { CardContent, Typography } from '@mui/material';
import SourceCardWithModal from '../../shared-components/SourceCardWithModal/SourceCardWithModal';
import { getPersonSurnameWithInitials } from '../../../../../../../core/services/personService';

export default function ArticleNewspaperCard({ cardData }) {
    return (
        <SourceCardWithModal sourceData={cardData}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Статья из газеты
                </Typography>
                <Typography variant="h5" component="div">
                    {cardData.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {`${getPersonSurnameWithInitials(cardData.authors)} ${cardData.newspaperTitle} ${cardData.newspaperNumber}`}
                </Typography>
            </CardContent>
        </SourceCardWithModal>
    )
}