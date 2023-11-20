import axios from 'axios'

import type { PokemonsByType } from '@/api/types'

const getPokemonsByTypesId = async (id: number) => {
  const baseUrl = 'https://pokeapi.co/api/v2/type/'
  const url = `${baseUrl}/${id}/`

  const response = await axios.get<PokemonsByType>(url)
  return response.data
}

export default getPokemonsByTypesId
