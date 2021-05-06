import React from 'react'

const ButtonEditor = (props) => {
    const onClickAdd = () => {
        let param = {
            id: props.state.id,
            type: 'ADD-EDITOR'
        }
        props.dispatch(param)
    }
    const onClickDelete = () => {
        let param = {
            id: props.state.id,
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