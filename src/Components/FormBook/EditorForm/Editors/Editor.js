import React from 'react'
import Field from '../../../CommonComponents/Field/Field';

const Editor = (props) => {
  return (
    <div>
      {props.state.editor.map(p => 
      <div>
        <Field elem={p.editorSurname} dispatch={props.dispatch} id={p.id} type='Surname-E' index={props.state.id}/>
        <Field elem={p.editorIO} dispatch={props.dispatch} id={p.id} type='IO-E' index={props.state.id}/>
      </div>
      )}
    </div>
  )
}

export default Editor;