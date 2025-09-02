export default function Pokedex({ pokemomType }: { pokemomType: string }) {
  return (
    <main className="flex flex-col flex-grow">
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">
          Pokemon Type {pokemomType}
        </h1>
        <p className="text-center text-white text-xl">
          Here you can find all the {pokemomType} type of Pokemon.
        </p>
        // List of Pokemon by type
        <div></div>
      </section>
    </main>
  );
}
