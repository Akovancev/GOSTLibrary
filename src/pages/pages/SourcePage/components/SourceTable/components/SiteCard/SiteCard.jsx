import React from 'react';
import { CardContent, Typography } from '@mui/material';
import SourceCardWithModal from '../../shared-components/SourceCardWithModal/SourceCardWithModal';

export default function SiteCard({ cardData }) {
    return (
        <SourceCardWithModal sourceData={cardData}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Сайт
                </Typography>
                <Typography variant="h5" component="div">
                    {cardData.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {cardData.URL}
                </Typography>
            </CardContent>
        </SourceCardWithModal>
    )
}