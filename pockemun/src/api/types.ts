export interface Pokemon {
  name: string
  url: string
}

export interface PokemonSlot {
  pokemon: Pokemon
  slot: number
}

export interface Language {
  language: {
    name: string
    url: string
  }
  name: string
}

export interface Move {
  name: string
  url: string
}

export interface MoveDamageClass {
  name: string
  url: string
}

export interface Generation {
  name: string
  url: string
}

export interface GameIndice {
  game_index: number
  generation: {
    name: string
    url: string
  }
}

export interface DamageRelations {
  double_damage_from: [
    {
      name: string
      url: string
    }
  ]
  doubel_damage_to: [
    {
      name: string
      url: string
    }
  ]
  half_damage_from: [
    {
      name: string
      url: string
    }
  ]
  half_damage_to: [
    {
      name: string
      url: string
    }
  ]
  no_damage_from: [
    {
      name: string
      url: string
    }
  ]
  no_damage_to: [
    {
      name: string
      url: string
    }
  ]
}

export interface PokemonsByType {
  damage_relations: DamageRelations
  game_indicies: GameIndice[]
  generation: Generation
  id: number
  move_damage_class: MoveDamageClass
  moves: Move[]
  name: string
  names: Language[]
  past_damage_relations: []
  pokemon: PokemonSlot[]
}
