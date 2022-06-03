import axios from 'axios';

const BASE_PATH_REQUEST = 'http://localhost:8000/api';
const SOURCE_PATH = '/source'

const SourceAPI = {
    name: 'SourceAPI',

    async getSources() {
        const path = `${BASE_PATH_REQUEST}${SOURCE_PATH}`;

        const { data } = await axios.get(path);

        return data;
    },

    async saveSources({ code, obj }) {
        const path = `${BASE_PATH_REQUEST}${SOURCE_PATH}/create/${code}`;

        const { data } = await axios.post(path, obj);

        return data;
    }
}

export default SourceAPI;
