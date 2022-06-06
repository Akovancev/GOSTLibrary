import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { SOURCE_CODES } from '../../../../../../../core/constants/SOURCE_CODES';

const selectNodeConfig = {
    [SOURCE_CODES.BOOK_CODE]: 'Книга',
    [SOURCE_CODES.ARTICLE_BOOK_CODE]: 'Статья из книги',
    [SOURCE_CODES.ARTICLE_MAGAZINE_CODE]: 'Статья из журнала',
    [SOURCE_CODES.ARTICLE_NEWSPAPER_CODE]: 'Статья из газеты',
    [SOURCE_CODES.CONFERENCE_CODE]: 'Конференция',
    [SOURCE_CODES.SITE_CODE]: 'Сайт',
}

export default function SourceTypeSelect({ value, onChange }) {
    return (
        <FormControl style={{ margin: 10 }}>
            <Select
                onChange={onChange}
                value={value}
            >
                {Object.keys(SOURCE_CODES).map(key => (
                    <MenuItem value={SOURCE_CODES[key]} key={SOURCE_CODES[key]}>
                        {selectNodeConfig[SOURCE_CODES[key]]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    )
}