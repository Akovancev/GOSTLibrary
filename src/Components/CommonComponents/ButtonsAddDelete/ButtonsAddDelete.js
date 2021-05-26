import React from 'react'

const ButtonsAddDelete = (props) => {
    const onClickAdd = () => {
        let param = {
            id: props.id,
            type: 'ADD-' + props.type
        }
        props.dispatch(param)
    }
    const onClickDelete = () => {
        let param = {
            id: props.id,
            type: 'DELETE-' + props.type
        }
        props.dispatch(param)
    }
    if (props.check)
    return (
        <>
            <button onClick={onClickAdd}>Добавить источник</button>
            <button onClick={onClickDelete}>Удалить источник</button>
        </>
    )
    else return (
        <>
            <button onClick={onClickAdd}>Добавить источник</button>
        </>
    )
}

export default ButtonsAddDelete;