import React from 'react'
import Author from './Author/Author';
import ButtonAuthor from './ButtonsAuthor/ButtonAuthor';

const AuthorForm = (props) => {
    if (!props.check)
    return (
        <>
            <Author state={props.state}
                dispatch={props.dispatch}/>
            <ButtonAuthor dispatch={props.dispatch} check={props.state.author.length > 1} />
        </>
    )
    else return <></>
}

export default AuthorForm;