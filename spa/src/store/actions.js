import axios from 'axios';

export default {
  fetchData({ commit }) {
    return Promise.all([
      axios.get('/api/data.json'),
      axios.get('/api/data_extended.json')
    ]).then(([dataResponse, extendedDataResponse]) => {
      commit('setItems', { data: dataResponse.data, extendedData: extendedDataResponse.data });
    }).catch(error => {
      console.log(error);
    });
  }
}
