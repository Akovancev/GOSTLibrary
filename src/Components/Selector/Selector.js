import React from 'react'
import FormBook from '../FormBook/FormBook';

const Selector = (props) => {
    switch (props.state.type) {
        case 0:
            return (
                <>
                    <FormBook state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
    }
    return <></>
}

export default Selector;