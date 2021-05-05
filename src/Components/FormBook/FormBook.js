import React from 'react'
import AuthorForm from './AuthorForm/AuthorForm';
import CollectiveForm from './CollectiveForm/CollectiveForm';
import EditorForm from './EditorForm/EditorForm';
import Field from './Field';
import ReHouseForm from './ReHouseForm/ReHouseForm';
import TitleInformation from './TitleInformation/TitleInformation';
import TranslatorForm from './TranslatorForm/TranslatorForm';
import Translator from './TranslatorForm/Translators/Translator';

const FormBook = (props) => {
    let checkAuthorRef = React.createRef()
    let checkTitleRef = React.createRef()
    let checkHouseRef = React.createRef()
    const handleChangeAuthor = () => {
        let param = {
            type: 'UPDATE-CHECK-AUTHOR',
            newElem: checkAuthorRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeTitle = () => {
        let param = {
            type: 'UPDATE-CHECK-TITLE',
            newElem: checkTitleRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeHouse = () => {
        let param = {
            type: 'UPDATE-CHECK-HOUSE',
            newElem: checkHouseRef.current.checked
        }
        props.dispatch(param)
    }
    return (
        <>
            <AuthorForm state={props.state} dispatch={props.dispatch} check={props.state.authorCheck} />
            <input type="checkbox" ref={checkAuthorRef} onChange={handleChangeAuthor} />Без автора
            <Field elem={props.state.title}
                dispatch={props.dispatch}
                type='Title' />
            <TitleInformation state={props.state} dispatch={props.dispatch} check={props.state.titleCheck} />
            <input type="checkbox" ref={checkTitleRef} onChange={handleChangeTitle} />Без сведений о книге
            <EditorForm state={props.state} dispatch={props.dispatch} />
            <TranslatorForm state={props.state} dispatch={props.dispatch} />
            <CollectiveForm state={props.state} dispatch={props.dispatch} />
            <Field elem={props.state.place}
                dispatch={props.dispatch}
                type='Place' />
            <Field elem={props.state.publishingHouse}
                dispatch={props.dispatch}
                type='House' />
            <input type="checkbox" ref={checkHouseRef} onChange={handleChangeHouse} />Была переиздана
            <ReHouseForm state={props.state} dispatch={props.dispatch} check={props.state.houseCheck} />
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                type='Year' />
            <Field elem={props.state.count}
                dispatch={props.dispatch}
                type='Count' />
        </>
    )
}

export default FormBook;