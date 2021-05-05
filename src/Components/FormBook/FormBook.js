import React from 'react'
import Author from './Author/Author';
import Collective from './Collectives/Collective';
import Editor from './Editors/Editor';
import Field from './Field';
import Translator from './Translators/Translator';

const FormBook = (props) => {
    return (
        <>
            <Author state={props.state}
                dispatch={props.dispatch}/>
            <button onClick={props.dispatch}>Add Author</button>
            <button onClick={props.dispatch}>Delete Author</button>
            <Field elem={props.state.title}
                dispatch={props.dispatch}
                type='Title' />
            <Field elem={props.state.titleInformation}
                dispatch={props.dispatch}
                type='Title-Information' />
            <Editor state={props.state}
                dispatch={props.dispatch} />
            <button onClick={props.dispatch}>Add Editor</button>
            <button onClick={props.dispatch}>Delete Editor</button>
            <Translator state={props.state}
                dispatch={props.dispatch}/>
            <button onClick={props.dispatch}>Add Translator</button>
            <button onClick={props.dispatch}>Delete Translator</button>
            <Collective state={props.state}
                dispatch={props.dispatch} />
            <button onClick={props.dispatch}>Add Collective</button>
            <button onClick={props.dispatch}>Delete Collective</button>
            <Field elem={props.state.place}
                dispatch={props.dispatch}
                type='Place' />
            <Field elem={props.state.replace}
                dispatch={props.dispatch}
                type='RePlace' />
            <Field elem={props.state.publishingHouse}
                dispatch={props.dispatch}
                type='House' />
            <Field elem={props.state.republishingHouse}
                dispatch={props.dispatch}
                type='ReHouse' />
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                type='Year' />
            <Field elem={props.state.count}
                dispatch={props.dispatch}
                type='Count' />
        </>
    )
}

export default FormBook;