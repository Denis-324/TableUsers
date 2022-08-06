/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { NetworkError } from './errors';
import { TApiResponse } from './types';

export const makeRequest = <T>({
  baseURL = 'https://jsonplaceholder.typicode.com/',
  url,
  method = 'get',
  headers = { },
  params = {},
  responseType = 'json',
  data = {},
  onUploadProgress,
}: AxiosRequestConfig): TApiResponse<T> =>

    axios
      .request({
        baseURL,
        url,
        method,
        headers,
        params,
        responseType,
        data,
        onUploadProgress,
      })
      .catch(async ({ response }: AxiosError) => {
        if (response) {
          const {
            data: { message },
            status,
          } = response;
          throw new NetworkError({ message, status });
        } else {
          throw new NetworkError({
            message: 'Соединение с сервером отсутствует',
            status: 502,
          });
        }
      });
