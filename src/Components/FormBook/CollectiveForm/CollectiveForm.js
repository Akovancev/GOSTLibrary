import React from 'react'
import ButtonCollective from './ButtonsCollective/ButtonCollective';
import Collective from './Collectives/Collective';

const CollectiveForm = (props) => {
    return (
        <>
            <Collective state={props.state}
                dispatch={props.dispatch} />
            <ButtonCollective dispatch={props.dispatch} check={props.state.collectives.length > 0} state={props.state}/>
        </>
    )
}

export default CollectiveForm;