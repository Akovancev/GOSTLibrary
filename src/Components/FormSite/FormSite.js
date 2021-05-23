import React from 'react'
import Field from '../CommonComponents/Field/Field';

const FormSite = (props) => {
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
            <Field elem={props.state.place}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Place' />
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Year' />
        </>
    )
}

export default FormSite;