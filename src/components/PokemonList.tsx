import { useState, useEffect } from 'react';

function PokemonList() {

  type PokemonAttributes = {
    name: string;
    url: string;
  }
  type PokemonAPIReponse = {
    count: number;
    next: string;
    previous: string;
    results: Array<PokemonAttributes>;
  }

  const [pokeList, setPokeList] = useState<PokemonAPIReponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokeList = async () => {
      const URL_API = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      const fetchList = await fetch(URL_API);
      const response = await fetchList.json();
      setPokeList(response);
      setIsLoading(false);
    }

    fetchPokeList();
  }, [])

  if (isLoading) return;

  return (<main>
    <h1>Poke list</h1>
    <p>total Pokemons: {pokeList && pokeList.count}</p>
    <ul>
      {
        pokeList?.results && pokeList['results'].map((pokemon) =>
          (<li key={pokemon.name}>{pokemon.name}</li>)
        )
      }
    </ul>
  </main>)
}

export default PokemonList;
