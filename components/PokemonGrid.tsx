import PokemonCardContainer from "@/components/PokemonCardContainer";
import { PokemonType } from "@/lib/interfaces";

interface PokemonGridProps {
  pokemonsList: PokemonType[];
  title: string;
  className?: string;
}

export default function PokemonGrid({
  pokemonsList,
  title,
  className = "p-8 bg-gradient-to-r from-purple-100 to-blue-100",
}: PokemonGridProps) {
  return (
    <section className={className}>
      <h2 className="text-3xl font-bold text-center mb-8 font-stretch-expanded">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {pokemonsList.map((pokemon) => (
          <PokemonCardContainer key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
