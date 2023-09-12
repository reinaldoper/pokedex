
export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
}

export interface Species {
  name: string;
  url: string;
}

export interface AbilitySprites {
  name: string;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface PokemonAbilitiesResponse {
  name: string;
  sprites: AbilitySprites;
}

export interface Ability {
  abilities: [
    {
      ability: {
        name: string,
        url: string
      },
      is_hidden: boolean,
      slot: number
    },
  ],
}

export interface ListAbility {
  abilities: Ability[];
  sprites: AbilitySprites[];
}

