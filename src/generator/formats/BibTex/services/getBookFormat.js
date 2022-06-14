export default function getBookFormat(source, key) {
    return `@book{lit-${key},
    author = {${source.authors.map((value, index) => `${value.initials} ${value.surname}${index + 1 === source.authors.length ? '' : ' and '}`).join('')}},
    title = {${source.title}},
    volume = {${source.numberOfPages}},
    publisher = {${source.publishingHouse}},
    address = {${source.place}},
    year = {${source.yearOfPublishing}},
}`
}