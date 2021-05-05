import React from 'react'

const ButtonAuthor = (props) => {
    const onClickAdd = () => {
        let param = {
            type: 'ADD-AUTHOR'
        }
        props.dispatch(param)
    }
    const onClickDelete = () => {
        let param = {
            type: 'DELETE-AUTHOR'
        }
        props.dispatch(param)
    }
    if (props.check)
    return (
        <>
            <button onClick={onClickAdd}>Add Author</button>
            <button onClick={onClickDelete}>Delete Author</button>
        </>
    )
    else return (
        <>
            <button onClick={onClickAdd}>Add Author</button>
        </>
    )
}

export default ButtonAuthor;