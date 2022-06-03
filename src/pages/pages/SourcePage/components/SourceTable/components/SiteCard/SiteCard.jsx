import React from 'react';
import { CardContent, Typography } from '@mui/material';
import StyledCard from '../../shared-components/StyledCard/StyledCard';

export default function SiteCard({ cardData }) {
    return (
        <StyledCard>
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
        </StyledCard>
    )
}