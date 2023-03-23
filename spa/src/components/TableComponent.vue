<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in jsonData" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="loading">Loading data...</div>
      <div v-if="error">Error: {{ error }}</div>
    </div>
  </template>
  
  <script lang="js">

  import axios from 'axios';

  export default {
    data() {
      return {
        jsonData: [],
        loading: false,
        error: '',
      };
    },
    created() {
  axios.get('api/data.json')
    .then(response => {
      this.jsonData = response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

  };
  </script>
  