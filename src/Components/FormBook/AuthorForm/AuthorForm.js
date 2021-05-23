import React from 'react'
import Author from '../../CommonComponents/Author/Author';
import ButtonsAddDelete from '../../CommonComponents/ButtonsAddDelete/ButtonsAddDelete';

const AuthorForm = (props) => {
    if (!props.check)
    return (
        <>
            <Author state={props.state.author}
                dispatch={props.dispatch}
                index={props.state.id}
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