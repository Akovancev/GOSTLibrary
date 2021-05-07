import React from 'react'
import Field from '../CommonComponents/Field/Field';
import AuthorForm from './AuthorForm/AuthorForm';
import CollectiveForm from './CollectiveForm/CollectiveForm';
import EditorForm from './EditorForm/EditorForm';
import ReHouseForm from './ReHouseForm/ReHouseForm';
import TitleInformation from './TitleInformation/TitleInformation';
import Tom from './TomForm/TomForm';
import TranslatorForm from './TranslatorForm/TranslatorForm';
import Translator from './TranslatorForm/Translators/Translator';

const FormBook = (props) => {
    let checkAuthorRef = React.createRef()
    let checkTitleRef = React.createRef()
    let checkHouseRef = React.createRef()
    let checkTomRef = React.createRef()
    const handleChangeAuthor = () => {
        let param = {
            type: 'UPDATE-CHECK-AUTHOR',
            id: props.state.id,
            newElem: checkAuthorRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeTitle = () => {
        let param = {
            type: 'UPDATE-CHECK-TITLE',
            id: props.state.id,
            newElem: checkTitleRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeHouse = () => {
        let param = {
            type: 'UPDATE-CHECK-HOUSE',
            id: props.state.id,
            newElem: checkHouseRef.current.checked
        }
        props.dispatch(param)
    }
    const handleChangeTom = () => {
        let param = {
            type: 'UPDATE-CHECK-TOM',
            id: props.state.id,
            newElem: checkTomRef.current.checked
        }
        props.dispatch(param)
    }
    return (
        <>
            <AuthorForm state={props.state} dispatch={props.dispatch} check={props.state.authorCheck} />
            <input type="checkbox" ref={checkAuthorRef} onChange={handleChangeAuthor} />Без автора
            <Field elem={props.state.title}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Title' />
            <TitleInformation state={props.state} dispatch={props.dispatch} check={props.state.titleCheck} />
            <input type="checkbox" ref={checkTitleRef} onChange={handleChangeTitle} />Без сведений о книге
            <EditorForm state={props.state} dispatch={props.dispatch} />
            <TranslatorForm state={props.state} dispatch={props.dispatch} />
            <CollectiveForm state={props.state} dispatch={props.dispatch} />
            <Field elem={props.state.place}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Place' />
            <Field elem={props.state.publishingHouse}
                dispatch={props.dispatch}
                index={props.state.id}
                type='House' />
            {/* <input type="checkbox" ref={checkHouseRef} onChange={handleChangeHouse} />Была переиздана */}
            {/* <ReHouseForm state={props.state} dispatch={props.dispatch} check={props.state.houseCheck} /> */}
            <Field elem={props.state.year}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Year' />
            <Field elem={props.state.count}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Count' />
            <input type="checkbox" ref={checkTomRef} onChange={handleChangeTom} />Добавить том
            <Tom state={props.state} dispatch={props.dispatch} check={props.state.tomCheck} />
        </>
    )
}

export default FormBook;