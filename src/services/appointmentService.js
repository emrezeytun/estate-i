import { makePostRequest } from '@/helper';
import { baseUrl } from '@/constants';

const getAppointments = async (payload) => {
  const url = `${baseUrl}/v0/appkTtnhXACqj0kag/Appointments`;
  const result = await makePostRequest(url, '', 'eva_token', payload);
  return result;
};

export { getAppointments };
