
<template>
  <div>
    <h2>Data Table</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="showDetails(item.id)"
              >
                Details
              </button>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div v-if="selectedItem">
                  <h6 class="dropdown-header">
                    Details for item {{ selectedItem.id }}
                  </h6>
                  <p class="dropdown-item">
                    Description: {{ selectedItem.description }}
                  </p>
                  <p class="dropdown-item">
                    Created At: {{ selectedItem.created_at }}
                  </p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      selectedItem: null
    };
  },
  computed: {
    items() {
      return store.state.items;
    }
  },
  mounted() {
    store.dispatch('FETCH_ITEMS');
  },
  methods: {
    showDetails(itemId) {
      store.commit('SELECT_ITEM', itemId);
    }
  }
}
</script>

