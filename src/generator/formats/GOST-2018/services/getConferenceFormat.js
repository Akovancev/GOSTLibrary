import moment from 'moment';

function getPersonsFormatString(persons) {
    let text = ''
    for (var p of persons) {
        text += p.initials + ' ' + p.surname + ', '
    }
    return text.substring(0, text.length - 2)
}


export default function getConferenceFormat(source) {
    let text = '';
    text += source.title + ' ';
    if (source.titleInfo) {
        text += ': ' + source.titleInfo + ' '
    }
    text += ', ' + source.city
    text += ', ' + moment(source.date).format('DD.MM.YYYY')
    if (source.editors.length > 0) {
        text += ' / под ред.' + getPersonsFormatString(source.editors)
    }
    text += '. - ' + source.place
    text += ' : ' + source.publishingHouse
    text += ', ' + moment(source.date).format('YYYY')
    text += '. - ' + source.numberOfPages + ' c.'
    return text;
}