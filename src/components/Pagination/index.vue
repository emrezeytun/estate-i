<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">
      <span>&lt;</span>
    </button>
    <span
      v-for="page in pages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      <span>&gt;</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      let startPage = Math.max(1, this.currentPage - 2);
      let endPage = Math.min(this.totalPages, this.currentPage + 2);

      if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
        endPage = Math.min(this.totalPages, startPage + 4);
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      this.$emit('update:currentPage', page);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0 1rem;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: #1a2e75;
    margin: 0 0.5rem;
    cursor: pointer;

    &.active {
      color: white;
      background-color: #1a2e75;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
