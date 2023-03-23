export default {
    setItems(state, { data, extendedData }) {
      const items = data.map(item => {
        const extendedItem = extendedData.find(extendedItem => extendedItem.id === item.id);
        return { ...item, ...extendedItem };
      });
      state.items = items;
    },
    setSelectedItem(state, selectedItem) {
      state.selectedItem = selectedItem;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    }
  }
  