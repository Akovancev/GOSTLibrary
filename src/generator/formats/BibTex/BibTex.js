import { SOURCE_CODES } from "../../../core/constants/SOURCE_CODES";
import getBookFormat from "./services/getBookFormat";

export default function getFormatStringBibTex(source, key) {
    switch (source.code) {
        case SOURCE_CODES.BOOK_CODE: return getBookFormat(source, key + 1);
        case SOURCE_CODES.ARTICLE_BOOK_CODE: return () => { };
        case SOURCE_CODES.ARTICLE_MAGAZINE_CODE: return () => { };
        case SOURCE_CODES.ARTICLE_NEWSPAPER_CODE: return () => { };
        case SOURCE_CODES.CONFERENCE_CODE: return () => { };
        case SOURCE_CODES.SITE_CODE: return () => { };
        default: return () => { };
    }
}