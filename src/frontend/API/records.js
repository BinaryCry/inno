import axios from 'axios';

const fetchRecords = () =>
    axios.get('/api/records')
        .then((response) => response)
        .catch((error) => error.response);

const addRecord = (record) =>
    axios.put(`/api/add?record=${encodeURIComponent(record)}`)
        .then((response) => response)
        .catch((error) => error.response);

const clearRecords = () =>
    axios.delete('/api/records')
        .then((response) => response)
        .catch((error) => error.response);

export {
    fetchRecords,
    addRecord,
    clearRecords
}