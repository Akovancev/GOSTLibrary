import getBookFormat from './getBookFormat';

function getPersonsFormatString(persons) {
    let text = ''
    for (var p of persons) {
        text += p.initials + ' ' + p.surname + ', '
    }
    return text.substring(0, text.length - 2)
}


export default function getArticleBookFormat(source) {
    let text = '';
    text += source.authors[0].surname + ' ' + source.authors[0].initials + ' '
    text += source.title + ' '
    text += '/ ' + getPersonsFormatString(source.authors) + ' // '
    text += getBookFormat(source.book, true)
    text += '. -  С. ' + source.count + '.'
    return text;
}