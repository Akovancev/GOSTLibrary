import React from 'react'
import Author from '../CommonComponents/Author/Author';
import ButtonsAddDelete from '../ButtonsAddDelete/ButtonsAddDelete';
import Field from '../Field/Field';
import AuthorForm from '../FormBook/AuthorForm/AuthorForm';
import TitleInformation from '../FormBook/TitleInformation/TitleInformation';
import EditorForm from '../FormBook/EditorForm/EditorForm';
import TranslatorForm from '../FormBook/TranslatorForm/TranslatorForm';
import CollectiveForm from '../FormBook/CollectiveForm/CollectiveForm';
import Tom from '../FormBook/TomForm/TomForm';

const FormArticle = (props) => {
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
            <Field elem={props.state.titleArticle} dispatch={props.dispatch} index={props.state.id} type='Title-Article' />
            <Author state={props.state.authorArticle} dispatch={props.dispatch} index={props.state.id} typeA='Surname-Article' typeB='IO-Article' />
            <ButtonsAddDelete dispatch={props.dispatch}
                check={props.state.authorArticle.length > 1}
                id={props.state.id}
                type='AUTHOR-ARTICLE' />

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
            <input type="checkbox" ref={checkTomRef} onChange={handleChangeTom} />Добавить том
            <Tom state={props.state} dispatch={props.dispatch} check={props.state.tomCheck} />
            <Field elem={props.state.count}
                dispatch={props.dispatch}
                index={props.state.id}
                type='Count' />
        </>
    )
}

export default FormArticle;