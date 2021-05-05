import React from 'react'

const ButtonEditor = (props) => {
    const onClickAdd = () => {
        let param = {
            type: 'ADD-EDITOR'
        }
        props.dispatch(param)
    }
    const onClickDelete = () => {
        let param = {
            type: 'DELETE-EDITOR'
        }
        props.dispatch(param)
    }
    if (props.check)
    return (
        <>
            <button onClick={onClickAdd}>Add Editor</button>
            <button onClick={onClickDelete}>Delete Editor</button>
        </>
    )
    else return (
        <>
            <button onClick={onClickAdd}>Add Editor</button>
        </>
    )
}

export default ButtonEditor;