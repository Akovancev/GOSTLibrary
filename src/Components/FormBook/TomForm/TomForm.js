import React from 'react'
import Field from './../Field';


const Tom = (props) => {
    if (props.check)
    return (
        <div>
            <Field elem={props.state.tomNumber} dispatch={props.dispatch} id={props.state.id} type='T-Number' index={props.state.id} />
            <Field elem={props.state.tomNume} dispatch={props.dispatch} id={props.state.id} type='T-Name' index={props.state.id} />
        </div>
    )
    else
    return <></>
}

export default Tom;