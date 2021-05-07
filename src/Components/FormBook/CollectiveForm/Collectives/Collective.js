import React from 'react'
import Field from '../../../Field/Field';

const Collective = (props) => {
  return (
    <div>
      {props.state.collectives.map(p => 
      <div>
        <Field elem={p.collective} dispatch={props.dispatch} id={p.id} type='Collective' index={props.state.id}/>
      </div>
      )}
    </div>
  )
}

export default Collective;