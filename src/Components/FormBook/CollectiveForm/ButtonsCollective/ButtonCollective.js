import React from 'react'

const ButtonCollective = (props) => {
    const onClickAdd = () => {
        let param = {
            type: 'ADD-COLLECTIVE'
        }
        props.dispatch(param)
    }
    const onClickDelete = () => {
        let param = {
            type: 'DELETE-COLLECTIVE'
        }
        props.dispatch(param)
    }
    if (props.check)
    return (
        <>
            <button onClick={onClickAdd}>Add Collective</button>
            <button onClick={onClickDelete}>Delete Collective</button>
        </>
    )
    else return (
        <>
            <button onClick={onClickAdd}>Add Collective</button>
        </>
    )
}

export default ButtonCollective;