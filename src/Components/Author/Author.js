import React from 'react'
import Field from '../Field';

const Author = (props) => {
  return (
    <div>
      {props.state.author.map(p => 
      <div>
        <Field elem={p.authorSurname} update={props.updateAuthorSurname} id={p.id} type='IO-A'/>
        <Field elem={p.authorIO} update={props.updateAuthorIO} id={p.id} type='Surname-A'/>
      </div>
      )}
    </div>
  )
}

export default Author;