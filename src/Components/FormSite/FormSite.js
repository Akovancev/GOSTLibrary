import React from 'react'
import Field from '../CommonComponents/Field/Field';
import PlaceSite from './PlaceSite/PlaceSite';

const FormSite = (props) => {
    let check = React.createRef()
    const handleChange = () => {
        let param = {
            type: 'UPDATE-CHECK-PLACE-SITE',
            id: props.state.id,
            newElem: check.current.checked
        }
        props.dispatch(param)
    }
    return (
        <>
            <Field elem={props.state.title}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title-Site' />
            <Field elem={props.state.titleInformation}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title-Site-Information' />
            <Field elem={props.state.URL}
                dispatch={props.dispatch}
                index={props.state.id}
                type='URL' />
            <Field elem={props.state.dateUsing}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Date-Using' />
            <input type="checkbox" ref={check} onChange={handleChange} />Указать город
            <PlaceSite state={props.state} dispatch={props.dispatch} check={props.state.placeSiteCheck} />
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Year' />
        </>
    )
}

export default FormSite;