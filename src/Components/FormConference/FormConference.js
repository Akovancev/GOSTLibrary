import React from 'react'
import Field from '../CommonComponents/Field/Field';

const FormConference = (props) => {
    return (
        <>
            <Field elem={props.state.title} dispatch={props.dispatch} index={props.state.id} type='Title-Conference' />
            <Field elem={props.state.titleInformation} dispatch={props.dispatch} index={props.state.id} type='Information-Conference' />
            <Field elem={props.state.cityConference} dispatch={props.dispatch} index={props.state.id} type='City-Conference' />
            <Field elem={props.state.dateConference} dispatch={props.dispatch} index={props.state.id} type='Date-Conference' />
            <Field elem={props.state.place}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Place' />
            <Field elem={props.state.publishingHouse}
                dispatch={props.dispatch}
                index={props.state.id}
                type='House' />
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Year' />
            <Field elem={props.state.count}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Count' />
        </>
    )
}

export default FormConference;