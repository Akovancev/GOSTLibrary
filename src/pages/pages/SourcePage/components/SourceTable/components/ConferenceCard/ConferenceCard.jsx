import React from 'react';
import { CardContent, Typography } from '@mui/material';
import StyledCard from '../../shared-components/StyledCard/StyledCard';
import moment from 'moment';
import { getPersonSurnameWithInitials } from '../../../../../../../core/services/personService';

export default function ConferenceCard({ cardData }) {
    return (
        <StyledCard>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Конференция
                </Typography>
                <Typography variant="h5" component="div">
                    {cardData.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {getPersonSurnameWithInitials(cardData.editors)}
                </Typography>
                <Typography variant="body2">
                    {`${cardData.city}, ${moment(cardData.date).format('DD.MM.YYYY')}`}
                </Typography>
            </CardContent>
        </StyledCard>
    )
}