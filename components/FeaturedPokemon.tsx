import PokemonCard from "@/components/PokemonCard";

export default function FeaturedPokemon({
  randomPokemons,
}: {
  randomPokemons: any[];
}) {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8 font-stretch-expanded">
        Featured Pokemon
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {randomPokemons.map((pokemon: any) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
