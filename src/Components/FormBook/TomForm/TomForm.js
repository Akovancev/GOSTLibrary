import React from 'react'
import Field from '../../CommonComponents/Field/Field';
import TomNumber from './TomNumber/TomNumber';


const Tom = (props) => {
    let checkTomRef = React.createRef()
    const handleChangeTom = () => {
        let param = {
            type: 'UPDATE-CHECK-TOM-NUMBER',
            id: props.state.id,
            newElem: checkTomRef.current.checked
        }
        props.dispatch(param)
    }
    if (props.check)
    return (
        <div>
            <Field elem={props.state.tomCount} dispatch={props.dispatch} type='T-Count' index={props.state.id} />
            <input type="checkbox" ref={checkTomRef} onChange={handleChangeTom} />Указать конкретный том
            <TomNumber state={props.state} dispatch={props.dispatch} check={props.state.tomCheckNumber} />
        </div>
    )
    else
    return <></>
}

export default Tom;