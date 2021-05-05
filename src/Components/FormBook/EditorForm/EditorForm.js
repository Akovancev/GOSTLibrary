import React from 'react'
import ButtonEditor from './ButtonsEditor/ButtonsEditor';
import Editor from './Editors/Editor';

const EditorForm = (props) => {
    return (
        <>
            <Editor state={props.state}
                dispatch={props.dispatch} />
            <ButtonEditor dispatch={props.dispatch} check={props.state.editor.length > 0} />
        </>
    )
}

export default EditorForm;