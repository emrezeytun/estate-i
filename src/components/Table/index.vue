<template>
  <div class="table-container">
    <table v-if="true">
      <thead>
        <tr>
          <th
            :style="{ width: column.width ? `${column.width}px` : '' }"
            v-for="column in columnFields"
            :key="column.title"
          >
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <div class="loading-area" v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import { Loading } from '@/components';
export default {
  name: 'Table',
  components: { Loading },
  props: {
    columnFields: {
      type: Array,
      default: () => [],
    },
    rowData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 14px;
  text-align: left;

  th,
  td {
    padding: 12px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #fff;
    font-weight: bold;
    text-align: left;
  }

  td {
    vertical-align: top;
  }

  thead tr {
    border-bottom: 2px solid #ddd;
  }

  tbody tr:nth-child(odd) {
    background-color: #f9f9f9;
  }
}
.loading-area {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
