function getPersonsFormatString(persons) {
    let text = ''
    for (var p of persons) {
        text += p.initials + ' ' + p.surname + ', '
    }
    return text.substring(0, text.length - 2)
}

export default function getBookFormat(source, fromArticle) {
    let text = '';
    if (source.authors.length !== 0 && source.authors.length <= 3) {
        text += source.authors[0].surname + ' ' + source.authors[0].initials + ' '
    }
    text += source.title + ' '
    if (source.tomCount) {
        text += ': в ' + source.tomCount + ' т. '
        if (source.tomNumber) {
            text += 'Т. ' + source.tomNumber + ' '
            if (source.tomName) {
                text += source.tomName + ' '
            }
        }
    }
    if (source.titleInfo) {
        text += ': ' + source.titleInfo + ' '
    }
    text += '/ ' + getPersonsFormatString(source.authors)
    if (source.editors.length > 0) {
        text += ' ; под ред.' + getPersonsFormatString(source.editors)
    }
    if (source.translators.length > 0) {
        text += ' ; пер.' + getPersonsFormatString(source.translators)
    }
    text += '. - ' + source.place
    text += ' : ' + source.publishingHouse
    text += ', ' + source.yearOfPublishing
    text += fromArticle ? '' : '. - ' + source.numberOfPages + ' c.'
    return text;
}