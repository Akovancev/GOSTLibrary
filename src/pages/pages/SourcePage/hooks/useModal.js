import { useState } from 'react';

const useModal= () => {
    const [visible, setVisible] = useState(false);

    function handleOpenModal() {
        setVisible(true);
    }
    
    function handleCloseModal() {
        setVisible(false);
    }

    return {
        visible,
        handleOpenModal,
        handleCloseModal,
    }
}

export default useModal;
