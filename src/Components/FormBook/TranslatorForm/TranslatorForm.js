import React from 'react'
import ButtonsAddDelete from '../../CommonComponents/ButtonsAddDelete/ButtonsAddDelete';
import Translator from './Translators/Translator';

const TranslatorForm = (props) => {
    return (
        <>
            <Translator state={props.state}
                dispatch={props.dispatch} />
            <ButtonsAddDelete dispatch={props.dispatch}
                check={props.state.translator.length > 0}
                id={props.state.id}
                type='TRANSLATOR' />
        </>
    )
}

export default TranslatorForm;