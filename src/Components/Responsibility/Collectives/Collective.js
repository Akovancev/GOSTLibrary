import React from 'react'
import Field from '../../Field';

const Collective = (props) => {
  return (
    <div>
      {props.state.collectives.map(p => 
      <div>
        <Field elem={p.collective} update={props.updateCollective} id={p.id} type='Collective'/>
      </div>
      )}
    </div>
  )
}

export default Collective;