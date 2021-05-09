import React from 'react'
import Field from '../CommonComponents/Field/Field';

const FormStandart = (props) => {
    return (
        <>
            <Field elem={props.state.title}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title' />
            <Field elem={props.state.titleInformation}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title-Information' />
            <Field elem={props.state.titleStandartBefore}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title-Standart-Before' />
            <Field elem={props.state.dateStandart}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Date-Standart' />
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

export default FormStandart;