import React, { useContext, useState } from 'react';

const SourceContext = React.createContext({});

export function useSourceContext() {
    return useContext(SourceContext);
}

export default function SourceContextProvider({ children }) {
    const [selectedCards, setSelectedCards] = useState([]);

    function handleSelectAllCard(sourceData) {
        setSelectedCards(sourceData)
    }

    function handleAddCard(cardData) {
        setSelectedCards(prevState => [...prevState, cardData]);
    }

    function handleRemoveCard(cardId) {
        setSelectedCards(prevState => prevState.filter(source => source.id !== cardId));
    }

    return (
        <SourceContext.Provider
            value={{
                selectedCards,
                handleSelectAllCard,
                handleAddCard,
                handleRemoveCard,
            }}
        >
            {children}
        </SourceContext.Provider>
    )
}
