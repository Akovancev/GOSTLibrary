import React from 'react';
import ArticleBookCard from './components/ArticleBookCard/ArticleBookCard';
import ArticleMagazineCard from './components/ArticleMagazineCard/ArticleMagazineCard';
import ArticleNewspaperCard from './components/ArticleNewspaperCard/ArticleNewspaperCard';
import BookCard from './components/BookCard/BookCard';
import ConferenceCard from './components/ConferenceCard/ConferenceCard';
import SiteCard from './components/SiteCard/SiteCard';
import useSourceTable from './hooks/useSourceTable';

const SOURCE_CODES = {
    BOOK_CODE: 'BOOK',
    ARTICLE_BOOK_CODE: 'ARTICLE_BOOK',
    ARTICLE_MAGAZINE_CODE: 'ARTICLE_MAGAZINE',
    ARTICLE_NEWSPAPER_CODE: 'ARTICLE_NEWSPAPER',
    CONFERENCE_CODE: 'CONFERENCE',
    SITE_CODE: 'SITE',
};

const componentsConfig = {
    [SOURCE_CODES.BOOK_CODE]: BookCard,
    [SOURCE_CODES.ARTICLE_BOOK_CODE]: ArticleBookCard,
    [SOURCE_CODES.ARTICLE_MAGAZINE_CODE]: ArticleMagazineCard,
    [SOURCE_CODES.ARTICLE_NEWSPAPER_CODE]: ArticleNewspaperCard,
    [SOURCE_CODES.CONFERENCE_CODE]: ConferenceCard,
    [SOURCE_CODES.SITE_CODE]: SiteCard,
}

export default function SourceTable() {
    const { sourceData } = useSourceTable();

    return (
        <>
            {sourceData?.filter(v => v).map(data => {
                const Component = componentsConfig[data?.code];
                const renderComnonent = () => <Component cardData={data} />;

                return <>{renderComnonent()}</>;
            })}
        </>
    );
}