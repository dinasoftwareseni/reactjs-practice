import * as React from 'react'
import { ApiConfig } from '../../configs/api'
import { headers as headersConfig } from './config'
import Pages from '../../components/Pages'
import Table from '../../components/Table'
import useAxios from '../../hooks/useAxios'

export const Home: React.FC = () => {
  const [everythingState] = useAxios({
    url: ApiConfig.everythingApi,
    params: {
      q: 'bitcoin'
    }
  })

  return (
    <Pages title="News - Everything">
      <Table
        headers={headersConfig}
        items={everythingState.response?.data?.articles}
      />
    </Pages>
  )
}
