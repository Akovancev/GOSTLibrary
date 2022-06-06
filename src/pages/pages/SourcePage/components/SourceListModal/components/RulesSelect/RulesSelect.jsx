import React from 'react';
import { MenuItem, Select } from '@mui/material';

export default function RulesSelect() {
    return (
        <Select defaultValue={1}>
            <MenuItem value={1}>ГОСТ Р 7.0.100 – 2018</MenuItem>
        </Select>
    )
}