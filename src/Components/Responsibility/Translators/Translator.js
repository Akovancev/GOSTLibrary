import React from 'react'
import Field from '../../Field';

const Translator = (props) => {
  return (
    <div>
      {props.state.editor.map(p => 
      <div>
        <Field elem={p.translatorSurname} update={props.updateTranslatorSurname} id={p.id} type='IO-T'/>
        <Field elem={p.translatorIO} update={props.updateTranslatorIO} id={p.id} type='Surname-T'/>
      </div>
      )}
    </div>
  )
}

export default Translator;