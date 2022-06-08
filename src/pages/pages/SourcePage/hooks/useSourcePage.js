import { useQuery } from 'react-query';
import SourceAPI from '../../../../core/api/SourceAPI';
import useModal from './useModal';

const useSourcePage = () => {
    const { data: sourceData, refetch } = useQuery({
        queryKey: [SourceAPI.name, SourceAPI.getSources.name],
        queryFn: SourceAPI.getSources,
    })
    
    const {
        visible,
        handleOpenModal,
        handleCloseModal,
    } = useModal()

    async function onClose() {
        handleCloseModal();
        await refetch();
    }

    return {
        visible,
        handleOpenModal,
        handleCloseModal: onClose,
        sourceData,
    };
}

export default useSourcePage;
