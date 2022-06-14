import { SOURCE_CODES } from '../../../core/constants/SOURCE_CODES';
import getArticleBookFormat from './services/getArticleBookFormat';
import getBookFormat from './services/getBookFormat';
import getConferenceFormat from './services/getConferenceFormat';
import getSiteFormat from './services/getSiteFormat';

export default function getFormatStringGOST2018(source) {
    switch (source.code) {
        case SOURCE_CODES.BOOK_CODE: return getBookFormat(source);
        case SOURCE_CODES.ARTICLE_BOOK_CODE: return getArticleBookFormat(source);
        case SOURCE_CODES.ARTICLE_MAGAZINE_CODE: return () => {};
        case SOURCE_CODES.ARTICLE_NEWSPAPER_CODE: return () => {};
        case SOURCE_CODES.CONFERENCE_CODE: return getConferenceFormat(source);
        case SOURCE_CODES.SITE_CODE: return getSiteFormat(source);
        default: return () => {};
    }
}