import React from 'react'
import Field from '../../CommonComponents/Field/Field';

const YearSite = (props) => {
    if (props.check) {
        return (
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Year' />
        )

    }
    else return <></>
}

export default YearSite;