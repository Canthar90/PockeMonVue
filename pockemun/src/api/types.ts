export interface Pokemon {
  name: string
  url: string
}

export interface PokemonSlot {
  pokemon: Pokemon
  slot: number
}

export interface PokemonsByType {
  id: number
  name: TypeNames
  pokemon: PokemonSlot[]
}

type TypeNames =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown'
  | 'shadow'
