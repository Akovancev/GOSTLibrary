import React from 'react'
import ButtonsAddDelete from '../../CommonComponents/ButtonsAddDelete/ButtonsAddDelete';
import Collective from './Collectives/Collective';

const CollectiveForm = (props) => {
    return (
        <>
            <Collective state={props.state}
                dispatch={props.dispatch} />
            <ButtonsAddDelete dispatch={props.dispatch} 
                    check={props.state.collectives.length > 0} 
                    id={props.state.id}
                    type='COLLECTIVE'/>
        </>
    )
}

export default CollectiveForm;