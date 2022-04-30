import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "components/Header";
import { PaginationNav } from "components/Nav";
import { CharacterCard, CharacterModal } from "components/Character";
import { usePage, useModal } from "contexts";
import styles from "components/Character/character.module.css";

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
