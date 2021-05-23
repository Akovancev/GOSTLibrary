import React from 'react'
import FormBook from '../FormBook/FormBook';
import FormArticle from '../FormArticle/FormArticle';
import FormConference from '../FormConference/FormConference';
import FormStandart from '../FormStandart/FormStandart';
import FormDissertation from '../FormDissertation/FormDissertation';
import FormSite from '../FormSite/FormSite';

const Selector = (props) => {
    switch (props.state.type) {
        case 'book':
            return (
                <>
                    <FormBook state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
        case 'article-book':
            return (
                <>
                    <FormArticle state={props.state} dispatch={props.dispatch} type='BOOK' />
                    <hr />
                </>
            )
        case 'article-magazine':
            return (
                <>
                    <FormArticle state={props.state} dispatch={props.dispatch} type='MAGAZINE' />
                    <hr />
                </>
            )
        case 'article-newspaper':
            return (
                <>
                    <FormArticle state={props.state} dispatch={props.dispatch} type='NEWSPAPER' />
                    <hr />
                </>
            )
        case 'conference':
            return (
                <>
                    <FormConference state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
        case 'standart':
            return (
                <>
                    <FormStandart state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
        // case 'dissertation':
        //     return (
        //         <>
        //             <FormDissertation state={props.state} dispatch={props.dispatch} />
        //             <hr />
        //         </>
        //     )
        case 'site':
            return (
                <>
                    <FormSite state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
    }
    return <></>
}

export default Selector;