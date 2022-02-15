import { useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import axios, { Axios, AxiosError, AxiosResponse } from 'axios'
import { ApiConfig } from '../configs/api'

export type AxiosConfig = {
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
  url?: string
  params?: any
  data?: any
}

const axiosConfig = {
  baseURL: ApiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
}

const axiosInstance: Axios = axios.create(axiosConfig)

const useAxios = (axiosRequest: AxiosConfig) => {
  const [fetchConfig, setFetchConfig] = useState<AxiosConfig>()
  const [response, setResponse] = useState<AxiosResponse>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState<boolean>(false)

  useDeepCompareEffect(() => {
    const requestConfig = {
      ...axiosRequest,
      ...fetchConfig,
      params: {
        ...axiosRequest.params,
        ...fetchConfig?.params,
        apiKey: process.env.REACT_APP_API_KEY
      }
    }
    setLoading(true)
    axiosInstance
      .request(requestConfig)
      .then((res) => setResponse(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))

  }, [axiosRequest, fetchConfig])

  return [
    {
      response,
      error,
      loading,
    },
    setFetchConfig
  ] as const
}

export default useAxios
