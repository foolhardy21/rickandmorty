import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import PaginationNav from "./components/PaginationNav";
import styles from './App.module.css'
import { useModal } from "./contexts/modal.context";
import CharacterModal from "./components/CharacterModal";

const App = () => {
  const [characters, setCharacters] = useState([])
  const { modal } = useModal()

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://rickandmortyapi.com/api/character?page=1")
      setCharacters(response.data.results)
    })()
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh"
      }}
    >
      <Header />
      <PaginationNav />
      <section className={`grid grid-maxcols-4 ${styles.cardsGrid} mg-s`}>
        {
          characters?.map(char => <CharacterCard key={char.id} character={char} />)
        }
      </section>
      {
        modal.visible && <CharacterModal character={modal.value} />
      }
    </div>
  );
};

export default App;
