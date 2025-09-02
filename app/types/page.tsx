import { getPokemonTypes } from "@/lib/api";

export default async function Types() {
  const pokemonTypes = await getPokemonTypes();
  console.log(pokemonTypes.map((type: any) => type.name));

  return (
    <main className="flex flex-col flex-grow">
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          Types of Pokemon
        </h1>
        <p className="text-center text-white text-xl">
          Here you can find different types of Pokemon.
        </p>
        {/* List of types of Pokemon */}
        <div className="mt-8 max-w-4xl">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pokemonTypes.map((type: any) => (
              <li
                key={type.name}
                className="bg-white rounded-md shadow-md p-4 text-center"
              >
                {type.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
