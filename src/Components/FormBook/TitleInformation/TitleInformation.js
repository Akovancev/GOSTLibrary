import React from 'react'
import Field from '../../CommonComponents/Field/Field'

const TitleInformation = (props) => {
    if (!props.check) {
        return (
            <>
                <Field elem={props.state.titleInformation}
                    dispatch={props.dispatch}
                    index={props.state.id}
                    type='Title-Information' />
            </>
        )
    }
    else return <></>
}

export default TitleInformation