import React from 'react';
import { Card } from '@mui/material';

const styles = { 
    width: 325,
    height: 175,
    float: 'left',
    margin: 3
}

export default function StyledCard({ children }) {
    return (
        <Card sx={styles}>
            {children}
        </Card>
    )
}