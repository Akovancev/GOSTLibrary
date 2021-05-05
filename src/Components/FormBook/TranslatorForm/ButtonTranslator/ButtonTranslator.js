import React from 'react'

const ButtonTranslator = (props) => {
    const onClickAdd = () => {
        let param = {
            type: 'ADD-TRANSLATOR'
        }
        props.dispatch(param)
    }
    const onClickDelete = () => {
        let param = {
            type: 'DELETE-TRANSLATOR'
        }
        props.dispatch(param)
    }
    if (props.check)
    return (
        <>
            <button onClick={onClickAdd}>Add Translator</button>
            <button onClick={onClickDelete}>Delete Translator</button>
        </>
    )
    else return (
        <>
            <button onClick={onClickAdd}>Add Translator</button>
        </>
    )
}

export default ButtonTranslator;