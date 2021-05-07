import React from 'react'
import Author from '../Author/Author';
import ButtonsAddDelete from '../ButtonsAddDelete/ButtonsAddDelete';
import Field from '../Field/Field';

const FormArticle = (props) => {
    return (
        <>
            <Field elem={props.state.titleArticle} dispatch={props.dispatch} index={props.state.id} type='Title-Article'/>
            <Author state={props.state.authorArticle} dispatch={props.dispatch} index={props.state.id} typeA='Surname-Article' typeB='IO-Article' />
            <ButtonsAddDelete dispatch={props.dispatch}
                    check={props.state.author.length > 1} 
                    id={props.state.id}
                    type='AUTHOR-ARTICLE'/>
        </>
    )
}

export default FormArticle;