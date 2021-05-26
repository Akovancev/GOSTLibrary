import React from 'react'
import Field from '../CommonComponents/Field/Field';
import PlaceSite from './PlaceSite/PlaceSite';
import YearSite from './YearSite/YearSite';

const FormSite = (props) => {
    let checkPlace = React.createRef()
    let checkYear = React.createRef()
    const handleChangePlace = () => {
        let param = {
            type: 'UPDATE-CHECK-PLACE-SITE',
            id: props.state.id,
            newElem: checkPlace.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeYear = () => {
        let param = {
            type: 'UPDATE-CHECK-YEAR-SITE',
            id: props.state.id,
            newElem: checkYear.current.checked
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
            <input type="checkbox" ref={checkPlace} onChange={handleChangePlace} />Указать город
            <PlaceSite state={props.state} dispatch={props.dispatch} check={props.state.placeSiteCheck} />
            <input type="checkbox" ref={checkYear} onChange={handleChangeYear} />Указать год
            <YearSite state={props.state} dispatch={props.dispatch} check={props.state.yearSiteCheck} />
        </>
    )
}

export default FormSite;