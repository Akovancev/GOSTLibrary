import React from 'react'
import Field from '../../CommonComponents/Field/Field'

const NumberArticle = (props) => {
    if(!props.check) {
        return (
            <Field elem={props.state.numberArticle}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Number' />
        )
    }
    else return <></>
}

export default NumberArticle