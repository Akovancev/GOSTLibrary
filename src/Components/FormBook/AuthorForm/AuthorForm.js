import React from 'react'
import Author from '../../Author/Author';
import ButtonsAddDelete from '../../ButtonsAddDelete/ButtonsAddDelete';

const AuthorForm = (props) => {
    if (!props.check)
    return (
        <>
            <Author state={props.state.author}
                dispatch={props.dispatch}
                id={props.state.author.id}
                typeA='Surname-A'
                typeB='IO-A'/>
            <ButtonsAddDelete dispatch={props.dispatch} 
                    check={props.state.author.length > 1} 
                    id={props.state.id}
                    type='AUTHOR' />
        </>
    )
    else return <></>
}

export default AuthorForm;