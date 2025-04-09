import Image from "next/image";

const HomePage = () => {
  return (
    <main className="bg-gradient-to-br from-[#f0e7db] to-[#d8dffa] min-h-screen w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 justify-center pt-20 px-4 lg:px-0">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf677d] to-[#9b4d67] text-7xl font-bold text-center drop-shadow-md">
          PORTFOLIO
        </h1>

        <h2 className="text-[#000000] text-5xl font-bold text-center drop-shadow-md">
          ELENE JABANISHVILI
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center mt-10">
          <Image
            src="/assets/hero.png"
            alt="hero img"
            width={500}
            height={400}
            className="w-[500px] h-[400px] object-cover rounded-2xl"
          />

          <div className="flex flex-col gap-6 max-w-[600px] p-6 bg-white/70 rounded-2xl shadow-lg">
            <p className="text-[#000000] text-xl font-medium">
              Je m’appelle Elene Jabanishvili. Je suis étudiante en 3ème année
              de BUT GEA (Gestion des Entreprises et des Administrations),
              option GEMA (Gestion Entrepreneuriat et Management d'Activités) à
              l’IUT Nancy-Charlemagne.
            </p>

            <p className="text-[#000000] text-xl font-medium">
              Mon objectif est de poursuivre mes études jusqu’à un Master Bac+5
              en marketing afin de développer des compétences dans ce domaine. À
              long terme, je vise à devenir Marketing Manager.
            </p>

            {/* <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-[#bf677d] text-white rounded-full font-medium hover:bg-[#9b4d67] transition-all">
                Contact
              </button>
              <button className="px-6 py-2 bg-[#bf677d] text-white rounded-full font-medium hover:bg-[#9b4d67] transition-all">
                More Info
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
