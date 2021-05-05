import React from 'react'
import Field from '../../Field';

const Author = (props) => {
  return (
    <div>
      {props.state.author.map(p => 
      <div>
        <Field elem={p.authorSurname} dispatch={props.dispatch} id={p.id} type='Surname-A'/>
        <Field elem={p.authorIO} dispatch={props.dispatch} id={p.id} type='IO-A'/>
      </div>
      )}
    </div>
  )
}

export default Author;