import axios from 'axios';

const getApiUrl = (serverURL) => (
  import.meta.env.VITE_FINANCIAL_CHECKUP_API_URL
  || (import.meta.env.DEV ? 'http://localhost:3001/api/financial-checkup' : `${serverURL}financial-checkup`)
).replace(/\/$/, '');

export const submitFinancialCheckup = async (serverURL, payload) => {
  const response = await axios.post(getApiUrl(serverURL), payload, {
    headers: { 'Content-Type': 'application/json' },
    timeout: 15000,
  });

  return response.data;
};

export const submitFinancialCheckupIntent = async (serverURL, payload, checkupId) => {
  const configuredUrl = import.meta.env.VITE_FINANCIAL_CHECKUP_INTENT_URL;
  const endpoint = configuredUrl
    || `${getApiUrl(serverURL)}${checkupId ? `/${checkupId}/intent` : '/intent'}`;

  const response = await axios.post(endpoint, payload, {
    headers: { 'Content-Type': 'application/json' },
    timeout: 15000,
  });

  return response.data;
};
