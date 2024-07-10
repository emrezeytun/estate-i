<template>
  <div class="header">
    <div class="header-avatars-filters">
      <div class="avatar-area"><Avatars /></div>
      <div class="filter-area">
        <Selectbox
          @onChangeData="onChangeSelectboxData"
          :selectboxData="selectboxData"
        />
        <Input :type="'datetime'" label="From" />
        <Input :type="'datetime'" label="To" />
      </div>
    </div>

    <div class="header-search"></div>
  </div>
</template>

<script>
import { Input, Selectbox } from '@/components';
import Avatars from '../Avatars/index.vue';

export default {
  data() {
    return {
      selectboxData: [
        { id: 'all', name: 'All Statuses', selected: true },
        { id: 'cancelled', name: 'Cancelled', selected: false },
        { id: 'upcoming', name: 'Upcoming', selected: false },
        { id: 'completed', name: 'Completed', selected: false },
      ],
    };
  },
  components: {
    Input,
    Avatars,
    Selectbox,
  },
  methods: {
    onChangeSelectboxData(e) {
      console.log('eeee', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  padding: 12px;
  &-avatars-filters {
    display: flex;
    .filter-area {
      margin-left: 24px;
      display: flex;
      div {
        margin-right: 20px;
      }
    }
  }
}
</style>
