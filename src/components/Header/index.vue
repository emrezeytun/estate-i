<template>
  <div class="header">
    <div class="header-avatars-filters">
      <div class="avatars"><Avatars /></div>
      <div class="filters">
        <Input :type="'datetime'" label="From" />
      </div>
    </div>

    <div class="header-search">search bar</div>
  </div>
</template>

<script>
import { Input } from '@/components';
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
  }
}
</style>
