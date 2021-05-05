import React from 'react'
import Field from '../../Field';

const Editor = (props) => {
  return (
    <div>
      {props.state.editor.map(p => 
      <div>
        <Field elem={p.editorSurname} update={props.updateEditorSurname} id={p.id} type='IO-E'/>
        <Field elem={p.editorIO} update={props.updateEditorIO} id={p.id} type='Surname-E'/>
      </div>
      )}
    </div>
  )
}

export default Editor;