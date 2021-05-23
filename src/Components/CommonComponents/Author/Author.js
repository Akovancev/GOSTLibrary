import React from 'react'
import Field from '../Field/Field';

const Author = (props) => {
  return (
    <div>
      {props.state.map(p => 
      <div>
        <Field elem={p.authorSurname} dispatch={props.dispatch} id={p.id} type={props.typeA} index={props.index}/>
        <Field elem={p.authorIO} dispatch={props.dispatch} id={p.id} type={props.typeB} index={props.index}/>
      </div>
      )}
    </div>
  )
}

export default Author;