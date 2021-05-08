import React from 'react'
import ButtonsAddDelete from '../../CommonComponents/ButtonsAddDelete/ButtonsAddDelete';
import Editor from './Editors/Editor';

const EditorForm = (props) => {
    return (
        <>
            <Editor state={props.state}
                dispatch={props.dispatch} />
            <ButtonsAddDelete dispatch={props.dispatch}
                check={props.state.editor.length > 0}
                id={props.state.id}
                type='EDITOR' />
        </>
    )
}

export default EditorForm;