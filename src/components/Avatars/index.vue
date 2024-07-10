<template>
  <div class="avatars">
    <Avatar
      v-for="item in avatarDatas.splice(0, maxAvatarLength)"
      :key="item.id"
      :backgroundColor="item.fields.color"
      :shortName="getShortName(item)"
    />
    <Avatar
      v-if="avatarDatas.length > 4"
      key="avatar-length"
      :shortName="'+' + (avatarDatas.length - maxAvatarLength)"
    />
  </div>
</template>

<script>
import Avatar from './components/Avatar/index.vue';
export default {
  data() {
    return {
      avatarDatas: [
        {
          id: 'recv2eOx47hJolMmD',
          createdTime: '2024-03-14T09:34:49.000Z',
          fields: {
            number: 200,
            agent_name: 'Lily',
            agent_surname: 'Karna',
            appointments: [
              'reciomfUJQy6L3XSK',
              'recBJPJamDeLtrRsc',
              'recJIiXM3blQiLrhX',
            ],
            color: '#CCD070',
          },
        },
        {
          id: 'reccZAwbtejBVSEAz',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 201,
            agent_name: 'Tami',
            agent_surname: 'Colp',
            color: '#5B8AD9',
          },
        },
        {
          id: 'recgLojAPLhYtfBHk',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 202,
            agent_name: 'Rani',
            agent_surname: 'Raseda',
            appointments: ['receIPCqNIGfDljah'],
            color: '#E08415',
          },
        },
        {
          id: 'recv2eOx47hJolMmD',
          createdTime: '2024-03-14T09:34:49.000Z',
          fields: {
            number: 200,
            agent_name: 'Lily',
            agent_surname: 'Karna',
            appointments: [
              'reciomfUJQy6L3XSK',
              'recBJPJamDeLtrRsc',
              'recJIiXM3blQiLrhX',
            ],
            color: '#CCD070',
          },
        },
        {
          id: 'reccZAwbtejBVSEAz',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 201,
            agent_name: 'Tami',
            agent_surname: 'Colp',
            color: '#5B8AD9',
          },
        },
        {
          id: 'recgLojAPLhYtfBHk',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 202,
            agent_name: 'Rani',
            agent_surname: 'Raseda',
            appointments: ['receIPCqNIGfDljah'],
            color: '#E08415',
          },
        },
        {
          id: 'recv2eOx47hJolMmD',
          createdTime: '2024-03-14T09:34:49.000Z',
          fields: {
            number: 200,
            agent_name: 'Lily',
            agent_surname: 'Karna',
            appointments: [
              'reciomfUJQy6L3XSK',
              'recBJPJamDeLtrRsc',
              'recJIiXM3blQiLrhX',
            ],
            color: '#CCD070',
          },
        },
        {
          id: 'reccZAwbtejBVSEAz',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 201,
            agent_name: 'Tami',
            agent_surname: 'Colp',
            color: '#5B8AD9',
          },
        },
        {
          id: 'recgLojAPLhYtfBHk',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 202,
            agent_name: 'Rani',
            agent_surname: 'Raseda',
            appointments: ['receIPCqNIGfDljah'],
            color: '#E08415',
          },
        },
        {
          id: 'recv2eOx47hJolMmD',
          createdTime: '2024-03-14T09:34:49.000Z',
          fields: {
            number: 200,
            agent_name: 'Lily',
            agent_surname: 'Karna',
            appointments: [
              'reciomfUJQy6L3XSK',
              'recBJPJamDeLtrRsc',
              'recJIiXM3blQiLrhX',
            ],
            color: '#CCD070',
          },
        },
        {
          id: 'reccZAwbtejBVSEAz',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 201,
            agent_name: 'Tami',
            agent_surname: 'Colp',
            color: '#5B8AD9',
          },
        },
        {
          id: 'recgLojAPLhYtfBHk',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 202,
            agent_name: 'Rani',
            agent_surname: 'Raseda',
            appointments: ['receIPCqNIGfDljah'],
            color: '#E08415',
          },
        },
        {
          id: 'recv2eOx47hJolMmD',
          createdTime: '2024-03-14T09:34:49.000Z',
          fields: {
            number: 200,
            agent_name: 'Lily',
            agent_surname: 'Karna',
            appointments: [
              'reciomfUJQy6L3XSK',
              'recBJPJamDeLtrRsc',
              'recJIiXM3blQiLrhX',
            ],
            color: '#CCD070',
          },
        },
        {
          id: 'reccZAwbtejBVSEAz',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 201,
            agent_name: 'Tami',
            agent_surname: 'Colp',
            color: '#5B8AD9',
          },
        },
        {
          id: 'recgLojAPLhYtfBHk',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 202,
            agent_name: 'Rani',
            agent_surname: 'Raseda',
            appointments: ['receIPCqNIGfDljah'],
            color: '#E08415',
          },
        },
        {
          id: 'recv2eOx47hJolMmD',
          createdTime: '2024-03-14T09:34:49.000Z',
          fields: {
            number: 200,
            agent_name: 'Lily',
            agent_surname: 'Karna',
            appointments: [
              'reciomfUJQy6L3XSK',
              'recBJPJamDeLtrRsc',
              'recJIiXM3blQiLrhX',
            ],
            color: '#CCD070',
          },
        },
        {
          id: 'reccZAwbtejBVSEAz',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 201,
            agent_name: 'Tami',
            agent_surname: 'Colp',
            color: '#5B8AD9',
          },
        },
        {
          id: 'recgLojAPLhYtfBHk',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 202,
            agent_name: 'Rani',
            agent_surname: 'Raseda',
            appointments: ['receIPCqNIGfDljah'],
            color: '#E08415',
          },
        },
        {
          id: 'recv2eOx47hJolMmD',
          createdTime: '2024-03-14T09:34:49.000Z',
          fields: {
            number: 200,
            agent_name: 'Lily',
            agent_surname: 'Karna',
            appointments: [
              'reciomfUJQy6L3XSK',
              'recBJPJamDeLtrRsc',
              'recJIiXM3blQiLrhX',
            ],
            color: '#CCD070',
          },
        },
        {
          id: 'reccZAwbtejBVSEAz',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 201,
            agent_name: 'Tami',
            agent_surname: 'Colp',
            color: '#5B8AD9',
          },
        },
        {
          id: 'recgLojAPLhYtfBHk',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 202,
            agent_name: 'Rani',
            agent_surname: 'Raseda',
            appointments: ['receIPCqNIGfDljah'],
            color: '#E08415',
          },
        },
        {
          id: 'recv2eOx47hJolMmD',
          createdTime: '2024-03-14T09:34:49.000Z',
          fields: {
            number: 200,
            agent_name: 'Lily',
            agent_surname: 'Karna',
            appointments: [
              'reciomfUJQy6L3XSK',
              'recBJPJamDeLtrRsc',
              'recJIiXM3blQiLrhX',
            ],
            color: '#CCD070',
          },
        },
        {
          id: 'reccZAwbtejBVSEAz',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 201,
            agent_name: 'Tami',
            agent_surname: 'Colp',
            color: '#5B8AD9',
          },
        },
        {
          id: 'recgLojAPLhYtfBHk',
          createdTime: '2024-03-14T09:37:15.000Z',
          fields: {
            number: 202,
            agent_name: 'Rani',
            agent_surname: 'Raseda',
            appointments: ['receIPCqNIGfDljah'],
            color: '#E08415',
          },
        },
      ],
    };
  },
  props: {
    maxAvatarLength: {
      type: Number,
      default: 4,
    },
  },
  components: {
    Avatar,
  },
  methods: {
    getShortName(item) {
      return item?.fields?.agent_name[0] + item?.fields?.agent_surname[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.avatars {
  display: flex;
  align-items: center;

  .avatar {
    margin-right: -6px;
    z-index: 1;
  }
}
</style>
