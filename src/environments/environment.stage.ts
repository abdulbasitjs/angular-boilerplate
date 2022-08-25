import { endpoints } from "@core/configs/endpoints";

export const environment = {
  production: true,
  LOG_LEVEL: 'ERROR',
  console: {
    baseUrl: 'http://10.0.36.44/',
    path: 'snxc/',
    apiVersion: 'v1/',
  },
  endpoints: [...endpoints],
};
