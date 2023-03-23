<template>
  <div>
    <h2>Data Table</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Value</th>
          <th>Details</th>
          <div v-if="selectedItem">
      <h2>Details for item {{ selectedItem.id }}</h2>
      <p>Description: {{ selectedItem.description }}</p>
      <p>Created At: {{ selectedItem.created_at }}</p>
    </div>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
          <td><button @click="showDetails(item.id)">Details</button></td>
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
      selectedItem: null
    };
  },
  mounted() {
    const fetchDataPromises = [
      axios.get('/api/data.json'),
      axios.get('/api/data_extended.json')
    ];

    Promise.all(fetchDataPromises)
      .then(([dataResponse, extendedDataResponse]) => {
        this.items = dataResponse.data.map(item => {
          const extendedItem = extendedDataResponse.data.find(extendedItem => extendedItem.id === item.id);
          return { ...item, ...extendedItem };
        
        });
          console.log(extendedDataResponse)
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
      showDetails(itemId) {
console.log('showDetails called with itemId:', itemId);
const selectedItem = this.items.find(item => item.id === itemId);
console.log('selectedItem:', selectedItem);
this.selectedItem = selectedItem;
}

  }
}
</script>

