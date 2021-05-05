import React from 'react'
import Field from './../Field';

const Editor = (props) => {
  return (
    <div>
      {props.state.editor.map(p => 
      <div>
        <Field elem={p.editorSurname} dispatch={props.dispatch} id={p.id} type='Surname-E'/>
        <Field elem={p.editorIO} dispatch={props.dispatch} id={p.id} type='IO-E'/>
      </div>
      )}
    </div>
  )
}

export default Editor;