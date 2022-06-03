export function getPersonSurnameWithInitials(person) {
    return person.map(({ surname, initials }) => `${surname} ${initials} `)
}