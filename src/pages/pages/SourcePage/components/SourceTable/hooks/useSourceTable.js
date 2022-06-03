import { useQuery } from 'react-query';
import SourceAPI from '../../../../../../core/api/SourceAPI';

const useSourceTable = () => {
    const { data: sourceData } = useQuery({
        queryKey: [SourceAPI.name, SourceAPI.getSources.name],
        queryFn: SourceAPI.getSources,
    })
    return {
        sourceData
    };
}

export default useSourceTable;
