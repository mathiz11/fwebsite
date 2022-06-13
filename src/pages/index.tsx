import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import styles from "../styles/Home.module.css";
import { Animal } from "../components/animal";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <Navbar />
      <div className={styles.mainImage}>
        <div className="flex flex-col h-full w-[40rem] mx-auto items-center justify-center text-white">
          <div className="border-white rounded-lg p-7 border-2 backdrop-blur-sm">
            <h2 className="text-5xl mb-4 text-center">Fleur Page</h2>
            <h1 className="text-2xl text-center mb-4">Ostéopathe Animalier</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vitae
              aut, incidunt aperiam quae corrupti nostrum omnis in doloremque
              alias eos at illum nemo? Odit vel quisquam nostrum nobis
              exercitationem.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-28">
        <h2 className="text-4xl text-center">Secteur d&apos;intervention</h2>
        <div className="flex justify-center mt-28 relative">
            <img
              src="/images/carte_france.webp"
              alt="Carte de la France"
              className="w-1/2"
            />

          <div className="absolute flex flex-col top-28 right-60 text-card-legend text-xl gap-3 font-bold">
            <span>HÉRAULT (34)</span>
            <span>GARD (30)</span>
            <span>ARDÈCHE (07)</span>
            <span>LOZÈRE (48)</span>
            <span>AVEYRON (12)</span>
            <span>HAUTE-LOIRE (43)</span>
            <span>LOIRE (42)</span>
            <span>CANTAL (15)</span>
            <span>PUY-DE-DOME (63)</span>
            <span>ALLIER (03)</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-28">
        <h2 className="text-4xl text-center">Types d&apos;animaux</h2>
        <div className="grid grid-cols-3 gap-10 justify-items-center mt-20">
          <Animal name="Animaux de rente" imageUrl="/images/animal-cow.jpeg" />
          <Animal name="Chevaux" imageUrl="/images/animal-horse.jpeg" />
          <Animal name="Chiens" imageUrl="/images/animal-dog.jpeg" />
          <Animal name="Chats" imageUrl="/images/animal-nac.jpeg" />
          <Animal name="NAC" imageUrl="/images/animal-nac.jpeg" />
        </div>
      </div>
      <div className="container mx-auto pt-28">
        <h2 className="text-4xl text-center">Quelques témoignages</h2>
      </div>
    </>
  );
};

export default Home;
