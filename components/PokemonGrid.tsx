import PokemonCard from "@/components/PokemonCard";

export default function PokemonGrid({
  pokemonsList,
  listTitle,
}: {
  pokemonsList: any[];
  listTitle: string;
}) {
  return (
    <section className="p-8 bg-gradient-to-r from-purple-100 to-blue-100">
      <h2 className="text-3xl font-bold text-center mb-8 font-stretch-expanded">
        {listTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {pokemonsList.map((pokemon: any) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
