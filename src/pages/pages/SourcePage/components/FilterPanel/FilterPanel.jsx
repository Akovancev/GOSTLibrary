import { Paper, TextField, Typography } from '@mui/material';
import React from 'react';

export default function FilterPanel() {
    return (
        <Paper style={{ float: 'left', height: 300 }}>
            <Typography style={{ marginLeft: 50, marginTop: 15 }}>Фильтрация</Typography>
            <TextField size="small" style={{ marginRight: 10, marginLeft: 10, width: 175, marginTop: 15 }} label="Фамилия автора" />
            <Typography style={{ marginLeft: 50, marginTop: 15 }}>Год издания</Typography>
            <TextField size="small" style={{ marginRight: 10, marginLeft: 10, width: 175, marginTop: 15 }} label="с какого" />
            <br />
            <TextField size="small" style={{ marginRight: 10, marginLeft: 10, width: 175, marginTop: 15 }} label="по какой" />
        </Paper>
    )
}