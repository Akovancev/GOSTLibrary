import React from 'react'
import FormBook from '../FormBook/FormBook';
import FormArticle from '../FormArticle/FormArticle';

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
                    <FormArticle state={props.state} dispatch={props.dispatch} />
                    <hr />
                </>
            )
    }
    return <></>
}

export default Selector;