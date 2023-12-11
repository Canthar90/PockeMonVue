import axios from 'axios'

import type { PokemonsByType } from '@/api/types'

const getPokemonsByTypeName = async (name: string) => {
  const baseUrl = 'https://pokeapi.co/api/v2/type/'
  const url = `${baseUrl}/${name}/`

  const response = await axios.get<PokemonsByType>(url)
  return response.data
}

export default getPokemonsByTypeName
