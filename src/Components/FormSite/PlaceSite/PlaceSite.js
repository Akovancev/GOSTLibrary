import React from 'react'
import Field from '../../CommonComponents/Field/Field';

const PlaceSite = (props) => {
    if (props.check) {
        return (
            <Field elem={props.state.place}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Place' />
        )

    }
    else return <></>
}

export default PlaceSite;