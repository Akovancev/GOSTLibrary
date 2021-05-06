import React from 'react'
import Field from '../../../Field';

const Translator = (props) => {
  return (
    <div>
      {props.state.translator.map(p => 
      <div>
        <Field elem={p.translatorSurname} dispatch={props.dispatch} id={p.id} type='Surname-T' index={props.state.id}/>
        <Field elem={p.translatorIO} dispatch={props.dispatch} id={p.id} type='IO-T' index={props.state.id}/>
      </div>
      )}
    </div>
  )
}

export default Translator;