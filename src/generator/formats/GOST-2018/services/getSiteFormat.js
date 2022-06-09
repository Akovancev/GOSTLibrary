import moment from 'moment';

export default function getSiteFormat(source) {
    let text = '';
    text += source.title + ' : '
    text += source.titleInfo ? source.titleInfo : '[сайт]'
    text += '. - URL: ' + source.URL
    text += ' (дата обращения: ' + moment(source.date).format('DD.MM.YYYY') + ').'
    return text;
}