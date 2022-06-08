import { Box } from '@mui/material';
import React from 'react';
import { SOURCE_CODES } from '../../../../../core/constants/SOURCE_CODES';
import ArticleBookCard from './components/ArticleBookCard/ArticleBookCard';
import ArticleMagazineCard from './components/ArticleMagazineCard/ArticleMagazineCard';
import ArticleNewspaperCard from './components/ArticleNewspaperCard/ArticleNewspaperCard';
import BookCard from './components/BookCard/BookCard';
import ConferenceCard from './components/ConferenceCard/ConferenceCard';
import SiteCard from './components/SiteCard/SiteCard';

const componentsConfig = {
    [SOURCE_CODES.BOOK_CODE]: BookCard,
    [SOURCE_CODES.ARTICLE_BOOK_CODE]: ArticleBookCard,
    [SOURCE_CODES.ARTICLE_MAGAZINE_CODE]: ArticleMagazineCard,
    [SOURCE_CODES.ARTICLE_NEWSPAPER_CODE]: ArticleNewspaperCard,
    [SOURCE_CODES.CONFERENCE_CODE]: ConferenceCard,
    [SOURCE_CODES.SITE_CODE]: SiteCard,
}

export default function SourceTable({ sourceData }) {
    return (
        <Box sx={{ width: '100%' }}>
            {sourceData?.filter(v => v).map(data => {
                const Component = componentsConfig[data?.code];
                const renderComnonent = () => <Component cardData={data} />;

                return <React.Fragment key={data.id}>{renderComnonent()}</React.Fragment>;
            })}
        </Box>
    );
}