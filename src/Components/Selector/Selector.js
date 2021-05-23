import React from 'react'
import FormBook from '../FormBook/FormBook';
import FormArticle from '../FormArticle/FormArticle';
import FormConference from '../FormConference/FormConference';
import FormStandart from '../FormStandart/FormStandart';
import FormDissertation from '../FormDissertation/FormDissertation';
import FormSite from '../FormSite/FormSite';
import TypeSelector from '../TypeSelector/TypeSelector';

const Selector = (props) => {
    switch (props.state.type) {
        case 'book':
            return (
                <>
                    <TypeSelector state={props.state} dispatch={props.dispatch} />
                    <FormBook state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
        case 'article-book':
            return (
                <>
                    <TypeSelector state={props.state} dispatch={props.dispatch} />
                    <FormArticle state={props.state} dispatch={props.dispatch} type='BOOK' />
                    <hr />
                </>
            )
        case 'article-magazine':
            return (
                <>
                    <TypeSelector state={props.state} dispatch={props.dispatch} />
                    <FormArticle state={props.state} dispatch={props.dispatch} type='MAGAZINE' />
                    <hr />
                </>
            )
        case 'article-newspaper':
            return (
                <>
                    <TypeSelector state={props.state} dispatch={props.dispatch} />
                    <FormArticle state={props.state} dispatch={props.dispatch} type='NEWSPAPER' />
                    <hr />
                </>
            )
        case 'conference':
            return (
                <>
                    <TypeSelector state={props.state} dispatch={props.dispatch} />
                    <FormConference state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
        case 'standart':
            return (
                <>
                    <TypeSelector state={props.state} dispatch={props.dispatch} />
                    <FormStandart state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
        // case 'dissertation':
        //     return (
        //         <>
        //            <TypeSelector state={props.state} dispatch={props.dispatch} />
        //             <FormDissertation state={props.state} dispatch={props.dispatch} />
        //             <hr />
        //         </>
        //     )
        case 'site':
            return (
                <>
                    <TypeSelector state={props.state} dispatch={props.dispatch} />
                    <FormSite state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
    }
    return <></>
}

export default Selector;