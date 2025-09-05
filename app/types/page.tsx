import { getPokemonTypes } from "@/lib/api";
import Link from "next/link";
import { PokemonType } from "@/lib/interfaces";

export default async function Types() {
  const pokemonTypes: PokemonType[] = await getPokemonTypes();

  return (
    <main className="flex flex-col flex-grow">
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          Pokemon Types
        </h1>
        <p className="text-center text-white text-xl max-w-2xl">
          Discover all the different Pokemon types. Click on any type to explore
          Pokemon of that category.
        </p>
      </section>

      {/* Pokemon Types Grid */}
      <section className="flex-grow bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {pokemonTypes.map((type: PokemonType) => (
              <Link href={`/search?pokemonType=${type.name}`} key={type.name}>
                <div className="bg-gray-50 hover:bg-purple-50 rounded-lg p-3 text-center transition-colors border border-gray-300 hover:border-purple-200">
                  <span className="text-gray-700 hover:text-purple-600 font-medium text-sm capitalize transition-colors">
                    {type.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
