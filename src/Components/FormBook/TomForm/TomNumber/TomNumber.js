import React from 'react'
import Field from '../../../CommonComponents/Field/Field';


const TomNumber = (props) => {
    if (props.check)
        return (
            <div>
                <Field elem={props.state.tomNumber} dispatch={props.dispatch} type='T-Number' index={props.state.id} />
                <Field elem={props.state.tomName} dispatch={props.dispatch} type='T-Name' index={props.state.id} />
            </div>
        )
    else
        return <></>
}

export default TomNumber;