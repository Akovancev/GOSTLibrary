import React from 'react'
import Field from '../Field';

const ReHouseForm = (props) => {
    if (props.check)
        return (
            <>
                <Field elem={props.state.replace}
                    dispatch={props.dispatch}
                    index={props.state.id}
                    type='RePlace' />
                <Field elem={props.state.republishingHouse}
                    dispatch={props.dispatch}
                    index={props.state.id}
                    type='ReHouse' />
            </>
        )
    else return <></>
}

export default ReHouseForm;