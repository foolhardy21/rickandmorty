import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import PaginationNav from "./components/PaginationNav";
import styles from './App.module.css'
import { useModal } from "./contexts/modal.context";
import CharacterModal from "./components/CharacterModal";
import { usePage } from "./contexts/page.context";

const App = () => {
  const [characters, setCharacters] = useState([])
  const { modal } = useModal()
  const { pgNumber } = usePage()

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pgNumber}`)
      setCharacters(response.data.results)
    })()
  }, [pgNumber])

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
