import axios from 'axios';

const BASE_PATH_REQUEST = 'http://localhost:8000/api';
const SOURCE_PATH = `${BASE_PATH_REQUEST}/source`

const SourceAPI = {
    name: 'SourceAPI',

    async getSources() {
        const path = `${SOURCE_PATH}`;

        const { data } = await axios.get(path);

        return data;
    },

    async saveSources({ code, obj }) {
        const path = `${SOURCE_PATH}/create/${code}`;

        const { data } = await axios.post(path, obj);

        return data;
    },

    async deleteSources(sourceId) {
        const path = `${SOURCE_PATH}/delete/${sourceId}`;

        const { data } = await axios.delete(path);

        return data;
    }
}

export default SourceAPI;
