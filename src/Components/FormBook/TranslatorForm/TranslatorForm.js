import React from 'react'
import ButtonTranslator from './ButtonTranslator/ButtonTranslator';
import Translator from './Translators/Translator';

const TranslatorForm = (props) => {
    return (
        <>
            <Translator state={props.state}
                dispatch={props.dispatch}/>
            <ButtonTranslator dispatch={props.dispatch} check={props.state.translator.length > 0} />
        </>
    )
}

export default TranslatorForm;