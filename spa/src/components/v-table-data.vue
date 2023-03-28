<template>
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
            <td>
              <button @click="showDetails(item)">
                {{ item.detailsOpen ? 'Close Details' : 'Show Details' }}
              </button>
              <div v-if="item.detailsOpen">
                <h2>Details for item {{ item.id }}</h2>
                <p>Description: {{ item.description }}</p>
                <p>Created At: {{ this.formatDate(item.date) }}</p>
</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      const fetchDataPromises = [
        axios.get('/api/data.json'),
        axios.get('/api/data_extended.json'),
      ];
  
      Promise.all(fetchDataPromises)
        .then(([dataResponse, extendedDataResponse]) => {
          this.items = dataResponse.data.map((item) => {
            const extendedItem = extendedDataResponse.data.find(
              (extendedItem) => extendedItem.id === item.id
            );
            return { ...item, ...extendedItem, detailsOpen: false };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
    showDetails(item) {
      console.log('showDetails called with item:', item);
      item.detailsOpen = !item.detailsOpen;
    },
    formatDate(dateString) {
        const date = new Date(dateString.replace(/[-+]\d{2}:\d{2}$/, ''));
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
    
  };
  </script>
  
  <style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 0px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3e8e41;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  