import React from 'react'

const TypeSelector = (props) => {
    let changeSelect = React.createRef();
    const onChangeSelect = () => {
        let param = {
            type: 'UPDATE-TYPE',
            id: props.state.id,
            newElem: changeSelect.current.value
          }
      props.dispatch(param)
    }
    return (
        <select onChange={onChangeSelect} ref={changeSelect}>
            <option value="book">Книги, в том числе и многотомные</option>
            <option value="article-book">Статья из книги</option>
            <option value="article-magazine">Статья из журнала</option>
            <option value="article-newspaper">Статья из газеты</option>
            <option value="conference">Материалы конференции</option>
            <option value="standart">ГОСТы и стандарты</option>
            <option value="site">Сайт</option>
        </select>
    )
}

export default TypeSelector;